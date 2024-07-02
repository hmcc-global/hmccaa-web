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
// import { processEvents } from "../../components/page-events/event-processing-util";
import { processEvents } from "../../components/page-events/new-event-processing";

const EventsPage = () => {
  const data = useStaticQuery(graphql`
    query EventQuery {
      allStrapiEvent {
        nodes {
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
  `);
  console.log(data.allStrapiEvent.nodes);
  const events = processEvents(data.allStrapiEvent.nodes);
  console.log(events);
  // console.log(getSrc("http://127.0.0.1:1337/uploads/1samuel_53b3c5ad9f.png"));

  return (
    <Layout>
      <Banner bgImage="bg-center bg-events">Upcoming Events</Banner>
      <SundayCelebBarEvents />
      {events.length == 0 ? (
        <div className="text-center py-36">No events found.</div>
      ) : (
        <div className="grid grid-cols-3 gap-x-5 gap-y-[2.0625rem] md:gap-y-15 py-36 max-w-container px-4">
          {events.map(event => (
            <EventCard
              key={event.id}
              eventID={event.id}
              title={event.title}
              date={event.date.toString()}
              // TODO: use GatsbyImage since static cannot handle dynamic src
              img={
                <img
                  className="flex-shrink-0 mb-0"
                  src={`http://127.0.0.1:1337${event.imgUrl}`}
                  alt={event.imgAlt}
                />
              }
              location={event.location}
              description={event.description}
            />
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
