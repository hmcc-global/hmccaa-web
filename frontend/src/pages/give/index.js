import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import WhyWeGiveSection from "../../components/page-give/why-we-give-section";

export const Head = () => <Seo title="Give" />;

const GivePage = () => (
  <Layout>
    <WhyWeGiveSection/>
    <div>Ways to give section</div>
  </Layout>
);

export default GivePage
