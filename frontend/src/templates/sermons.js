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
      <Sermons sermons={data?.allStrapiSermon} pageContext={pageContext} />
      <RightNowMedia />
    </Layout>
  );
};

export const Head = () => <Seo title="Watch" />;

export const pageQuery = graphql`
  query sermonsPageQuery(
    $skip: Int!
    $limit: Int!
    $prefix: String
    $name: String
  ) {
    allStrapiSermon(
      sort: { DatePreached: DESC }
      limit: $limit
      skip: $skip
      filter: { Preacher: { Name: { eq: $name }, Prefix: { eq: $prefix } } }
    ) {
      nodes {
        Title
        VideoLink
        ServiceType
        BiblePassage
        Series {
          Name
          id
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
