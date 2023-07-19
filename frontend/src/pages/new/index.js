import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";

const NewcomersPage = () => (
  <Layout>
    <div>Welcome section</div>
    <div>Sunday celebration bar</div>
    <div>Life stages section</div>
    <div>Got any questions section</div>
  </Layout>
);

export const Head = () => <Seo title="I'm New" />;

export default NewcomersPage;
