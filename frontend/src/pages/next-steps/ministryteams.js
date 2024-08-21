import * as React from "react";

import Layout from "../../components/layout";
import Seo, { PageDescriptions } from "../../components/seo";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import { StaticImage } from "gatsby-plugin-image";
import {
  AdsLogo,
  KidsLogo,
  DocsLogo,
  HostsLogo,
  FacilitiesLogo,
  VMLogo,
  WorshipLogo,
} from "../../components/svgs";
import { PrimaryButtonLink } from "../../components/Button";

const definition = [
  {
    id: 1,
    term: "fulfilling Jesus’ commission to love, serve, and witness to the world around us",
    reference: "John 13:34, Mark 10:45, Matthew 28:18-20",
  },
  {
    id: 2,
    term: "something that every Christian is called to participate in, not just a select few",
    reference: "1 Peter 2:9",
  },
  {
    id: 3,
    term: "a mindset / lifestyle that must be developed",
    reference: "Philippians 2:1-5",
  },
];
const giftsAcronym = [
  {
    word: "Gift discovery and development",
  },
  {
    word: "Intercession and a heart for the church",
  },
  {
    word: "Faithfulness",
  },
  {
    word: "Teamwork",
  },
  {
    word: "Servanthood",
  },
].map(text => {
  const [first, ...rest] = text.word.split("");
  return { ...text, word: [first, rest.join("")] };
});

const ministryTeams = [
  {
    id: 1,
    title: "Arts & Design Servants",
    image: <AdsLogo className="w-12 md:w-[3.75rem]" />,
    subtitle: "ADS",
    description:
      "To create art, design, and experiences in order to know God more and to build up the church.",
  },
  {
    id: 2,
    title: "Documentations",
    image: <DocsLogo className="w-12  md:w-[3.75rem]" />,
    subtitle: "Docs - Photo/Video",
    description:
      "To communicate the work of God in the church through photo and video with creative excellence.",
  },
  {
    id: 3,
    title: "Video Ministry",
    subtitle: "Video Recording",
    image: <VMLogo className="w-12  md:w-[3.75rem]" />,
    description:
      "To connect people to God and His church no matter where people are.",
  },
  {
    id: 4,
    title: "Building Blocks",
    subtitle: "Kids",
    image: <KidsLogo className="w-12  md:w-[3.75rem]" />,
    description:
      "To lay a Biblical foundation for children to know Christ and to boldly live out their faith.",
  },
  {
    id: 5,
    title: "Hospitality",
    subtitle: "Hosts/Welcome Team",
    image: <HostsLogo className="w-12  md:w-[3.75rem]" />,
    description:
      "To create a welcoming environment for all to experience the love of Christ.",
  },
  {
    id: 6,
    title: "Servants United",
    subtitle: "Facilities",
    image: <FacilitiesLogo className="w-12  md:w-[3.75rem]" />,
    description:
      "To maintain a clean and welcoming environment that fosters spiritual growth, fellowship, and reverence for God, ultimately demonstrating Christ's love through practical servanthood.",
  },
  {
    id: 7,
    title: "Worship Team",
    subtitle: "AV/Band",
    image: <WorshipLogo className="w-12  md:w-[3.75rem]" />,
    description:
      "To be a community of growing disciples that lead the Church through creative expression to encounter God.",
  },
].reduce(
  (rows, key, index) =>
    (index % 3 === 0 && index < 6
      ? rows.push([key])
      : rows[rows.length - 1].push(key)) && rows,
  []
);

const MinistryTeamsPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  return (
    <Layout>
      <div className="pt-[1.375rem] md:pt-10 pb-[4.8125rem] md:pb-[8.1875rem] content-padding-full gap-y-9 md:gap-y-15 min-h-screen">
        <Breadcrumb crumbs={crumbs} crumbSeparator=" > " />
        <div className="max-w-container w-full flex flex-col gap-y-12 md:gap-y-15 items-center">
          <h1 className="font-semibold text-2xl md:font-bold md:text-4xl leading-tighter mb-0 uppercase">
            Ministry Teams
          </h1>
          <div className="gap-y-5 gap-x-15 flex flex-col md:flex-row items-center md:items-start">
            <div className="image-container md:order-1">
              <StaticImage
                alt="Ministry Teams"
                src="../../images/ministry-teams-main.png"
              />
            </div>
            <div className="content-container flex flex-col gap-y-5 md:gap-y-10">
              <div className="text-base md:text-lg">
                <p className="mb-0">
                  We believe God has gifted each and every single of us with
                  unique giftings to build up the church and the world around
                  us. We hope you are able to get involved and discover more
                  about yourself and how you can be used for God&apos;s Kingdom.
                </p>
              </div>
              <div className="flex flex-col gap-y-3">
                <h3 className="text-xl md:text-2xl font-semibold leading-tighter">
                  Ministry is...
                </h3>
                <ul className="list-disc flex flex-col gap-y-3 mb-0 text-base md:text-lg">
                  {definition.map(({ id, term, reference }) => (
                    <li key={`ministry-term-${id}`}>
                      <div className="flex flex-col">
                        <strong className="tracking-medium-wide">{term}</strong>
                        <span className="text-sm lg:text-base font-medium tracking-medium-wide">
                          ({reference})
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-x-4">
            <div className="flex-[50%]">
              <StaticImage
                alt="Ministry Teams"
                src="../../images/ministry-teams-1.png"
              />
            </div>
            <div className="flex-[50%]">
              <StaticImage
                alt="Ministry Teams"
                src="../../images/ministry-teams-2.png"
              />
            </div>
            <div className="flex-[50%]">
              <StaticImage
                alt="Ministry Teams"
                src="../../images/ministry-teams-3.png"
              />
            </div>
            <div className="flex-[50%]">
              <StaticImage
                alt="Ministry Teams"
                src="../../images/ministry-teams-4.png"
              />
            </div>
          </div>
        </div>
        <div className="max-w-container w-full flex flex-col gap-y-8 md:gap-y-[6.6875rem]">
          <div className="flex flex-col md:flex-row max-w-[68.75rem] w-full gap-y-5 gap-x-4 justify-between">
            <div className="flex flex-col gap-y-[3.3125rem] md:gap-y-[2.625rem] md:w-[45.455%]">
              <div className="flex flex-col gap-y-[0.938rem] md:gap-y-[1.564rem] text-base md:text-lg">
                <span>Our ministry teams hold the values of G.I.F.T.S.:</span>
                <div className="flex flex-col">
                  {giftsAcronym.map((item, index) => (
                    <div className="flex items-end" key={`Life-${index}`}>
                      {item.word.map((textItem, index) =>
                        index === 0 ? (
                          <span
                            key={`word-${textItem.toLowerCase()}`}
                            className="text-xl lg:text-2xl font-bold leading-tighter"
                          >
                            {textItem}
                          </span>
                        ) : (
                          <span key={`word-${textItem.toLowerCase()}`}>
                            {textItem}
                          </span>
                        )
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-y-5 md:gap-y-10">
                {ministryTeams[0].map(
                  ({ id, title, subtitle, image, description }) => (
                    <div
                      key={`team-${id}`}
                      className="flex flex-col gap-y-3 md:gap-y-5"
                    >
                      <div className="flex gap-x-3 md:gap-x-5">
                        <div>{image}</div>
                        <div className="flex flex-col uppercase gap-1 md:gap-y-[0.45rem]">
                          <h3 className="text-lg md:text-2xl font-bold leading-tighter">
                            {title}
                          </h3>
                          <div className="text-sm md:text-lg font-semibold leading-tighter">
                            ({subtitle})
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 text-base md:text-lg">{description}</p>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="flex flex-col gap-y-5 md:gap-y-10 md:w-[45.455%] md:pt-[2.6875rem]">
              {ministryTeams[1].map(
                ({ id, title, subtitle, image, description }) => (
                  <div
                    key={`team-${id}`}
                    className="flex flex-col gap-y-3 md:gap-y-5"
                  >
                    <div className="flex gap-x-3 md:gap-x-5">
                      <div>{image}</div>
                      <div className="flex flex-col uppercase gap-1 md:gap-y-[0.45rem]">
                        <h3 className="text-lg md:ext-2xl font-bold leading-tighter">
                          {title}
                        </h3>
                        <div className="text-sm md:text-lg font-semibold leading-tighter">
                          ({subtitle})
                        </div>
                      </div>
                    </div>
                    <p className="mb-0 text-base md:text-lg">{description}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-[44rem] w-full items-center text-center gap-y-5 md:gap-y-10">
          <p className="text-base lg:text-lg mb-0">
            <span className="font-bold">
              If you are interested in joining a Ministry Team
            </span>
            , please check our Events page for any upcoming{" "}
            <span className="text-Accent-700 font-bold">
              Experiencing Ministry
            </span>{" "}
            classes or email us at{" "}
            <span className="font-bold">annarbor@hmcc.net</span>
          </p>
          <p className="text-base lg:text-lg mb-0">
            *Note that you must be an active member of HMCC to serve.
          </p>
          <PrimaryButtonLink to="/events" hasArrow={true}>
            Events Page
          </PrimaryButtonLink>
        </div>
      </div>
    </Layout>
  );
};
export const Head = () => (
  <Seo
    title="Ministry Teams"
    description={PageDescriptions["next-steps-ministryteams"]}
  />
);

export default MinistryTeamsPage;
