import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Questions from "../../components/page-new/gotQuestions";
import LifeStages from "../../components/page-new/lifeStages";

const NewcomersPage = () => (
  <Layout>
    <div>Welcome section</div>
    <div>Sunday celebration bar</div>
    <LifeStages />
    <Questions/>
  </Layout>
);

export const Head = () => <Seo title="I'm New" />;

export default NewcomersPage;
