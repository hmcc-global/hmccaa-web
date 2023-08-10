import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Instagram from "../../components/instaBar";
import SundayCelebBarEvents from "../../components/page-events/sundayCelebBarEvents";
import { StaticImage } from "gatsby-plugin-image";
import EventCard from "../../components/page-events/eventCard";
import Banner from "../../components/shared/banner";

const EventsPage = () => (
  <Layout>
    <Banner bgImage="bg-center bg-events">Upcoming Events</Banner>
    <SundayCelebBarEvents />
    <div>Event list section</div>
    <EventCard
      title="Prayer Gathering"
      date="Th, May 25, 2023"
     img={<StaticImage
        className="h-[6.15788rem] w-[10.94738rem] flex-shrink-0 mb-0 md:h-60 md:w-[26.66669rem]"
        src="../../images/prayer-gathering.png"
        alt="Background" />}
      location="T Center"
      description="I&apos;m baby migas fam yuccie, big mood freegan affogato everyday
          carry hashtag four dollar toast truffaut 3 wolf moon beard. Hella
          live-edge brunch neutral milk hotel pabst."
    />
    <div>Prayer Gatherings bar</div>
    <Instagram />
  </Layout>
);

export const Head = () => <Seo title="Events" />;

export default EventsPage;
