import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import TopLGSummary from "../../components/page-lifeGroups/topLGSummary";

const LifeGroupsPage = () => (
  <Layout>
    <TopLGSummary />
    <div>Love Investment Faith Enjoyment</div>
  </Layout>
);

export const Head = () => <Seo title="LIFE Groups" />;

export default LifeGroupsPage;
