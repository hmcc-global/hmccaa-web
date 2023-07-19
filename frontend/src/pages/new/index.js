import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import WelcomeSection from "../../components/page-new/welcome";
import SundayCelebrationSection from "../../components/page-new/sunday-celebration";

const NewcomersPage = () => (
  <Layout>
    <WelcomeSection/>
    <SundayCelebrationSection/>
    <div>Life stages section</div>
    <div>Got any questions section</div>
  </Layout>
);

export const Head = () => <Seo title="I'm New" />;

export default NewcomersPage;
