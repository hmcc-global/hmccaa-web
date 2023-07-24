import * as React from "react";
import { Link } from "gatsby";
import { ButtonArrow } from "./svgs";
import {
  button,
  textContainer,
  secondaryButton,
  primaryButton,
} from "../css/button.module.css";

export const ButtonLink = ({
  to = "#",
  hasArrow = false,
  className = "",
  children,
  customClassName,
}) => (
  <Link className={`${button} ${className} ${customClassName?.button}`} to={to}>
    <span className={`${(hasArrow && textContainer) || ""} ${customClassName?.textContainer || ""}`}>{children}</span>{" "}
    {hasArrow && <ButtonArrow />}
  </Link>
);

export const Button = ({
  hasArrow = false,
  type,
  children,
  customClassName,
}) => (
  <button type={type} className={`${button} ${customClassName?.button || ""}`}>
    <span className={`${(hasArrow && textContainer) || ""} ${customClassName?.textContainer || ""}`}>{children}</span>{" "}
    {hasArrow && <ButtonArrow />}
  </button>
);

export const SecondaryButtonLink = props => (
  <ButtonLink {...props} className={`${props.className} ${secondaryButton}`} />
);

export const PrimaryButtonLink = props => (
  <ButtonLink {...props} className={`${props.className} ${primaryButton}`} />
);
