import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Questions from "../../components/gotQuestions";

const NewcomersPage = () => (
  <Layout>
    <div>Welcome section</div>
    <div>Sunday celebration bar</div>
    <Questions />
  </Layout>
);

export const Head = () => <Seo title="I'm New" />;

export default NewcomersPage;
