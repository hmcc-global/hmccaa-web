import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Instagram from "../../components/instaBar";
import SundayCelebBarEvents from "../../components/page-events/sundayCelebBarEvents";
import { StaticImage } from "gatsby-plugin-image";
import EventCard from "../../components/page-events/eventCard";
import Banner from "../../components/shared/banner";

const EventsPage = () => {
  // multiple events hardcoded to test layout with multiple events
  const events = [
    {
      id: 1,
      title: "Prayer Gathering",
      date: "Th, May 25, 2023",
      imgUrl: "../../images/prayer-gathering.png",
      imgAlt: "example",
      location: "TCenter",
      description: "event at Hmcc where you go to pray and worship God"
    },
    {
      id: 1,
      title: "Prayer Gathering",
      date: "Th, May 25, 2023",
      imgUrl: "../../images/prayer-gathering.png",
      imgAlt: "example",
      location: "TCenter",
      description: "event at Hmcc where you go to pray and worship God"
    }
  ] // Todo: fetch actual events from backend

  return (
    <Layout>
      <SundayCelebBarEvents />
      <div>Event list section</div>
          {events.map(event => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              img={
                <StaticImage
                  className="h-[6.15788rem] w-[10.94738rem] flex-shrink-0 mb-0 md:h-60 md:w-[26.66669rem]"
                  src={event.imgUrl}
                  alt={event.imgAlt}
                />
              }
              location={event.location}
              description={event.description}
            />
          ))}
      <div>Prayer Gatherings bar</div>
      <Instagram />
    </Layout>
  )
}

export const Head = () => <Seo title="Events" />;

export default EventsPage;
