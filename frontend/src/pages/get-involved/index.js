import * as React from "react";

import Layout from "../../components/layout";
import Seo, { PageDescriptions } from "../../components/seo";
import LifeGroup from "../../components/page-get-involved/lifeGroup";
import MissionsNextStep from "../../components/page-get-involved/missionsNextSteps";
import Banner from "../../components/shared/banner";
import MinistryTeams from "../../components/page-get-involved/ministryTeams";
import Membership from "../../components/page-get-involved/membership";
import Transformation from "../../components/page-get-involved/transformation";
import Baptism from "../../components/page-get-involved/baptism";

const NextStepsPage = () => (
  <Layout>
    <Banner bgImage="bg-get-involved bg-center">Next Steps</Banner>
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
  <Seo title="Next Steps" description={PageDescriptions["get-involved"]} />
);

export default NextStepsPage;
