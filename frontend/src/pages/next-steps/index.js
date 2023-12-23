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
    {/*
      // <div>Membership section</div>
      // <div>Transformation classes section</div>
      // <div>Baptism section</div>
    */}

    <div className="px-[1rem]">
      <LifeGroup />
    </div>
    <div className="px-[1rem]">
      <MinistryTeams />
    </div>
    <div className="px-[1rem]">
      <MissionsNextStep />
    </div>
  </Layout>
);

export const Head = () => <Seo title="Next Steps" />;

export default NextStepsPage;
