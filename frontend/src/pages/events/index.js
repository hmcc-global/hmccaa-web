import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Instagram from "../../components/instaBar";
import SundayCelebBarEvents from "../../components/page-events/sundayCelebBarEvents";
import { StaticImage, getImage } from "gatsby-plugin-image";
import EventCard from "../../components/page-events/eventCard";
import PrayerGatheringEvents from "../../components/page-events/prayerGatheringEvents";
import Banner from "../../components/shared/banner";
import { processEvents, filterEventTimes } from "../../components/page-events/event-processing";
import { getFullEventId } from "../../components/page-events/event-processing-util";

const EventsPage = () => {
  const data = useStaticQuery(graphql`
    query EventsPageQuery {
      allStrapiEvent {
        nodes {
          id
          DescriptionOverride
          DescriptionAddendum
          ContactOverride {
            Name
            Email
            PhoneNumber
            AutoformatPhoneNumber
          }
          StopShowingWhenPastOverride
          DisplayIsStreamedOverride
          ShowXUpcomingEvents
          EventTemplate {
            CoverImage {
              url
            }
            Description
            Location {
              LocationName
            }
            Name
            StopShowingWhenPast
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
          }
        }
      }
    }
  `);
  let events = filterEventTimes(processEvents(data.allStrapiEvent.nodes));

  return (
    <Layout>
      <Banner bgImage="bg-center bg-events">Upcoming Events</Banner>
      <SundayCelebBarEvents />
      {events.length == 0 ? (
        <div className="text-center py-36">No events found.</div>
      ) : (
        <div className="grid grid-cols-3 gap-x-5 gap-y-[2.0625rem] md:gap-y-15 py-36 max-w-container px-4">
          {events.map(event => (
            event.times.map(time => {
              let key = encodeURI(getFullEventId(event.id, time));
              console.log(time);
              return <EventCard
                key={key}
                eventID={key}
                title={event.title}
                time={time.start.toString()}
                img={
                  <img
                    className="flex-shrink-0 mb-0"
                    src={`http://127.0.0.1:1337${event.imgUrl}`}
                    alt={event.imgAlt}
                  />
                }
                location={event.location}
                description={event.description[0]}
              />;
            })
          ))}
        </div>
      )}
      <PrayerGatheringEvents />
      <Instagram />
    </Layout>
  );
};

export const Head = () => <Seo title="Events" />;

export default EventsPage;
