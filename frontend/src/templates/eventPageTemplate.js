import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { PrimaryButtonLink } from "../components/Button";
import locationPinIcon from "../images/icons/locationPin.svg";
import calendarIcon from "../images/icons/calendar.svg";
import clockIcon from "../images/icons/clock-black.svg";
import { StaticImage } from "gatsby-plugin-image";

const EventPage = ({ data, pageContext }) => {
  function formatDateAndTime(isoDateString) {
    const date = new Date(isoDateString);

    // Extracting date components
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth() returns month from 0-11
    const day = date.getDate();

    // Extracting and converting time components to 12-hour format
    let hour = date.getHours();
    const minutes = date.getMinutes();
    const amPm = hour >= 12 ? "PM" : "AM";

    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'

    // Formatting date and time
    const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
    const formattedTime = `${hour.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} ${amPm}`;

    return { formattedDate, formattedTime };
  }

  const { event } = pageContext;

  const { formattedDate, formattedTime } = formatDateAndTime(
    event.Time[0].DateTime
  );

  return (
    <Layout>
      <div className="flex flex-col justify-start items-center gap-y-8 lg:gap-y-14 pt-8 gap-x-32 lg:pt-14 py-28">
        <h2 className="text-center mt-2 lg:text-left text-xl lg:text-3xl font-semibold">
          {event.NameOverride ? event.NameOverride : event.EventTemplate.Name}
        </h2>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-14 lg:gap-8">
          <div>
            <div className="flex flex-col items-start gap-5 lg:gap-9">
              <div className="flex items-center gap-1 lg:gap-2">
                <div className="w-5 h-5 lg:w-6 lg:h-6 relative">
                  <img src={calendarIcon}></img>
                </div>
                <div className="text-black text-md md:text-xl font-medium leading-tight lg:leading-loose">
                  {formattedDate}
                </div>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <div className="w-5 h-5 lg:w-6 lg:h-6 relative">
                  <img src={clockIcon}></img>
                </div>
                <div className="text-black text-md md:text-xl font-medium leading-tight lg:leading-loose">
                  {formattedTime}
                </div>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <div className="w-5 h-5 lg:w-6 lg:h-6 relative">
                  <img src={locationPinIcon}></img>
                </div>
                <div className="text-black text-md md:text-xl font-medium leading-tight lg:leading-loose">
                  {event.LocationOverride
                    ? event.LocationOverride.LocationName
                    : event.EventTemplate.Location.LocationName}
                </div>
              </div>
            </div>

            {/* ADD CODE BACK IN ONCE LINKS ARE ADDED TO GRAPHQL: 
            <div className="flex justify-center pt-6 lg:justify-start lg:pt-10">
              <PrimaryButtonLink
                hasArrow={true}
                to={"https://annarbor.hmcc.net/"}
              >
                Sign Up
              </PrimaryButtonLink>
            </div> */}
          </div>

          <div className="text-center pt-4 lg:order-1 ml-5">
            <img src={event.EventTemplate.CoverImage}></img>
          </div>
        </div>

        <div className="flex flex-col w-full items-start gap-y-8 pb-5">
          <div>
            <span className="text-black text-2xl font-semibold leading-7">
              Details
            </span>
            <span className="text-black text-base font-normal leading-normal">
              <br />
              {event.DescriptionOverride
                ? event.DescriptionOverride
                : event.EventTemplate.Description}
            </span>
          </div>
          <div>
            <span className="text-black text-2xl font-semibold leading-7">
              Contact
            </span>
            <span className="text-black text-base font-normal leading-normal tracking-wide">
              <br />
            </span>
            <span className="text-black text-base font-normal leading-normal">
              Have a question? Please contact aaaa at aaaa@hmcc.net
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query eventPageQuery($ID: String!) {
    allStrapiEvent(filter: { id: { eq: $ID } }) {
      edges {
        node {
          id
          DescriptionOverride
          EventTemplate {
            CoverImage {
              url
            }
            Description
            Location {
              LocationName
            }
            Name
            ShowXUpcomingEvents
          }
          LocationOverride {
            LocationName
          }
          NameOverride
          Time {
            ... on STRAPI__COMPONENT_EVENT_TIMES_RECURRING_TIME {
              id
              DateTime
              EndDateTime
              EndRecurDate
              RecurEveryXTimeFrames
              RecurTimeFrame
              StopShowingWhenPast
              strapi_component
            }
            ... on STRAPI__COMPONENT_EVENT_TIMES_SINGLE_TIME {
              id
              StopShowingWhenPast
              EndDateTime
              DateTime
              strapi_component
            }
          }
          CoverImageOverride {
            url
          }
        }
      }
    }
  }
`;

export default EventPage;
