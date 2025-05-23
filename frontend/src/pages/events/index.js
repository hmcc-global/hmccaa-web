import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import Seo, { PageDescriptions } from "../../components/seo";
import Instagram from "../../components/instaBar";
import SundayCelebBarEvents from "../../components/page-events/sundayCelebBarEvents";
import EventCard from "../../components/page-events/eventCard";
import EventsNotes from "../../components/page-events/eventsNote";
import PrayerGatheringEvents from "../../components/page-events/prayerGatheringEvents";
import Banner from "../../components/shared/banner";
import {
  processEvents,
  filterEventTimes,
} from "../../components/page-events/event-processing";
import {
  formatEventTimeAsString,
  getFullEventId,
  sortTimes,
} from "../../components/page-events/event-processing-util";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Link from "../../components/Link";

const EventsPage = ({ data }) => {
  let events = filterEventTimes(processEvents(data?.allStrapiEvent?.nodes));

  return (
    <Layout hasSpacing={false}>
      <Banner bgImage="bg-center bg-events">Upcoming Events</Banner>
      <SundayCelebBarEvents />
      <div className="px-4 w-full flex flex-col items-center">
        {events.length === 0 ? (
          <div className="sm:text-center py-25 sm:py-50 flex flex-col gap-y-2">
            <p className="flex flex-col sm:flex-row text-2xl sm:text-3xl font-semibold gap-x-4 mb-0">
              <span className="w-12">
                <StaticImage
                  src="../../images/icons/noeventsicon.png"
                  alt="No Events Icon"
                  className="block"
                />
              </span>
              There are no upcoming events at this time.
            </p>
            <p className="text-lg sm:text-xl font-semibold mb-0">
              Please come to our{" "}
              <Link to="/new" className="text-Accent-500">
                Sunday Celebration
              </Link>{" "}
              or join a{" "}
              <Link to="/get-involved/lifegroups" className="text-Accent-500">
                Life Group
              </Link>{" "}
              to stay connected.
            </p>
          </div>
        ) : (
          <div className="flex flex-col w-full max-w-container">
            <div className="flex-grow grid grid-cols-2 md:grid-cols-3 md:auto-rows-[30rem] gap-x-5 gap-y-[2.0625rem] md:gap-y-15 pt-8 pb-9 md:py-10">
              {events
                .map(event => event.times.map(time => ({ event, time })))
                .flat()
                .sort((a, b) => sortTimes(a.time, b.time))
                .map(({ event, time }) => {
                  let key = encodeURIComponent(getFullEventId(event.id, time));
                  return (
                    <EventCard
                      key={key}
                      eventID={key}
                      title={event.title}
                      time={formatEventTimeAsString(time)}
                      img={
                        <div className="relative pb-[63.493%] w-full">
                          <div className="absolute inset-0">
                            {event.img?.file?.childImageSharp
                              ?.gatsbyImageData ? (
                              <GatsbyImage
                                image={
                                  event.img?.file?.childImageSharp
                                    ?.gatsbyImageData
                                }
                                alt={event.imgAlt}
                                className="h-full"
                              />
                            ) : (
                              <div className="h-full w-full"></div>
                            )}
                          </div>
                        </div>
                      }
                      location={event.location}
                      description={event.description[0]}
                    />
                  );
                })}
            </div>
          </div>
        )}
        <div className="w-full max-w-container">
          <EventsNotes />
        </div>
      </div>
      <PrayerGatheringEvents />
      <Instagram />
    </Layout>
  );
};

export const Head = () => (
  <Seo title="Upcoming Events" description={PageDescriptions.events} />
);

export const pageQuery = graphql`
  query EventsPageQuery {
    allStrapiEvent {
      nodes {
        id
        DescriptionOverride
        DescriptionAddendum
        ShowXUpcomingEvents
        EventTemplate {
          CoverImage {
            url
            file {
              childImageSharp {
                gatsbyImageData
              }
            }
            alternativeText
          }
          Description
          Location {
            LocationName
          }
          Name
          DisplayIsStreamed
          Contact {
            Name
            Email
            PhoneNumber
            AutoformatPhoneNumber
          }
        }
        LocationOverride {
          LocationName
        }
        NameOverride
        Time {
          ... on StrapiComponentEventTimesRecurringTime {
            id
            DateTime
            EndDateTime
            EndRecurDate
            RecurEveryXTimeFrames
            RecurTimeFrame
            StopShowingWhenPast
          }
          ... on StrapiComponentEventTimesSingleTime {
            id
            StopShowingWhenPast
            EndDateTime
            DateTime
          }
        }
        CoverImageOverride {
          url
          file {
            childImageSharp {
              gatsbyImageData
            }
          }
          alternativeText
        }
      }
    }
  }
`;
export default EventsPage;
