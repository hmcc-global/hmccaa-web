import * as React from "react"
import { Link } from "gatsby"

export const ButtonLink = ({ to = "#", hasArrow = false, children }) => (
  <Link className="button" to={to}>
    <span className="pr-2">{children}</span>{" "}
    {hasArrow && (
      <span className="arrow-container">
        <div className="arrow-angle top-arrow-angle"></div>
        <span className="arrow-line">&nbsp;</span>
        <div className="arrow-angle bottom-arrow-angle"></div>
      </span>
    )}
  </Link>
)

export const Button = ({ hasArrow = false, type, children }) => (
  <button type={type} className="button">
    <span className="pr-2">{children}</span>{" "}
    {hasArrow && (
      <span className="arrow-container">
        <div className="arrow-angle top-arrow-angle"></div>
        <span className="arrow-line">&nbsp;</span>
        <div className="arrow-angle bottom-arrow-angle"></div>
      </span>
    )}
  </button>
)
