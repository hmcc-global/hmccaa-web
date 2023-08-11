import * as React from "react";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";

import Layout from "../../components/layout";
import Seo from "../../components/seo";

const OurTeamPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  return (
    <Layout>
      <Breadcrumb crumbs={crumbs} crumbSeparator=" > " />
      <div className="max-w-container w-full flex flex-col items-center gap-y-[6.25rem]">
        <div className="max-w-[61.25rem] w-full flex flex-col items-center gap-y-[3.75rem]">
          <h1 className="font-bold leading-tighter text-4xl uppercase mb-0">
            Our Team
          </h1>
          <div className="text-[#FF0000]">
            <p>
              Something about Elders and Deacons. Lorem Ipsum... esus talks
              about living an abundant life. The vision of LIFE Group is: to
              experience the fullness of life in a Biblical community where the
              Gospel is radically lived out. LIFE Groups seek to accomplish this
              by sharing our lives with one another within various life stages.
            </p>
            <p className="mb-0">
              We desire to live out the 5 E’s (Evangelism, Education,
              Edification, Extension, Exaltation) of our values in a community
              context by studying the Bible, worshiping, serving and praying
              together.
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Our Team" />;

export default OurTeamPage;
