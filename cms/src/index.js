"use strict";

const { connect } = require("http2");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  async register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    const parser = require("xml2json");
    const fs = require("fs");
    const path = require("path");
    const xml = fs.readFileSync(
      path.join(__dirname, "/data/hmcc.aa.wordpress.2024-03-23.xml"),
      "utf-8"
    );
    const result = parser.toJson(xml, {
      object: true,
      coerce: true,
    });

    let seriesEntry = await strapi.entityService.findMany(
      "api::sermon-series.sermon-series",
      {
        fields: ["id", "Name"],
        filters: {
          Name: {
            $notContainsi: "dummy",
          },
        },
      }
    );

    let preachersEntry = await strapi.entityService.findMany(
      "api::preacher.preacher",
      {
        fields: ["id", "Name", "Prefix"],
        filter: {
          Name: {
            $notContainsi: "dummy",
          },
        },
      }
    );

    let sermonTopicsEntry = await strapi.entityService.findMany(
      "api::sermon-topic.sermon-topic",
      {
        fields: ["id", "Topic"],
        filter: {
          Name: {
            $notContainsi: "dummy",
          },
        },
      }
    );

    const sermonEntry = await strapi.entityService.findMany(
      "api::sermon.sermon",
      {
        populate: [
          "Audio",
          "Series",
          "BiblePassage",
          "Preacher",
          "SermonTopics",
        ],
        fields: [
          "id",
          "Title",
          "DatePreached",
          "ServiceType",
          "VideoLink",
          "publishedAt",
        ],
        filter: {
          Name: {
            $notContainsi: "dummy",
          },
        },
      }
    );

    const series = result.rss.channel["wp:term"].filter(
      (term) =>
        term["wp:term_taxonomy"] === "wpfc_sermon_series" &&
        !seriesEntry.some(({ Name }) => Name === term["wp:term_name"])
    );
    const preachers = result.rss.channel["wp:term"]
      .filter(
        (term) =>
          term["wp:term_taxonomy"] === "wpfc_preacher" &&
          !preachersEntry.some(({ Name }) => {
            let preacher = Name;

            if (/Joshua/i.test(preacher)) {
              preacher = preacher.replace(/Joshua/, "Josh");
            }
            return new RegExp(preacher, "i").test(term["wp:term_name"]);
          })
      )
      .map((term) => {
        const preacher = term["wp:term_name"];
        const prefix = /Pastor|Dr|Rev\./.test(preacher)
          ? preacher.match(/Pastor|Rev\.|Dr/g).join(" ")
          : null;

        const name = /Pastor|Dr|Rev\./.test(preacher)
          ? preacher.replace(/Pastor|Dr|Rev\./g, "").replace(/^\s+|\s+$/g, "")
          : preacher;
        return {
          prefix,
          name,
        };
      });

    const sermons = result.rss.channel.item
      .filter(
        (sermon) =>
          sermon["wp:status"] !== "draft" &&
          sermon["wp:post_type"] !== "attachment"
      )
      .filter(({ title }) => {
        return !sermonEntry.some(
          ({ Title: sermonTitle }) => sermonTitle === title
        );
      })
      .map(({ title, description, category, ...rest }) => {
        let data = Array.isArray(category)
          ? category.reduce((accumulator, currentValue) => {
              const key = currentValue.domain;
              const entry = currentValue["$t"];

              if (!accumulator[key]) {
                accumulator[key] = [];
              }
              accumulator[key].push(entry);

              return accumulator;
            }, {})
          : category;

        const meta = Array.isArray(rest["wp:postmeta"])
          ? rest["wp:postmeta"].reduce((accumulator, currentValue) => {
              const key = currentValue["wp:meta_key"];
              const entry = currentValue["wp:meta_value"];
              if (
                key === "sermon_date" ||
                key === "bible_passage" ||
                key === "sermon_audio" ||
                key === "sermon_video_link"
              ) {
                accumulator[key] =
                  key === "sermon_date" ? new Date(entry * 1000) : entry;
              }
              return accumulator;
            }, {})
          : rest["wp:postmeta"];

        return {
          title,
          ...data,
          ...meta,
        };
      })
      .sort((a, b) => b.sermon_date.getTime() - a.sermon_date.getTime());

    const sermonTopics = new Set(
      sermons
        .filter((sermon) => sermon.wpfc_sermon_topics)
        .map((sermon) => sermon.wpfc_sermon_topics)
        .reduce(
          (accumulator, currentValue) => [...currentValue, ...accumulator],
          []
        )
        .filter((sermonTopic) => {
          return !sermonTopicsEntry.some(({ Topic }) => Topic === sermonTopic);
        })
    );

    for (let seriesItem of series) {
      const seriesName = seriesItem["wp:term_name"];
      const seriesCreation = await strapi.entityService.create(
        "api::sermon-series.sermon-series",
        {
          fields: ["id", "Name"],
          data: {
            Name: seriesName,
            publishedAt: new Date(),
          },
        }
      );
      seriesEntry = seriesEntry.concat(seriesCreation);
    }

    for (let { prefix, name } of preachers) {
      const data = prefix
        ? {
            Prefix: prefix,
            Name: name,
          }
        : {
            Name: name,
          };
      data.publishedAt = new Date();
      const preacherCreation = await strapi.entityService.create(
        "api::preacher.preacher",
        {
          fields: ["id", "Name"],
          data,
        }
      );

      preachersEntry = preachersEntry.concat(preacherCreation);
    }

    for (let Topic of sermonTopics) {
      const topicCreation = await strapi.entityService.create(
        "api::sermon-topic.sermon-topic",
        {
          fields: ["id", "Topic"],
          data: {
            Topic,
            publishedAt: new Date(),
          },
        }
      );

      sermonTopicsEntry = sermonTopicsEntry.concat(topicCreation);
    }

    sermons
      .slice(0, 50)
      .forEach(
        ({
          title: Title,
          wpfc_sermon_topics,
          wpfc_sermon_series,
          wpfc_preacher,
          wpfc_service_type,
          sermon_date: DatePreached,
          bible_passage,
          sermon_video_link: VideoLink,
        }) => {
          const sermon_series = wpfc_sermon_series.map((series) => {
            const value = seriesEntry.find(({ Name }) => Name === series);
            return value.id;
          });

          const preachers = wpfc_preacher.map((preacher) => {
            const value = preachersEntry.find(({ Name }) => {
              let preacherName = Name;
              if (/Joshua/i.test(preacherName)) {
                preacherName = preacherName.replace(/Joshua/, "Josh");
              }
              return new RegExp(preacherName).test(preacher);
            });
            return value.id;
          });

          const sermon_topics = wpfc_sermon_topics?.map((topicName) => {
            const value = sermonTopicsEntry.find(
              ({ Topic }) => topicName === Topic
            );
            return value?.id;
          });

          let updatedPassages = !/Various Passage/i.test(bible_passage)
            ? bible_passage
                .split(",")
                .map((passage) => {
                  return /^\d/.test(passage.trim())
                    ? passage
                        .trim()
                        .replace(/\s+/, "")
                        .replace(/\s*-\s*/g, "-")
                        .replace(/\s*:\s*/g, ":")
                    : passage
                        .trim()
                        .replace(/\s*-\s*/g, "-")
                        .replace(/\s*:\s*/g, ":");
                })
                .filter((passage) => passage !== "")
                .map((passage) => passage.split(/\s+/))
                .map((passage) => {
                  if (Array.isArray(passage) && /^\d/.test(passage[0])) {
                    let index = passage[0].substring(0, 1);
                    const book = passage[0].substring(1);
                    switch (index) {
                      case "1":
                        index = "1st";
                        break;
                      case "2":
                        index = "2nd";
                        break;
                      case "3":
                        index = "3rd";
                        break;
                    }
                    passage[0] = `${book} (${index})`;
                  }
                  return passage;
                })
            : null;

          const data = {
            Title,
            DatePreached,
            ServiceType: wpfc_service_type.pop(),
            VideoLink,
            Preacher: {
              connect: preachers,
            },
            Series: {
              connect: sermon_series,
            },
            publishedAt: new Date(),
            BiblePassage: [],
          };

          if (updatedPassages) {
            data.BiblePassage = updatedPassages.map((passage) => {
              return {
                ChapterVerse: passage.pop(),
                Book: passage.pop(),
              };
            });
          }

          if (sermon_topics) {
            data.SermonTopics = {
              connect: sermon_topics,
            };
          }

          strapi.entityService.create("api::sermon.sermon", {
            data,
          });
        }
      );
  },
};
