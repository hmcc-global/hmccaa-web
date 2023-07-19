import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";

const WatchPage = () => (
  <Layout>
    <div>Live Stream section</div>
    <div>Previous Sermons section</div>
    <div>RightNow Media section</div>
  </Layout>
);

export const Head = () => <Seo title="Watch" />;

export default WatchPage;
