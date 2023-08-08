import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Card from "../../components/shared/card";
import Instagram from "../../components/instaBar";

const EventsPage = () => (
  <Layout>
    <div>Sunday Celebration bar</div>
    <div>Event list section</div>
    <Card
      type={"event"}
      name={"Prayer Gathering"}
      date={"Th, May 25, 2023"}
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
