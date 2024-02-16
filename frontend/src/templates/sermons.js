import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import RightNowMedia from "../components/page-watch/rightNowMedia";
import Banner from "../components/shared/banner";
import Sermons from "../components/page-watch/index/sermons";
import LiveStream from "../components/page-watch/liveStream";

const WatchPage = ({ data, pageContext }) => {
  return (
    <Layout>
      <Banner bgImage="bg-[center_60%] bg-watch">Watch Online</Banner>
      <LiveStream />
      <div className="px-4 lg:px-8">
        <Sermons sermons={data?.allStrapiSermon} pageContext={pageContext} />
      </div>
      <RightNowMedia />
    </Layout>
  );
};

export const Head = () => <Seo title="Watch" />;
// Page Query for Sermons with filtering based upon Drop Down Selection
export const pageQuery = graphql`
  query sermonsPageQuery(
    $skip: Int!
    $limit: Int!
    $prefix: String
    $name: String
    $seriesName: String
    $book: String
  ) {
    allStrapiSermon(
      sort: { DatePreached: DESC }
      limit: $limit
      skip: $skip
      filter: {
        Preacher: { Name: { eq: $name }, Prefix: { eq: $prefix } }
        Series: { Name: { eq: $seriesName } }
        BiblePassage: { elemMatch: { Book: { eq: $book } } }
      }
    ) {
      nodes {
        strapi_id
        Title
        DatePreached(formatString: "MMMM  DD, YYYY")
        BiblePassage {
          Book
          ChapterVerse
        }
        Series {
          Name
          id
          Background {
            localFile {
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
