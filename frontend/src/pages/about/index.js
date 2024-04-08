import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Partners from "../../components/page-about/index/partners";
import Strategy from "../../components/page-about/index/strategy";
import Mission from "../../components/page-about/index/mission";
import Values from "../../components/page-about/index/values";
import Belief from "../../components/page-about/index/belief";
import LeadershipSection from "../../components/page-about/index/leadership";
import Feedback from "../../components/page-about/index/feedback";
import OurStory from "../../components/page-about/index/our-story";
import Banner from "../../components/shared/banner";

export const Head = () => <Seo title="About" />;

const AboutPage = () => (
  <Layout>
    <Banner bgImage="bg-about bg-[center_top] ">About Us</Banner>
    <div className="content-padding-full">
      <OurStory />
    </div>
    <Mission />
    <div className="content-padding-full">
      <Values />
      <LeadershipSection />
      <Belief />
      <Strategy />
      <Partners />
    </div>
    <Feedback />
  </Layout>
);

export default AboutPage;
