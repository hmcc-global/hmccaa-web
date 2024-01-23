import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { PrimaryButtonLink } from "../components/Button";
import locationPinIcon from "../images/icons/locationPin.svg";
import calendarIcon from "../images/icons/calendar.svg";
import clockIcon from "../images/icons/clock-black.svg";
import { StaticImage } from "gatsby-plugin-image";

const EventPage = ({ data, pageContext }) => {
  const { allStrapiEvent } = data;
  const { nodes } = allStrapiEvent;
  console.log(pageContext);
  const event = pageContext.strapiEvent;
  console.log(event);

  return (
    <Layout>
      <div className="flex flex-col justify-start items-center gap-y-8 lg:gap-y-14 pt-8 gap-x-32 lg:pt-14 py-28">
        <h2 className="text-center lg:text-left text-xl lg:text-3xl font-semibold">
          {event.title}
        </h2>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-14 lg:gap-48">
          <div>
            <div className="flex flex-col items-start gap-5 lg:gap-9">
              <div className="flex items-center gap-1 lg:gap-2">
                <div className="w-5 h-5 lg:w-6 lg:h-6 relative">
                  {" "}
                  <img src={calendarIcon}></img>
                </div>
                <div className="text-black text-md md:text-xl font-medium leading-tight lg:leading-loose">
                  {event.date}
                </div>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <div className="w-5 h-5 lg:w-6 lg:h-6 relative">
                  {" "}
                  <img src={clockIcon}></img>
                </div>
                <div className="text-black text-md md:text-xl font-medium leading-tight lg:leading-loose">
                  {event.date}
                </div>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <div className="w-5 h-5 lg:w-6 lg:h-6 relative">
                  {" "}
                  <img src={locationPinIcon}></img>
                </div>
                <div className="text-black text-md md:text-xl font-medium leading-tight lg:leading-loose">
                  {event.location}
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start pt-8 lg:pt-10">
              <PrimaryButtonLink
                hasArrow={true}
                to={"https://annarbor.hmcc.net/"}
              >
                Sign Up
              </PrimaryButtonLink>
            </div>
          </div>

          <div className="text-center lg:order-1">
            <StaticImage
              src="https://via.placeholder.com/382x215"
              alt={event.imgAlt}
            />
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-y-8 w-96 md:w-full">
          <div>
            <span className="text-black text-2xl font-semibold leading-7">
              Details
              <br />
            </span>
            <span className="text-black text-base font-normal leading-normal">
              <br />
              Come back a week earlier to reach out to new students!
              <br />
              <br></br>Global Access students can also sign up for International
              Campus Reach using the same form.
            </span>
          </div>
          <div>
            <span className="text-black text-2xl font-semibold leading-7">
              Contact
              <br />
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

export const pageQuery = graphql`
  query {
    allStrapiEvent {
      edge {
        node {
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
