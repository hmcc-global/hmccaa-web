import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Questions from "../../components/gotQuestions";
import Instagram from "../../components/instaBar";
import Banner from "../../components/shared/banner";

const ConnectPage = () => (
  <Layout>
    <Banner bgImage="bg-connect bg-center">Connect</Banner>
    <div>Sunday Celebration section</div>
    <div>Common Questions section</div>
    <div>Life Stages section</div>
    <Questions />
    <Instagram />
  </Layout>
);

export const Head = () => <Seo title="Connect" />;

export default ConnectPage;
