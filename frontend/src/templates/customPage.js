import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Banner from "../components/shared/banner";
import RichText from "../components/shared/richText";
import { PrimaryButtonLink } from "../components/Button";

const CustomPage = ({ data }) => {
  const pageData = data.strapiCustomPage;
  const url = pageData?.BannerImage?.file?.publicURL;
  const bgImage = url ? "" : "bg-events";
  const bgImageUrl = url ? `${process.env.HOST_ORIGIN}${url}` : null;
  const buttonText = pageData?.BottomButton?.Text;
  const buttonLink = pageData?.BottomButton?.Hyperlink;
  console.log("[CustomPage] Generated banner url:", bgImageUrl || bgImage);
  return (
    <Layout hasSpacing={false} className="custom-page">
      <Banner bgImage={`bg-[center_60%] ${bgImage}`} bgImageUrl={bgImageUrl}>
        {pageData?.Title}
      </Banner>
      <div className="content-padding-full w-3 py-[1.5375rem] px-2 [@media(min-width:425px)]:px-8 [@media(min-width:550px)]:px-24 sm:px-16 lg:px-4 flex [&>*]:w-full custom-content">
        <RichText data={pageData?.Content} />
      </div>
      {buttonText && buttonLink && (
        <div className="sm:flex sm:justify-center xl:relative z-10 pb-8">
          <PrimaryButtonLink hasArrow={true} href={buttonLink}>
            {buttonText}
          </PrimaryButtonLink>
        </div>
      )}
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
