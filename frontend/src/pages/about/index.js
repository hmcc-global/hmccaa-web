import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Partners from "../../components/partners"
import Strategy from "../../components/strategy"

export const Head = () => <Seo title="About" />;

const AboutPage = () => (
  <Layout>
    <div>Our Story section</div>
    <div>Our Mission section</div>
    <div>Our Leadership section</div>
    <div>Our Beliefs section</div>
    <Strategy/>
    <Partners/>
    <div>Feedback Form section</div>
  </Layout>
);

export default AboutPage
