/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const PageDescriptions = {
  about:
    "HMCC's mission is to transform lost people into Christ's disciples who will then transform the world. We do this by gathering, growing, and going. Learn more about us!",
  "about-hmi":
    "HMI is our outreach ministry, committed to planting churches, sending workers, and partnering with missionaries. We have church plants in Austin, Jakarta, Tangerang, Hong Kong, and Detroit.",
  "about-our-team":
    "Get to know a bit more about our elders and deacons at HMCC! Feel free to reach out for any questions you may have.",
  connect:
    "Find out more about HMCC - when and where we meet, frequently asked questions, or simply say hi so we can connect with you!",
  "connect-life-stages":
    "Whether you’re coming for school or are in Michigan for family or career, we have a group for you! Learn more about the different Life Stages at HMCC.",
  events:
    "Events are ways we gather as a church body to connect across different life stages. Don’t miss out on opportunities to have fun and get to know others!",
  give: "If you're interested in supporting what God is doing here at Harvest Mission Community Church, there are a couple options you can give.",
  new: "Welcome to HMCC! We are on the University of Michigan campus and are open to people of all life stages and backgrounds. We'd love to get to know you.",
  "get-involved":
    "Come check out our Life Groups, where we encourage each other in our journey of faith! Also, learn more about membership, ministry teams, and missions.",
  "get-involved-baptism":
    "Baptism represents a union with Jesus in his death and resurrection, which is only possible through saving faith in him. Learn more about baptism here at HMCC.",
  "get-involved-lifegroups":
    "Life Group is an avenue to develop Christ-centered relationships. There's no better way to get a taste of who we are and what we believe in than through Life Groups!",
  "get-involved-membership":
    "As believers in Jesus, we are members of his spiritual body, demonstrated by a commitment to the local church. Find out what membership at HMCC looks like!",
  "get-involved-ministryteams":
    "God has given us unique gifts to build up the church and the world around us. Check out some possible ways we can serve one another as a church body!",
  "get-involved-missions":
    "God has called each of us to missions, whether overseas or local. We send out mission teams each year to various places. See how you can support or get involved!",
  "get-involved-transformation":
    "Transformation classes are meant to help challenge, encourage, and equip our members to know God more deeply and live out His calling for their lives.",
};

function Seo({ description = null, title, children = null }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  );
}

export default Seo;
