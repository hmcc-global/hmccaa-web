import * as React from "react";
import { Link } from "gatsby";
import { ButtonArrow } from "./svgs";
import { button, textContainer } from "../css/button.module.css";

export const ButtonLink = ({ to = "#", hasArrow = false, children }) => (
  <Link className={button} to={to}>
    <span className={textContainer}>{children}</span>{" "}
    {hasArrow && <ButtonArrow />}
  </Link>
);

export const Button = ({ hasArrow = false, type, children }) => (
  <button type={type} className={button}>
    <span className={textContainer}>{children}</span>{" "}
    {hasArrow && <ButtonArrow />}
  </button>
);
