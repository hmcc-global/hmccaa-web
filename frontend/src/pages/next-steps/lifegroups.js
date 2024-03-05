import * as React from "react";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import TopLGSummary from "../../components/page-lifeGroups/topLGSummary";
import Life from "../../components/page-lifeGroups/life";
import FiveEs from "../../components/page-lifeGroups/fiveEs";
const LifeGroupsPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  return (
    <Layout>
      <div className="px-1 [@media(min-width:375px)]:px-4 max-w-container w-full pt-[1.375rem] lg:pt-10">
        <Breadcrumb crumbs={crumbs} crumbSeparator=" > " />
        <TopLGSummary />
        <Life />
        <FiveEs />
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="LIFE Groups" />;

export default LifeGroupsPage;
