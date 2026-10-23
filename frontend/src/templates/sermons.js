import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import RightNowMedia from "../components/page-watch/rightNowMedia";
import Banner from "../components/shared/banner";
import Sermons from "../components/page-watch/index/sermons";
import { useSermonListing } from "../components/page-watch/index/sermonListing";
import LiveStream from "../components/page-watch/liveStream";
import NotFoundPage from "../pages/404";

const WatchPage = ({ location, pageContext }) => {
  const listing = useSermonListing(location, pageContext.clientOnly);
  if (listing === null) {
    return <NotFoundPage />;
  }

  return (
    <Layout hasSpacing={false}>
      <Banner bgImage="bg-[center_60%] bg-watch">Watch Online</Banner>
      <LiveStream />
      <div id="sermonsList" className="px-4 lg:px-8">
        {/* Remount when the filter changes so the dropdowns and loader start fresh, as when each filter was its own page */}
        <Sermons key={listing?.url ?? ""} listing={listing} />
      </div>
      <RightNowMedia />
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Watch Online"
    description="Please join us in person on Sundays at the T-center. But if you cannot, come worship with us through our live stream! You can find our past sermons here too."
  />
);

export default WatchPage;
