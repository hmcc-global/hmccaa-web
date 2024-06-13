import * as React from "react";
import Link from "./Link";
import { ButtonArrow } from "./svgs";
import {
  button,
  textContainer,
  secondaryButton,
  primaryButton,
} from "../css/button.module.css";

// ...props captures 'to' or the 'href' parameter
export const ButtonLink = ({
  hasArrow = false,
  className = "",
  children,
  customClassName,
  ...props
}) => (
  <Link
    className={`${button} ${className} ${customClassName?.button || ""}`}
    {...props}
  >
    <span
      className={`${(hasArrow && textContainer) || ""} ${
        customClassName?.textContainer || ""
      }`}
    >
      {children}
    </span>{" "}
    {hasArrow && <ButtonArrow className="whitespace-nowrap" />}
  </Link>
);

export const Button = ({
  hasArrow = false,
  type,
  children,
  customClassName,
}) => (
  <button type={type} className={`${button} ${customClassName?.button || ""}`}>
    <span
      className={`${(hasArrow && textContainer) || ""} ${
        customClassName?.textContainer || ""
      }`}
    >
      {children}
    </span>{" "}
    {hasArrow && <ButtonArrow className={customClassName?.buttonArrow} />}
  </button>
);

// 'group' links with svgs/index.js in ButtonArrow for white arrow hover
export const SecondaryButtonLink = props => (
  <ButtonLink
    {...props}
    className={`group ${props.className} ${secondaryButton}`}
  />
);

export const PrimaryButtonLink = props => (
  <ButtonLink {...props} className={`${props.className} ${primaryButton}`} />
);
