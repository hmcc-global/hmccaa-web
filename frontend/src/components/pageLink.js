import * as React from "react";
import { Link } from "gatsby";

import { textContainer } from "../css/PageLinks.module.css";

export const PageLink = ({ to = "#", className = "", children }) => (
  <Link className={`${textContainer} ${className}`} to={to}>
    <span>{children}</span>{" "}
  </Link>
);
