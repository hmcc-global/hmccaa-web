/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const path = require("path");
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
);

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `HMCC Ann Arbor`,
    description: `Welcome to Ann Arbor! We are a church on the University of Michigan campus that is open to people of all life stages and backgrounds. Come visit us on Sundays at 10 am!`,
    author: `HMCC Ann Arbor Web Team`,
    siteUrl: `https://annarbor.hmcc.net`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-strapi-graphql",
      options: {
        apiURL: process.env.STRAPI_API_URL,
        token: process.env.STRAPI_TOKEN,
        collectionTypes: [
          "custom-page",
          "sermon",
          "sermon-series",
          "sermon-topic",
          "preacher",
          "location",
          "contact",
          "event",
          "event-template",
          "missions-trip",
          "supported-missionary",
        ],
        singleTypes: ["notification-bar", "life-groups-page"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HMCC Ann Arbor Gatsby site`,
        short_name: `hmccaa-web`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Montserrat`,
            file: `https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap`,
          },
          {
            name: `Raleway`,
            file: `https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap`,
          },
          {
            name: "Inter",
            file: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
          },
          {
            name: "Roboto",
            file: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
          },
          {
            name: "Ubuntu",
            file: "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap",
          },
          {
            name: "Bebas Neue",
            file: "https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        // Default settings that may be omitted or customized
        stages: ["develop"],
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: ["node_modules", "bower_components", ".cache", "public"],
        // Any additional eslint-webpack-plugin options below
        // ...
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // useAutoGen: required 'true' to use autogen
        useAutoGen: true,
        // exclude: optional, include this array to exclude paths you don't want to
        // generate breadcrumbs for (see below for details).
        exclude: [
          `**/dev-404-page/**`,
          `**/404/**`,
          `**/404.html`,
          `**/offline-plugin-app-shell-fallback/**`,
        ],
        // isMatchOptions: optional, include this object to configure the wildcard-match library.
        excludeOptions: {
          separator: ".",
        },
        // crumbLabelUpdates: optional, update specific crumbLabels in the path
        crumbLabelUpdates: [
          {
            pathname: "/about",
            crumbLabel: "About",
          },
          {
            pathname: "/about/our-team",
            crumbLabel: "Our Team",
          },
          {
            pathname: "/about/hmi",
            crumbLabel: "HMI",
          },
          {
            pathname: "/new",
            crumbLabel: "I'm New",
          },
          {
            pathname: "/new/life-stages",
            crumbLabel: "Life Stages",
          },
          {
            pathname: "/watch",
            crumbLabel: "Watch",
          },
          {
            pathname: "/watch/sermons",
            crumbLabel: "Sermons",
          },
          {
            pathname: "/get-involved",
            crumbLabel: "Get Involved",
          },
          {
            pathname: "/get-involved/lifegroups",
            crumbLabel: "Life Groups",
          },
          {
            pathname: "/get-involved/membership",
            crumbLabel: "Membership",
          },
          {
            pathname: "/get-involved/transformation",
            crumbLabel: "Transformation Classes",
          },
          {
            pathname: "/get-involved/baptism",
            crumbLabel: "Baptism",
          },
          {
            pathname: "/get-involved/ministryteams",
            crumbLabel: "Ministry Teams",
          },
          {
            pathname: "/get-involved/missions",
            crumbLabel: "Missions Support",
          },
          {
            pathname: "/events",
            crumbLabel: "Events",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["HOST_ORIGIN"],
      },
    },
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        // keep your 404 mapping
        ErrorDocument: "ErrorDocument 404 /404.html",
        custom: `
<IfModule mod_headers.c>
  <FilesMatch "\\.(png|jpe?g|gif|svg|webp|avif|ico|woff2?|ttf|otf|mp4|webm|mp3|wav)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
</IfModule>
        `,
      },
    },
  ],
};
