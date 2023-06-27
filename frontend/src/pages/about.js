import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Partners from "../components/partners"
import Strategy from "../components/strategy"
import OurStory from "../components/our-story"

export const Head = () => <Seo title="Home" />

export default () => (
  <Layout>
    <OurStory></OurStory>
    <div>Our Mission section</div>
    <div>Our Leadership section</div>
    <div>Our Beliefs section</div>
    <Strategy/>
    <Partners/>
    <div>Feedback Form section</div>
  </Layout>
)
