import * as React from "react";
import { useEffect } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import RightNowMedia from "../components/page-watch/rightNowMedia";
import Banner from "../components/shared/banner";
import Sermons from "../components/page-watch/index/sermons";
import { useSermonListing } from "../components/page-watch/index/sermonListing";
import LiveStream from "../components/page-watch/liveStream";
import NotFoundPage from "../pages/404";
import { SermonTraitMetadata } from "../page-generation/sermon-pages";

// The Gatsby pages that listing URLs belong to (see page-generation/sermons.js)
const filterPages = [
  "/watch/",
  ...[...SermonTraitMetadata.values()].map(
    ({ restLabel }) => `/watch/${restLabel}/`
  ),
];

// Back/forward between listing URLs can switch Gatsby page, and Gatsby fetches app-data.json and page-data.json
// before rendering a page it hasn't fully loaded. Loading these pages once the browser is idle, as <Link> does
// on hover, saves that network round trip.
function preloadFilterPages() {
  const preload = () =>
    filterPages.forEach(path => window.___loader?.hovering(path));
  if ("requestIdleCallback" in window) {
    const id = requestIdleCallback(preload);
    return () => cancelIdleCallback(id);
  }
  const id = setTimeout(preload, 1);
  return () => clearTimeout(id);
}

const WatchPage = ({ location, pageContext }) => {
  const [listing, navigateListing] = useSermonListing(
    location,
    pageContext.clientOnly
  );
  useEffect(preloadFilterPages, []);
  if (listing === null) {
    return <NotFoundPage />;
  }

  return (
    <Layout>
      <div className="section-band">
        <Banner bgImage="bg-[center_60%] bg-watch">Watch Online</Banner>
        <LiveStream />
      </div>
      <div id="sermonsList" className="px-4 lg:px-8">
        <Sermons listing={listing} navigateListing={navigateListing} />
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
