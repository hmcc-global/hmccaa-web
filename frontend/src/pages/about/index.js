import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Partners from "../../components/page-about/index/partners";
import Strategy from "../../components/page-about/index/strategy";
import Values from "../../components/page-about/index/values";
import Belief from "../../components/page-about/index/belief";
import LeadershipSection from "../../components/page-about/index/leadership";
import Feedback from "../../components/page-about/index/feedback";
import OurStory from "../../components/page-about/index/our-story";

export const Head = () => <Seo title="About" />;

const AboutPage = () => (
  <Layout>
    <div className="max-w-container">
      <OurStory />
      <div>Our Mission section</div>
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
