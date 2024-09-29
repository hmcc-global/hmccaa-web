import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import RightNowMedia from "../components/page-watch/rightNowMedia";
import Banner from "../components/shared/banner";
import Sermons from "../components/page-watch/index/sermons";
import LiveStream from "../components/page-watch/liveStream";

const WatchPage = ({ data, pageContext }) => {
  if (
    pageContext.sermonIds.includes(326) &&
    pageContext.sermonIds.includes(321) &&
    pageContext.sermonIds.includes(322) &&
    pageContext.sermonIds.includes(323) &&
    pageContext.sermonIds.includes(324) &&
    pageContext.sermonIds.includes(325)
  ) {
    console.log("watch page data:", data);
  }
  return (
    <Layout hasSpacing={false}>
      <Banner bgImage="bg-[center_60%] bg-watch">Watch Online</Banner>
      <LiveStream />
      <div id="sermonsList" className="px-4 lg:px-8">
        <Sermons sermons={data?.allStrapiSermon} pageContext={pageContext} />
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
// Page Query for Sermons with filtering based upon Drop Down Selection
export const pageQuery = graphql`
  query sermonsPageQuery($skip: Int!, $limit: Int!, $sermonIds: [Int]) {
    allStrapiSermon(
      sort: { DatePreached: DESC }
      limit: $limit
      skip: $skip
      filter: { strapiId: { in: $sermonIds } }
    ) {
      nodes {
        strapiId
        Title
        DatePreached
        BiblePassage {
          Book
          ChapterVerse
        }
        Series {
          Name
          id
          Background {
            file {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        Preacher {
          Name
          Prefix
        }
      }
    }
  }
`;

export default WatchPage;
