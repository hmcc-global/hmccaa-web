import * as React from "react"
import homeImage from "../images/image245.png"
import {PrimaryButtonLink} from "../components/Button";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
    <div>Transform lives, transform the world section</div>
    <div>Join us this sunday section</div>
    <div>Welcome section</div>
    <div>Get connected section</div>
    <div>Get involved section</div>
    <div>Upcoming events section</div>
  </Layout>
)

export const Head = () => <Seo title="Harvest Mission Community Church" />

export default IndexPage
