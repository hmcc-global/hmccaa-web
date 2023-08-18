import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import TopLGSummary from "../../components/page-lifeGroups/topLGSummary";
import Life from "../../components/page-lifeGroups/life";
import FiveEs from "../../components/page-lifeGroups/fiveEs";
const LifeGroupsPage = () => (
  <Layout>
    <TopLGSummary />
    <Life/>
    <FiveEs/>
  </Layout>
);

export const Head = () => <Seo title="LIFE Groups" />;

export default LifeGroupsPage;
