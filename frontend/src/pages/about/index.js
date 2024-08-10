import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Partners from "../../components/page-about/index/partners";
import Strategy from "../../components/page-about/index/strategy";
import Mission from "../../components/page-about/index/mission";
import Values from "../../components/page-about/index/values";
import Belief from "../../components/page-about/index/belief";
import Vision from "../../components/page-about/index/vision";
import LeadershipSection from "../../components/page-about/index/leadership";
import Feedback from "../../components/page-about/index/feedback";
import OurStory from "../../components/page-about/index/our-story";
import Banner from "../../components/shared/banner";

export const Head = () => (
  <Seo
    title="About"
    description="HMCC's mission is to transform lost people into Christ's disciples who will then transform the world. We do this by gathering, growing, and going. Learn more about us!"
  />
);

const AboutPage = () => (
  <Layout spacingColor="bg-Neutral-200">
    <Banner bgImage="bg-about bg-[center_top] ">About Us</Banner>
    <div className="content-padding-full">
      <OurStory />
    </div>
    <Mission />
    <div className="content-padding-full">
      <Values />
      <LeadershipSection />
      <Belief />
    </div>
    <Vision />
    <div className="content-padding-full">
      <Strategy />
      <Partners />
    </div>
    <Feedback />
  </Layout>
);

export default AboutPage;
