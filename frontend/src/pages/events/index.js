import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Instagram from "../../components/instaBar";
import SundayCelebBarEvents from "../../components/page-events/sundayCelebBarEvents";
import PrayerGathering from "../../images/prayer-gathering.png";
import EventCard from "../../components/page-events/eventCard";

const EventsPage = () => (
  <Layout>
    <SundayCelebBarEvents />
    <div>Event list section</div>
    <EventCard
      title={"Prayer Gathering"}
      date={"Th, May 25, 2023"}
      img={../../images/prayer-gathering.png}
      location={"T Center"}
      description={`I&apos;m baby migas fam yuccie, big mood freegan affogato everyday
          carry hashtag four dollar toast truffaut 3 wolf moon beard. Hella
          live-edge brunch neutral milk hotel pabst.`}
    />
    <div>Prayer Gatherings bar</div>
    <Instagram />
  </Layout>
);

export const Head = () => <Seo title="Events" />;

export default EventsPage;
