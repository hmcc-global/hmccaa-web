import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import LifeGroup from "../../components/page-next-steps/lifeGroup";
import MissionsNextStep from "../../components/page-next-steps/missionsNextSteps";
import Banner from "../../components/shared/banner";

const NextStepsPage = () => (
  <Layout>
    <Banner bgImage="bg-next-steps bg-center">Next Steps</Banner>
    <div className="w-full px-4">
      <div className="max-w-container mx-auto">
        <LifeGroup />
        <div>Membership section</div>
        <div>Transformation classes section</div>
        <div>Baptism section</div>
        <div>Ministry teams section</div>
        <MissionsNextStep />
      </div>
    </div>
  </Layout>
);

export const Head = () => <Seo title="Next Steps" />;

export default NextStepsPage;
