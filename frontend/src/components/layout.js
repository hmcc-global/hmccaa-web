/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

<<<<<<< HEAD
import Header from "./header"
import "./layout.css"
import Footer from "./footer"
=======
import Header from "./header";
import "./layout.css";
>>>>>>> 915aa57 (adding format files)

const Layout = ({ children }) => {
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
    <div className="bg-Neutral-100 font-raleway min-w-fit">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main className="flex flex-col items-center bg-Shades-0">{children}</main>
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
