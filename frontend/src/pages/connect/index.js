import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Questions from "../../components/gotQuestions";
import Instagram from "../../components/instaBar";
import Banner from "../../components/shared/banner";
import SundayCelebration from "../../components/page-connect/sunday-celebration";
import MapDetails from "../../components/page-connect/map-details";
import CommonQuestions from "../../components/page-connect/common-questions";

const ConnectPage = () => (
  <Layout hasSpacing={false}>
    <Banner bgImage="bg-connect bg-[center_top]">Connect</Banner>
    <div className="content-padding-full">
      <div className="max-w-container flex flex-col items-center pb-20 lg:pb-40">
        <SundayCelebration />
        <MapDetails />
        <CommonQuestions />
        <Questions />
      </div>
    </div>
    <Instagram />
  </Layout>
);

export const Head = () => <Seo title="Connect" />;

export default ConnectPage;
