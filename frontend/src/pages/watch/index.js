import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import RightNowMedia from "../../components/page-watch/rightNowMedia";
import Banner from "../../components/shared/banner";
import Sermons from "../../components/page-watch/index/sermons";
import LiveStream from "../../components/page-watch/liveStream";

const WatchPage = () => (
  <Layout>
    <Banner bgImage="bg-[center_60%] bg-watch">Watch Online</Banner>
    <LiveStream />
    <Sermons />
    <RightNowMedia />
  </Layout>
);

export const Head = () => <Seo title="Watch" />;

export default WatchPage;
