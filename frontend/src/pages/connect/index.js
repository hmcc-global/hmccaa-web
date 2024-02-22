import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Questions from "../../components/gotQuestions";
import Instagram from "../../components/instaBar";
import Banner from "../../components/shared/banner";
import SundayCelebration from "../../components/page-connect/sunday-celebration";
import MapDetails from "../../components/page-connect/map-details";

const ConnectPage = () => (
  <Layout>
    <Banner bgImage="bg-connect bg-[center_top]">Connect</Banner>
    <div className="max-w-container">
      <SundayCelebration />
      <MapDetails />
      <Questions />
    </div>
    <Instagram />
  </Layout>
);

export const Head = () => <Seo title="Connect" />;

export default ConnectPage;
