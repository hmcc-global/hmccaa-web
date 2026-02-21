import * as React from "react";
import { graphql } from "gatsby";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import Seo, { PageDescriptions } from "../../components/seo";
import TopLGSummary from "../../components/page-lifeGroups/topLGSummary";
import FiveEs from "../../components/page-lifeGroups/fiveEs";

const Images = ({ images }) => (
  <div className="flex lg:flex-row lg:flex-nowrap flex-wrap gap-6 pb-25 justify-center">
    {images.map(({ strapiId, alternativeText, file }, index) => (
      <div key={strapiId} className="max-w-[300px] self-center">
        {file?.childImageSharp?.gatsbyImageData && (
          <GatsbyImage
            image={file.childImageSharp.gatsbyImageData}
            alt={alternativeText || `Life Group Image ${index + 1}`}
          />
        )}
      </div>
    ))}
  </div>
);

const LifeGroupsPage = ({
  data: {
    strapiLifeGroupsPage: {
      Pictures: images,
      PromoVideo: videoOembed,
      SignUpLinks: links,
    },
  },
  pageContext: {
    breadcrumb: { crumbs },
  },
}) => {
  console.log(images, videoOembed, links);
  return (
    <Layout>
      <div className="px-1 [@media(min-width:375px)]:px-4 pt-[1.375rem] lg:pt-10 w-full ">
        <div className="w-full md:px-4 flex flex-col items-center">
          <div className="max-w-container w-full">
            <Breadcrumb crumbs={crumbs} crumbSeparator=" > " />
            <TopLGSummary oembed={videoOembed} />
            <Images images={images} />
            <FiveEs links={links} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query lifeGroupsPageQuery {
    strapiLifeGroupsPage {
      PromoVideo
      Pictures {
        strapiId
        alternativeText
        file {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      SignUpLinks {
        Hyperlink
        Text
        strapiId
      }
    }
  }
`;

export const Head = () => (
  <Seo
    title="Life Groups"
    description={PageDescriptions["get-involved-lifegroups"]}
  />
);

export default LifeGroupsPage;
