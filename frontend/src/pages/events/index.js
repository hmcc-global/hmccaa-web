import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Instagram from "../../components/instaBar";
import SundayCelebBar from "../../components/page-events/sundayCelebBar";

const EventsPage = () => (
  <Layout>
    <SundayCelebBar />
    <div>Event list section</div>
    <div>Prayer Gatherings bar</div>
    <Instagram />
  </Layout>
);

export const Head = () => <Seo title="Events" />;

export default EventsPage;
