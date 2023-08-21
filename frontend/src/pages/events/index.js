import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Instagram from "../../components/instaBar";
import SundayCelebBarEvents from "../../components/page-events/sundayCelebBarEvents";
import { StaticImage } from "gatsby-plugin-image";
import EventCard from "../../components/page-events/eventCard";
// import Banner from "../../components/shared/banner";

const EventsPage = () => {
  // multiple events hardcoded to test layout with multiple events
  const events = [
    {
      id: 1,
      title: "Prayer Gathering",
      date: "Th, May 25, 2023",
      imgUrl: "../../images/prayer-gathering.png",
      imgAlt: "example",
      location: "T-Center",
      description: "Event at HMCC where you go to pray and worship God"
    },
    {
      id: 2,
      title: "Another Event",
      date: "Th, May 25, 2023",
      imgUrl: "../../images/prayer-gathering.png",
      imgAlt: "example",
      location: "T-Center",
      description: "Event at HMCC where you go to engage in this event at HMCC. This description is a bit longer."
    },
    {
      id: 3,
      title: "One more Event",
      date: "Th, May 25, 2023",
      imgUrl: "../../images/prayer-gathering.png",
      imgAlt: "example",
      location: "T-Center",
      description: "Event at HMCC where you go to engage in this event at HMCC. This description is a bit longer."
    },
    {
      id: 4,
      title: "One more Event",
      date: "Th, May 25, 2023",
      imgUrl: "../../images/prayer-gathering.png",
      imgAlt: "example",
      location: "T-Center",
      description: "Event at HMCC where you go to engage in this event at HMCC. This description is a bit longer. Now this description is really long and spans many lines."
    },
    {
      id: 5,
      title: "Last Event",
      date: "Th, May 25, 2023",
      imgUrl: "../../images/prayer-gathering.png",
      imgAlt: "example",
      location: "T-Center",
      description: "Event at HMCC where you go to engage in this event at HMCC."
    },
  ] // TODO: fetch actual events from backend

  return (
    <Layout>
      <SundayCelebBarEvents />
      <div className="grid grid-cols-3 gap-5 py-36">
        {events.map(event => (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            // TODO: use GatsbyImage since static cannot handle dynamic src
            img={
              <StaticImage
                className="h-[6.15788rem] w-[10.94738rem] flex-shrink-0 mb-0 md:h-60 md:w-[26.66669rem]"
                src={"../../images/prayer-gathering.png"}
                alt={event.imgAlt}
              />
            }
            location={event.location}
            description={event.description}
          />
        ))}
      </div>
      <div>Prayer Gatherings bar</div>
      <Instagram />
    </Layout>
  )
}

export const Head = () => <Seo title="Events" />;

export default EventsPage;