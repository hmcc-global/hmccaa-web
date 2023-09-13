import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Questions from "../../components/gotQuestions";
import Instagram from "../../components/instaBar";
import Banner from "../../components/shared/banner";
import SundayCelebration from "../../components/page-connect/sunday-celebration"

const ConnectPage = () => (
  <Layout>
    <Banner bgImage="bg-connect bg-[center_top]">Connect</Banner>
    <div className="max-w-container">
      <SundayCelebration />
      <div>Common Questions section</div>
      <div>Life Stages section</div>
      <Questions />
      <Instagram />
    </div>
  </Layout>
);

export const Head = () => <Seo title="Connect" />;

export default ConnectPage;
