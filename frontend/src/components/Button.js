import * as React from "react"
import { Link } from "gatsby"

const Button = ({ to = "#", hasArrow = false, children }) => (
  <Link className="button" to={to}>
    <span className="pr-2">{children}</span>{" "}
    {hasArrow && 
      <span className="arrow-container">
        <div className="arrow-angle top-arrow-angle"></div>
        <span className="arrow-line">&nbsp;</span>
        <div className="arrow-angle bottom-arrow-angle"></div>
      </span>
    }
  </Link>
);

export default Button;
