import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import WelcomeSection from "../../components/page-new/welcome";
import SundayCelebrationSection from "../../components/page-new/sunday-celebration";
import Questions from "../../components/gotQuestions";
import Banner from "../../components/shared/banner";
import LifeStages from "../../components/page-new/lifeStages";

const NewcomersPage = () => (
  <Layout>
    <Banner bgImage="bg-center bg-new">I&apos;m New</Banner>
    <div className="content-padding-full">
      <WelcomeSection />
    </div>
    <SundayCelebrationSection />
    <LifeStages />
    <div className="pl-[21px] pr-[11px] lg:px-4 w-full flex justify-center">
      <Questions />
    </div>
  </Layout>
);

export const Head = () => (
  <Seo
    title="I'm New"
    description="Welcome to HMCC! We are on the University of Michigan campus and are open to people of all life stages and backgrounds. We'd love to get to know you."
  />
);

export default NewcomersPage;
