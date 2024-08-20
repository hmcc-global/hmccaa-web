import * as React from "react";

import Layout from "../../components/layout";
import Seo, { PageDescriptions } from "../../components/seo";
import LifeGroup from "../../components/page-next-steps/lifeGroup";
import MissionsNextStep from "../../components/page-next-steps/missionsNextSteps";
import Banner from "../../components/shared/banner";
import MinistryTeams from "../../components/page-next-steps/ministryTeams";
import Membership from "../../components/page-next-steps/membership";
import Transformation from "../../components/page-next-steps/transformation";
import Baptism from "../../components/page-next-steps/baptism";

const NextStepsPage = () => (
  <Layout>
    <Banner bgImage="bg-next-steps bg-center">Next Steps</Banner>
    <div className="content-padding-full">
      <LifeGroup />
      <Membership />
      <Transformation />
      <Baptism />
      <MinistryTeams />
      <MissionsNextStep />
    </div>
  </Layout>
);

export const Head = () => (
  <Seo title="Next Steps" description={PageDescriptions["next-steps"]} />
);

export default NextStepsPage;
