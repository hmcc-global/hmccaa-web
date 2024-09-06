import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Banner from "../components/shared/banner";
import RichText from "../components/shared/richText";

const CustomPage = ({ data }) => {
  const pageData = data.strapiCustomPage;
  // TODO: this doesn't load the banner image properly into tailwind, so we will stick with the default for now.
  // const url = pageData?.BannerImage?.file?.publicURL;
  // const background = url ? `bg-[url(http://localhost:8000${url})]` : "bg-events";
  const background = "bg-events";
  return (
    <Layout hasSpacing={false}>
      <Banner bgImage={`bg-[center_60%] ${background}`}>
        {pageData?.Title}
      </Banner>
      <div className="content-padding-full w-3 py-[0.9375rem] px-2 [@media(min-width:425px)]:px-8 [@media(min-width:550px)]:px-24 sm:px-16 lg:px-4 flex gap-y-3 [&>*]:w-full">
        <RichText data={pageData?.Content} addPaddingToParagraphs={true} />
      </div>
    </Layout>
  );
};

export const Head = ({ data }) => (
  <Seo
    title={data.strapiCustomPage?.Title}
    description="Please join us in person on Sundays at the T-center. But if you cannot, come worship with us through our live stream! You can find our past sermons here too."
  />
);

export const pageQuery = graphql`
  query customPageQuery($url: String!) {
    strapiCustomPage(URL: { eq: $url }) {
      URL
      Title
      BannerImage {
        file {
          publicURL
        }
      }
      Content
      BottomButton {
        Text
        Hyperlink
      }
    }
  }
`;

export default CustomPage;
