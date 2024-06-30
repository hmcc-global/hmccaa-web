import React from "react";
import Layout from "../../components/layout";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../../components/seo";
import { CalendarIcon, PinIcon } from "../../components/svgs";
import { PrimaryButtonLink } from "../../components/Button";

const MissionsPage = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
}) => {
  const hash = str =>
    str
      .split("")
      .reduce((prev, curr) => ((prev << 5) - prev + curr.charCodeAt(0)) | 0, 0);
  const missions = [
    {
      id: 1,
      trip: "Peru Missions",
      dates: "June 7 - June 17, 2023",
      city: "Peru",
      image: (
        <StaticImage
          alt="Peru Team"
          src="../../images/peru-team.png"
          className="w-full"
        />
      ),
      details: [
        "Lorem Ipsum... esus talks about living an abundant life. The vision of LIFE Group is: to experience the fullness of life in a Biblical community where the Gospel is radically lived out. LIFE Groups seek to accomplish this by sharing our lives with one another within various life stages.",
        "We desire to live out the 5 E’s (Evangelism, Education, Edification, Extension, Exaltation) of our values in a community context by studying the Bible, worshiping, serving and praying together. ",
      ],

      images: ["", "", "", "", ""],
    },
    {
      id: 2,
      trip: "Chicago Missions",
      dates: "June 7 - June 17, 2023",
      city: "Chicago",
      image: (
        <StaticImage
          alt="Chicago Team"
          className="w-full"
          src="../../images/chicago-team-placement.png"
        />
      ),
      details: [
        "Lorem Ipsum... esus talks about living an abundant life. The vision of LIFE Group is: to experience the fullness of life in a Biblical community where the Gospel is radically lived out. LIFE Groups seek to accomplish this by sharing our lives with one another within various life stages.",
        "We desire to live out the 5 E’s (Evangelism, Education, Edification, Extension, Exaltation) of our values in a community context by studying the Bible, worshiping, serving and praying together. ",
      ],

      images: ["", "", "", "", ""],
    },
  ];
  return (
    <Layout>
      <div className="pt-[1.375rem] lg:pt-10 pb-[4.8125rem] lg:pb-[2.25rem] content-padding-full gap-y-5 lg:gap-y-15 min-h-screen">
        <Breadcrumb crumbs={crumbs} crumbSeparator=" > " />
        <div className="max-w-[61.25rem] w-full flex flex-col gap-y-12 lg:gap-y-15 items-center">
          <h1 className="text-2xl lg:text-4xl font-semibold lg:font-bold leading-tighter mb-0 uppercase text-center">
            Missions Project Support
          </h1>
          <div className="flex flex-col w-full lg:gap-y-15">
            {missions.map(
              ({ id, trip, dates, city, image, details, images }, index) => (
                <div
                  className={`flex flex-col w-full gap-y-5 lg:gap-y-10 items-center lg:items-start pt-4 lg:pt-0 ${
                    index + 1 < missions.length
                      ? "pb-6 lg:pb-[4.875rem] border-b-solid border-b-Shades-100 border-b-4"
                      : ""
                  }`}
                  key={id}
                >
                  <div className="w-full gap-y-5 gap-x-15 flex flex-col lg:flex-row items-center lg:items-start">
                    <div className="content-container flex flex-col gap-y-1 lg:gap-y-5">
                      <h2>{trip}</h2>
                      <div className="flex flex-col lg:gap-y-5 text-base font-medium lg:font-normal lg:text-xl leading-normal items-center lg:items-start">
                        <div className="flex gap-x-1 lg:gap-x-2">
                          <CalendarIcon className="w-5 h-5 lg:w-8 lg:h-8" />
                          <span>{dates}</span>
                        </div>
                        <div className="flex gap-x-1 lg:gap-x-2">
                          <PinIcon className="w-5 h-5 lg:w-8 lg:h-8" />
                          <span>{city}</span>
                        </div>
                      </div>
                      <div className="flex pt-4 lg:pt-10">
                        <PrimaryButtonLink href="#" hasArrow={true}>
                          Help Support
                        </PrimaryButtonLink>
                      </div>
                    </div>
                    <div className="image-container">{image}</div>
                  </div>
                  <section className="flex flex-col">
                    <article className="text-[#8d8d8d] text-lg">
                      {details.map((p, index) => (
                        <p
                          key={index}
                          className={`${
                            index + 1 === details.length ? "mb-0" : ""
                          }`}
                        >
                          {p}
                        </p>
                      ))}
                    </article>
                  </section>
                  <section className="grid grid-cols-2 gap-y-4 gap-x-4 lg:flex  lg:gap-x-5 max-w-[20.5rem] lg:max-w-none w-full">
                    {images.map(item => (
                      <div
                        className="bg-[#5e5e5e] relative pb-[67.31%] lg:pb-[12.245%] w-full"
                        key={Math.abs(hash(item))}
                      >
                        <div className="absolute left-0 top-0">{item}</div>
                      </div>
                    ))}
                  </section>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Missions Support" />;

export default MissionsPage;
