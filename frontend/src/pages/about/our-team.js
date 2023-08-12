import * as React from "react";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { Heading } from "../../components/page-about/team/heading";
import EldersSection from "../../components/page-about/team/eldersSection";
import DeaconsSection from "../../components/page-about/team/deaconsSection";

const OurTeamPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  return (
    <Layout>
      <Breadcrumb crumbs={crumbs} crumbSeparator=" > " />
      <div className="max-w-container w-full flex flex-col items-center gap-y-[6.25rem]">
        <Heading />
        <EldersSection />
        <DeaconsSection />
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Our Team" />;

export default OurTeamPage;
