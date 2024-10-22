import * as React from "react";

import Layout from "../../components/layout";
import Seo, { PageDescriptions } from "../../components/seo";
import WelcomeSection from "../../components/page-new/welcome";
import Questions from "../../components/gotQuestions";
import Banner from "../../components/shared/banner";
import LifeStages from "../../components/page-new/lifeStages";
import CommonQuestions from "../../components/page-new/common-questions";
import MapDetails from "../../components/page-new/map-details";

const NewcomersPage = () => (
  <Layout>
    <Banner bgImage="bg-center bg-new">I&apos;m New</Banner>
    <div className="content-padding-full">
      <WelcomeSection />
    </div>
    <MapDetails />
    <CommonQuestions />
    <LifeStages />
    <div className="pl-[21px] pr-[11px] lg:px-4 w-full flex justify-center">
      <Questions />
    </div>
  </Layout>
);

export const Head = () => (
  <Seo title="I'm New" description={PageDescriptions.new} />
);

export default NewcomersPage;
