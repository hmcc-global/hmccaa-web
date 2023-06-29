import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const NextStepsPage = () => (
  <Layout>
      <div>Life Groups section</div>
      <div>Membership section</div>
      <div>Transformation classes section</div>
      <div>Baptism section</div>
      <div>Ministry teams section</div>
      <div>Missions section</div>
  </Layout>
);

export const Head = () => <Seo title="Next Steps" />;

export default NextStepsPage
