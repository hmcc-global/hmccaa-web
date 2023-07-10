import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import WhyWeGiveSection from "../../components/page-give/why-we-give-section";

const GivePage = () => (
  <Layout>
      <div className="max-w-container">
        <WhyWeGiveSection/>
        <div>Ways to give section</div>
      </div>
  </Layout>
);

export const Head = () => <Seo title="Give" />;

export default GivePage
