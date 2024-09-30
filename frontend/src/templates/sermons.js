import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import RightNowMedia from "../components/page-watch/rightNowMedia";
import Banner from "../components/shared/banner";
import Sermons from "../components/page-watch/index/sermons";
import LiveStream from "../components/page-watch/liveStream";

const WatchPage = ({ data, pageContext }) => {
  let ids = data.allStrapiSermon?.nodes.map(node => node.strapiId);
  if (
    pageContext.skip === 0 &&
    ids.includes(326) &&
    ids.includes(321) &&
    ids.includes(322) &&
    ids.includes(323) &&
    ids.includes(324) &&
    ids.includes(325)
  ) {
    console.log(
      "watch page data:",
      data.allStrapiSermon?.nodes[0],
      data.allStrapiSermon?.nodes[0].Series.Background?.file || `0: null`,
      data.allStrapiSermon?.nodes[1],
      data.allStrapiSermon?.nodes[1].Series.Background?.file || `1: null`,
      data.allStrapiSermon?.nodes[2],
      data.allStrapiSermon?.nodes[2].Series.Background?.file || `2: null`,
      data.allStrapiSermon?.nodes[3],
      data.allStrapiSermon?.nodes[3].Series.Background?.file || `3: null`,
      data.allStrapiSermon?.nodes[4],
      data.allStrapiSermon?.nodes[4].Series.Background?.file || `4: null`,
      data.allStrapiSermon?.nodes[5],
      data.allStrapiSermon?.nodes[5].Series.Background?.file || `5: null`
    );
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
