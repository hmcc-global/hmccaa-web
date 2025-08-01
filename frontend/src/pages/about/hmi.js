import * as React from "react";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo, { PageDescriptions } from "../../components/seo";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { SecondaryButtonLink } from "../../components/Button";
import RichText from "../../components/shared/richText";
import Link from "../../components/Link";

const HmiPage = ({
  data: {
    allStrapiSupportedMissionary: { nodes: workers },
  },
  pageContext: {
    breadcrumb: { crumbs },
  },
}) => {
  const projects = [
    {
      id: 1,
      destination: "Mexico",
      year: "1998",
      image: (
        <StaticImage src="../../images/flag-mexico.png" alt="Flag of Mexico" />
      ),
    },
    {
      id: 2,
      destination: "Kenya",
      year: "2002",
      image: (
        <StaticImage src="../../images/flag-kenya.png" alt="Flag of Kenya" />
      ),
    },
    {
      id: 3,
      destination: "India",
      year: "2006-2008",
      image: (
        <StaticImage src="../../images/flag-india.png" alt="Flag of India" />
      ),
    },
    {
      id: 4,
      destination: "AA & Detroit",
      year: "2009",
      image: (
        <StaticImage
          src="../../images/flag-michigan.png"
          alt="Flag of Michigan"
        />
      ),
    },
    {
      id: 5,
      destination: "Indonesia",
      year: "2012",
      image: (
        <StaticImage
          src="../../images/flag-indonesia.png"
          alt="Flag of Indonesia"
        />
      ),
    },
    {
      id: 6,
      destination: "Chicago",
      year: "2014, 2022",
      image: (
        <StaticImage
          src="../../images/flag-chicago.png"
          alt="Flag of Chicago"
        />
      ),
    },
    {
      id: 7,
      destination: "Peru",
      year: "1999-2005, 2016-2024",
      image: (
        <StaticImage src="../../images/flag-peru.png" alt="Flag of Peru" />
      ),
    },
    {
      id: 8,
      destination: "Jordan",
      year: "2018-2020",
      image: (
        <StaticImage src="../../images/flag-jordan.png" alt="Flag of Jordan" />
      ),
    },
  ].sort((a, b) => {
    const retrieveRecentYears = years =>
      Number(
        years
          .split(/,\s*/g)
          .pop()
          .split(/\s*[-]+\s*/)
          .pop()
      );
    const recentYearAlpha = retrieveRecentYears(a.year);
    const recentYearBravo = retrieveRecentYears(b.year);
    if (recentYearAlpha === recentYearBravo) {
      return 0;
    } else if (recentYearAlpha < recentYearBravo) {
      return 1;
    } else {
      return -1;
    }
  });

  return (
    <Layout>
      <div className="px-2 flex flex-col w-full items-center pt-[1.375rem] pb-[7.3125rem] md:pt-10">
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex flex-col gap-y-[2.1875rem] md:gap-y-[3.75rem]">
            <div className="px-2 md:px-6 flex flex-col items-center">
              <Breadcrumb crumbs={crumbs} crumbSeparator=" > " />
            </div>
            <div className="flex flex-col gap-y-8 md:gap-y-15 w-full items-center">
              <div className="px-2 md:px-6 flex flex-col gap-y-8 md:gap-y-15 items-center w-full">
                <div className="flex flex-col gap-y-9 md:gap-y-15 max-w-container w-full">
                  <h1 className="uppercase lg:text-center text-2xl md:text-4xl font-bold leading-tighter mb-0">
                    Harvest Mission International (HMI)
                  </h1>
                  <div className="flex flex-col md:flex-row gap-y-[1.25rem]  gap-x-15">
                    <div className="md:order-1 image-container">
                      <StaticImage
                        src="../../images/hmi-hands-all-in.jpeg"
                        alt="Hands All In"
                      />
                    </div>
                    <div className="content-container">
                      <p className="mb-6 md:mb-[1.3125rem]">
                        As Christ has called us to &apos;make disciples of all
                        nations&apos; (Matthew 28:19), we value the importance
                        of the local church making an impact in its surrounding
                        community and the nations for the Gospel of Jesus
                        Christ.
                      </p>
                      <p className="mb-0">
                        Harvest Mission International (HMI) is our outreach
                        ministry, committed to planting churches, sending
                        short-term mission teams, and partnering with
                        missionaries locally and abroad. We currently have
                        church plants in Austin, Jakarta, Tangerang, Hong Kong,
                        and Detroit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-y-5 md:gap-y-10 max-w-container">
                  <div className="flex flex-col gap-y-5 md:gap-y-3 max-w-[55rem]">
                    <h2 className="uppercase text-xl md:text-3xl">
                      Past Projects
                    </h2>
                    <p className="mb-0 text-base md:text-lg">
                      Harvest Mission International (HMI) is committed to
                      participating in short-term missions projects. By sending
                      out teams to serve in a cross-cultural missions
                      environment, it is our hope that kingdom workers will be
                      trained to serve the body of Christ and to commit to
                      life-long involvement in world missions. As team members
                      learn to selflessly serve and support local churches, they
                      have the opportunity to witness how God is working in
                      other parts of the world. Here are a selection of past
                      short-term teams that we have sent:
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 md:gap-y-10 justify-betweenn w-full gap-x-4">
                      {projects.map(project => (
                        <div
                          className="flex gap-x-2 md:gap-x-5"
                          key={`project-${project.id}`}
                        >
                          <div className="w-[2.5rem] md:w-[6.25rem]">
                            {project.image}
                          </div>
                          <div className="flex flex-col md:gap-y-3">
                            <span className="text-lg md:text-xl font-bold text-Primary-1000 uppercase">
                              {project.destination}
                            </span>
                            <span className="text-sm md:text-lg leading-tighter">
                              {project.year}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:px-6 flex flex-col gap-y-8 md:gap-y-15 items-center w-full">
                <div className="flex flex-col gap-y-5 md:gap-y-10 items-center lg:items-start max-w-container w-full">
                  <div className="flex flex-col gap-y-5 md:gap-y-3 max-w-[55rem] text-left">
                    <h2 className="uppercase text-xl md:text-3xl leading-tighter">
                      Supported Workers
                    </h2>
                    <p className="mb-0 text-base md:text-lg text-left">
                      Partnership is critical as we strive to reach the nations
                      with the Gospel message. We know that missions cannot be
                      done by a sole missionary, but that it is our privilege to
                      participate in God&apos;s work around the world through
                      our prayers and financial support.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 md:gap-x-5 gap-y-10 text-left max-w-[35rem] lg:max-w-none">
                    {workers.map(
                      ({
                        strapiId,
                        Photo,
                        Ministry,
                        Name,
                        Description,
                        Links,
                      }) => {
                        return (
                          <React.Fragment key={strapiId}>
                            <div className={`flex flex-col lg:flex-row gap-5`}>
                              <div className="md:min-w-[11.25rem] max-w-[11.25rem]">
                                <div className="relative pb-[111.115%] overflow-hidden">
                                  <div className="absolute top-0 left-0">
                                    {Photo?.file?.childImageSharp
                                      ?.gatsbyImageData ? (
                                      <GatsbyImage
                                        image={
                                          Photo.file.childImageSharp
                                            .gatsbyImageData
                                        }
                                        alt={Photo.alternativeText || ""}
                                      />
                                    ) : (
                                      <div className="h-full w-full"></div>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-y-5">
                                <div className="flex flex-col gap-y-3">
                                  <span className="text-sm md:text-xl font-medium text-Primary-1000 uppercase">
                                    {Ministry}
                                  </span>
                                  <span className="text-lg md:text-2xl font-semibold leading-tighter">
                                    {Name}
                                  </span>
                                  <div className="mb-0 text-sm md:text-base font-medium tracking-medium-wide">
                                    <RichText
                                      data={Description}
                                      addPaddingBelowParagraph={false}
                                    />
                                  </div>
                                </div>
                                <div className="flex">
                                  {Links.map(({ Hyperlink, Text }) => (
                                    <SecondaryButtonLink
                                      key={Hyperlink}
                                      href={Hyperlink}
                                      hasArrow={true}
                                    >
                                      {Text}
                                    </SecondaryButtonLink>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </React.Fragment>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query SupportedMissionariesQuery {
    allStrapiSupportedMissionary {
      nodes {
        Links {
          Hyperlink
          Text
        }
        Description
        Ministry
        Name
        Photo {
          alternativeText
          file {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        strapiId
      }
    }
  }
`;

export const Head = () => (
  <Seo
    title="Harvest Mission International (HMI)"
    description={PageDescriptions["about-hmi"]}
  />
);

export default HmiPage;
