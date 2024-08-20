import * as React from "react";

import Layout from "../../components/layout";
import Seo, { PageDescriptions } from "../../components/seo";
import WhyWeGiveSection from "../../components/page-give/why-we-give-section";
import HowToGiveSection from "../../components/page-give/how-to-give";
import Banner from "../../components/shared/banner";

const GivePage = () => (
  <Layout>
    <Banner bgImage="bg-give bg-center">Giving</Banner>
    <div className="content-padding-full pb-[67px] lg:pb-0">
      <WhyWeGiveSection />
      <HowToGiveSection />
    </div>
  </Layout>
);

export const Head = () => (
  <Seo title="Giving" description={PageDescriptions.give} />
);

export default GivePage;
