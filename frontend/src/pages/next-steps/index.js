import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import LifeGroup from "../../components/page-next-steps/lifeGroup";

const NextStepsPage = () => (
  <Layout>
    <div className="max-w-container mx-auto">
      n<div>Life Groups section</div>
      <div>Membership section</div>
      <div>Transformation classes section</div>
      <div>Baptism section</div>
      <div>Ministry teams section</div>
      <MissionsNextStep />
    </div>
  </Layout>
);

export const Head = () => <Seo title="Next Steps" />;

export default NextStepsPage;
