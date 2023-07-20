import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Questions from "../../components/page-new/gotQuestions";

const NewcomersPage = () => (
  <Layout>
    <div>Welcome section</div>
    <div>Sunday celebration bar</div>
    <LifeStages />
    <div>Got any questions section</div>
  </Layout>
);

export const Head = () => <Seo title="I'm New" />;

export default NewcomersPage;
