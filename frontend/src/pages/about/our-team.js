import React from "react";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";

import Layout from "../../components/layout";
import Seo, { PageDescriptions } from "../../components/seo";
import { Heading } from "../../components/page-about/team/heading";
import EldersSection from "../../components/page-about/team/eldersSection";
import DeaconsSection from "../../components/page-about/team/deaconsSection";
import Questions from "../../components/gotQuestions";

const OurTeamPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  return (
    <Layout>
      <div className="px-4 flex flex-col w-full items-center pt-[1.375rem] lg:pt-10 gap-y-[2.1875rem] lg:gap-y-[3.75rem]">
        <Breadcrumb crumbs={crumbs} crumbSeparator=" > " />
        <div className="max-w-container w-full flex flex-col items-center gap-y-[3.75rem] lg:gap-y-[6.25rem]">
          <Heading />
          <EldersSection />
          <DeaconsSection />
        </div>
        <Questions />
      </div>
    </Layout>
  );
};

export const Head = () => (
  <Seo title="Our Team" description={PageDescriptions["about-our-team"]} />
);

export default OurTeamPage;
