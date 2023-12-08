import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import RightNowMedia from "../../components/page-watch/rightNowMedia";
import Banner from "../../components/shared/banner";
import Sermons from "../../components/page-watch/index/sermons";

const WatchPage = () => (
  <Layout>
    <Banner bgImage="bg-[center_60%] bg-watch">Watch Online</Banner>
    <div>Live Stream section</div>
    <Sermons />
    <RightNowMedia />
  </Layout>
);

export const Head = () => <Seo title="Watch" />;

export default WatchPage;
