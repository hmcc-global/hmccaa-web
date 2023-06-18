import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const Head = () => <Seo title="Home" />

export default () => (
  <Layout>
    <div>Our Story section</div>
    <div>Our Mission section</div>
    <div>Our Leadership section</div>
    <div>Our Beliefs section</div>
    <div>Our Strategy section</div>
    <div>Our Partners section</div>
    <div>Feedback Form section</div>
  </Layout>
)
