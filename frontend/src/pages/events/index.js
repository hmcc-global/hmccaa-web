import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
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
  getFullEventId,
  sortTimes,
} from "../../components/page-events/event-processing-util";
import { GatsbyImage } from "gatsby-plugin-image";

const EventsPage = ({ data }) => {
  let events = filterEventTimes(processEvents(data?.allStrapiEvent?.nodes));

  return (
    <Layout hasSpacing={false}>
      <Banner bgImage="bg-center bg-events">Upcoming Events</Banner>
      <SundayCelebBarEvents />
      <div className="px-4 w-full flex flex-col items-center">
        {events.length === 0 ? (
          <div className="text-center py-36">No events found.</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 md:auto-rows-[30rem] gap-x-5 gap-y-[2.0625rem] md:gap-y-15 pt-8 pb-9 md:py-10 max-w-container">
            {filterEventTimes(events)
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
                    time={time.start.toString()}
                    img={
                      <div className="relative pb-[63.493%] w-full">
                        <div className="absolute inset-0">
                          {event.img?.localFile?.childImageSharp
                            ?.gatsbyImageData ? (
                            <GatsbyImage
                              image={
                                event.img?.localFile?.childImageSharp
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
        )}
      </div>
      <EventsNotes />
      <PrayerGatheringEvents />
      <Instagram />
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Upcoming Events"
    description="Events are ways we gather as a church body to connect across different life stages. Don’t miss out on opportunities to have fun and get to know others!"
  />
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
            localFile {
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
          localFile {
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
