/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";
import Footer from "./footer";

const Layout = ({
  children,
  hasSpacing = true,
  spacingColor = "bg-Shades-0",
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="bg-Neutral-100 font-raleway">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        id="loader"
        className="fixed inset-x-1/2 inset-y-1/3 mx-auto my-auto w-full z-50"
      ></div>
      <main className="flex flex-col items-center bg-Shades-0 overflow-x-hidden">
        {children}
      </main>
      {hasSpacing && <div className={`py-10 lg:py-20 ${spacingColor}`}></div>}
      <Footer />
    </div>
  );
};

export default Layout;
