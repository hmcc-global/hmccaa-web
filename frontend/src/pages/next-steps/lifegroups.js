import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import TopLGSummary from "../../components/page-lifeGroups/topLGSummary";
import Life from "../../components/page-lifeGroups/life";
const LifeGroupsPage = () => (
  <Layout>
    <TopLGSummary />
    <Life/>
  </Layout>
);

export const Head = () => <Seo title="LIFE Groups" />;

export default LifeGroupsPage;
