import React from "react";
import Layout from "../../components/layout";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import Seo, { PageDescriptions } from "../../components/seo";
import { CalendarIcon, PinIcon } from "../../components/svgs";
import { PrimaryButtonLink } from "../../components/Button";
import { graphql } from "gatsby";
import { formatEventTimeAsString } from "../../components/page-events/event-processing-util";
import RichText from "../../components/shared/richText";
import Link from "../../components/Link";

// show this instead when no current missions
const MissionsEmpty = () => {
  return (
    <div className="max-w-container w-full gap-y-5 gap-x-15 flex flex-col lg:flex-row items-center lg:items-start">
      <p className="text-base lg:text-lg">
        There are currently no missions project in this season. In general,
        missions typically happen between the months of{" "}
        <span className="font-bold">February</span> to{" "}
        <span className="font-bold">August</span>.<br />
        <br />
        Please check back at a later time.
      </p>
      <div className="image-container lg:order-1 shrink-0">
        <StaticImage
          alt="Map of the world"
          src="../../images/missions-empty-map.png"
        />
      </div>
    </div>
  );
};

const showImage = image => {
  let { file, alternativeText } = image;
  return file?.childImageSharp?.gatsbyImageData ? (
    <GatsbyImage
      image={file?.childImageSharp?.gatsbyImageData}
      alt={"hey"}
      className="h-full"
    />
  ) : (
    <div className="h-full w-full"></div>
  );
};

const showLocation = ({ LocationName, GoogleMapsLink }) => {
  return GoogleMapsLink ? (
    <Link href={GoogleMapsLink}>{LocationName}</Link>
  ) : (
    LocationName
  );
};

const MissionsPage = ({
  data,
  pageContext: {
    breadcrumb: { crumbs },
  },
}) => {
  const missions = data.allStrapiMissionsTrip.nodes.map(obj => ({
    strapiId: obj.strapiId,
    name: obj.Name,
    dates: formatEventTimeAsString(
      { start: obj.StartDate, end: obj.EndDate },
      false
    ),
    location: showLocation(obj.Location),
    images: obj.Images,
    description: obj.Description,
  }));
  console.log("data", missions);

  return (
    <Layout>
      <div className="pt-[1.375rem] lg:pt-10 pb-[4.8125rem] lg:pb-[2.25rem] content-padding-full gap-y-5 lg:gap-y-15 min-h-screen">
        {/* <Breadcrumb crumbs={crumbs} crumbSeparator=" > " /> */}
        {missions.length == 0 ? (
          <MissionsEmpty />
        ) : (
          <div className="max-w-[61.25rem] w-full flex flex-col gap-y-12 lg:gap-y-15 items-center">
            <h1 className="text-2xl lg:text-4xl font-semibold lg:font-bold leading-tighter mb-0 uppercase text-center">
              Missions Project Support
            </h1>
            <div className="flex flex-col w-full lg:gap-y-15">
              {missions.map(
                (
                  { strapiId, name, dates, location, description, images },
                  index
                ) => (
                  <div
                    className={`flex flex-col w-full gap-y-5 lg:gap-y-10 items-center lg:items-start pt-4 lg:pt-0 ${
                      index + 1 < missions.length
                        ? "pb-6 lg:pb-[4.875rem] border-b-solid border-b-Shades-100 border-b-4"
                        : ""
                    }`}
                    key={strapiId}
                  >
                    <div className="w-full gap-y-5 gap-x-15 flex flex-col lg:flex-row items-center lg:items-start">
                      <div className="content-container flex flex-col gap-y-1 lg:gap-y-5">
                        <h2>{name}</h2>
                        <div className="flex flex-col lg:gap-y-5 text-base font-medium lg:font-normal lg:text-xl leading-normal items-center lg:items-start">
                          <div className="flex gap-x-1 lg:gap-x-2">
                            <CalendarIcon className="w-5 h-5 lg:w-8 lg:h-8" />
                            <span>{dates}</span>
                          </div>
                          <div className="flex gap-x-1 lg:gap-x-2">
                            <PinIcon className="w-5 h-5 lg:w-8 lg:h-8" />
                            <span>{location}</span>
                          </div>
                        </div>
                        <div className="flex pt-4 lg:pt-10">
                          <PrimaryButtonLink href="#" hasArrow={true}>
                            Help Support
                          </PrimaryButtonLink>
                        </div>
                      </div>
                      <div className="image-container">
                        {showImage(images[0])}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <article className="text-[#8d8d8d] text-lg">
                        <RichText data={description} />
                      </article>
                    </div>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-4 lg:flex  lg:gap-x-5 max-w-[20.5rem] lg:max-w-none w-full">
                      {images.slice(1).map(image => (
                        <div
                          className="relative pb-[67.31%] lg:pb-[12.245%] w-full"
                          key={image.strapiId}
                        >
                          <div className="left-0 top-0">{showImage(image)}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Missions Support"
    description={PageDescriptions["get-involved-missions"]}
  />
);

export const pageQuery = graphql`
  query MissionsTripsQuery {
    allStrapiMissionsTrip {
      nodes {
        strapiId
        Name
        Description
        EndDate
        StartDate
        Location {
          GoogleMapsLink
          LocationName
        }
        Images {
          alternativeText
          file {
            childImageSharp {
              gatsbyImageData
            }
            url
          }
          strapiId
        }
        Links {
          Hyperlink
          Text
        }
      }
    }
  }
`;

export default MissionsPage;
