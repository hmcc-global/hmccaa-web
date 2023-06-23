import * as React from "react"
import { Link } from "gatsby"

export default ({ to = "#", children }) => (
  <Link className="button" to={to}>
    <span className="pr-2">{children}</span>{" "}
    <span className="arrow-container">
      <div className="arrow-angle top-arrow-angle"></div>
      <span className="arrow-line">&nbsp;</span>
      <div className="arrow-angle bottom-arrow-angle"></div>
    </span>
  </Link>
)
