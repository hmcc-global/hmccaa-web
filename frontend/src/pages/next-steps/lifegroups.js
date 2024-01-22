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
      <div className="px-1 [@media(min-width:375px)]:px-4 pt-[1.375rem] lg:pt-10 w-full ">
        <div className="w-full md:px-[3.25rem] flex flex-col items-center">
          <div className="max-w-container w-full">
            <Breadcrumb crumbs={crumbs} crumbSeparator=" > " />
            <TopLGSummary />
            <Life />
            <FiveEs />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="LIFE Groups" />;

export default LifeGroupsPage;
