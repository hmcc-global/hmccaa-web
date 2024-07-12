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
import { processEvents, filterEventTimes } from "../../components/page-events/event-processing";
import { getFullEventId } from "../../components/page-events/event-processing-util";
import { GatsbyImage } from "gatsby-plugin-image";

const EventsPage = () => {
  const data = useStaticQuery(graphql`
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
  `);
  let events = filterEventTimes(processEvents(data.allStrapiEvent.nodes));

  return (
    <Layout hasSpacing={false}>
      <Banner bgImage="bg-center bg-events">Upcoming Events</Banner>
      <SundayCelebBarEvents />
      {events.length === 0 ? (
        <div className="text-center py-36">No events found.</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 md:auto-rows-[30rem] gap-x-5 gap-y-[2.0625rem] md:gap-y-15 pt-8 pb-9 md:py-10 max-w-container px-4">
          {events.map(event => (
            event.times.map(time => {
              let key = encodeURIComponent(getFullEventId(event.id, time));
              return <EventCard
                key={key}
                eventID={key}
                title={event.title}
                time={time.start.toString()}
                img={
                  event.img?.localFile?.childImageSharp?.gatsbyImageData ? (
                    <GatsbyImage
                      image={
                        event.img?.localFile?.childImageSharp?.gatsbyImageData
                      }
                      alt={event.imgAlt}
                    />
                  ) : (
                    <div className="py-5 w-full"></div>
                  )
                }
                location={event.location}
                description={event.description[0]}
              />;
            })
          ))}
        </div>
      )}
      <EventsNotes />
      <PrayerGatheringEvents />
      <Instagram />
    </Layout>
  );
};

export const Head = () => <Seo title="Events" />;

export default EventsPage;
