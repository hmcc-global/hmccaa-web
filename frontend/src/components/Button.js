import * as React from "react"
import { Link } from "gatsby"
import {
  button,
  textContainer,
  arrowContainer,
  top,
  bottom,
  line,
} from "../css/button.module.css"

export const ButtonLink = ({ to = "#", hasArrow = false, children }) => (
  <Link className={button} to={to}>
    <span className={textContainer}>{children}</span>{" "}
    {hasArrow && (
      <span className={arrowContainer}>
        <div className={top}></div>
        <span className={line}>&nbsp;</span>
        <div className={bottom}></div>
      </span>
    )}
  </Link>
)

export const Button = ({ hasArrow = false, type, children }) => (
  <button type={type} className={button}>
    <span className={textContainer}>{children}</span>{" "}
    {hasArrow && (
      <span className={arrowContainer}>
        <div className={top}></div>
        <span className={line}>&nbsp;</span>
        <div className={bottom}></div>
      </span>
    )}
  </button>
)
