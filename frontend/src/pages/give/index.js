import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import WhyWeGiveSection from "../../components/page-give/why-we-give-section";
import HowToGiveSection from "../../components/page-give/how-to-give";
import Banner from "../../components/shared/banner";

const GivePage = () => (
  <Layout>
    <Banner bgImage="bg-give bg-center">Giving</Banner>
    <div className="max-w-container">
      <WhyWeGiveSection />
      <HowToGiveSection />
    </div>
  </Layout>
)

export const Head = () => <Seo title="Give" />

export default GivePage;
