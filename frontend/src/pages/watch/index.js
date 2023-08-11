import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import RightNowMedia from "../../components/page-watch/rightNowMedia";

const WatchPage = () => (
  <Layout>
    <div>Live Stream section</div>
    <div>Previous Sermons section</div>
    <RightNowMedia />
  </Layout>
);

export const Head = () => <Seo title="Watch" />;

export default WatchPage;
