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

// Dropdown changes navigate to /watch or one of the per-label filter pages (see page-generation/sermons.js)
const filterPages = [
  "/watch/",
  ...[...SermonTraitMetadata.values()].map(
    ({ restLabel }) => `/watch/${restLabel}/`
  ),
];

// Gatsby fetches app-data.json and page-data.json before navigating to a page it hasn't fully loaded, a network
// round trip per dropdown change. Loading these pages once the browser is idle, as <Link> does on hover, lets
// those navigations render straight away.
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
  const listing = useSermonListing(location, pageContext.clientOnly);
  useEffect(preloadFilterPages, []);
  if (listing === null) {
    return <NotFoundPage />;
  }

  return (
    <Layout hasSpacing={false}>
      <Banner bgImage="bg-[center_60%] bg-watch">Watch Online</Banner>
      <LiveStream />
      <div id="sermonsList" className="px-4 lg:px-8">
        <Sermons listing={listing} />
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
