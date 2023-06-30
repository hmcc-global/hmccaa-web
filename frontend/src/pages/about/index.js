import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Partners from "../../components/page-about/index/partners"
import Strategy from "../../components/page-about/index/strategy"
import LeadershipSection from "../../components/page-about/index/leadership";

export const Head = () => <Seo title="About" />;

const AboutPage = () => (
  <Layout>
    <div>Our Story section</div>
    <div>Our Mission section</div>
    <div>Our Values section</div>
    <LeadershipSection/>
    <div>Our Beliefs section</div>
    <Belief/>
    <Strategy/>
    <Partners/>
    <div>Feedback Form section</div>
  </Layout>
);

export default AboutPage
