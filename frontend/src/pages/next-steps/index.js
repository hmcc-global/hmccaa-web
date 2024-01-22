import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import LifeGroup from "../../components/page-next-steps/lifeGroup";
import MissionsNextStep from "../../components/page-next-steps/missionsNextSteps";
import Banner from "../../components/shared/banner";
import MinistryTeams from "../../components/page-next-steps/ministryTeams";

const NextStepsPage = () => (
  <Layout>
    <Banner bgImage="bg-next-steps bg-center">Next Steps</Banner>
    <div className="content-padding-full">
      <LifeGroup />
      <MinistryTeams />
      <MissionsNextStep />
    </div>
  </Layout>
);

export const Head = () => <Seo title="Next Steps" />;

export default NextStepsPage;
