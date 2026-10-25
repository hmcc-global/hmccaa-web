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

const Layout = ({ children, className = "" }) => {
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
    <div
      className={`bg-Neutral-100 font-raleway min-h-screen flex flex-col ${className}`}
    >
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      {/* Grows so the footer stays at the bottom of short pages */}
      <main className="flex-grow flex flex-col items-center gap-y-section pb-section bg-Shades-0 overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
