import * as React from "react";
import { useState } from "react";
import { arrow, subHead, box, toggleContainer } from "../css/belief.module.css";
import { Chevron } from "./svgs";

export const Collapsible = ({
  sectionHead,
  sectionBody,
  sectionBlock,
  overrideCss,
}) => {
  const [reveal, setReveal] = useState(false);
  const toggle = () => {
    setReveal(!reveal);
  };

  return (
    <div className={box}>
      <div onClick={toggle} className={`${subHead} sub-heading`}>
        <button className={`${arrow} chevron`} aria-label="Toggle">
          <Chevron
            direction="right"
            className={`${
              reveal
                ? "rotate-90"
                : overrideCss && overrideCss?.chevron
                ? overrideCss?.chevron
                : ""
            }`}
          />
        </button>
        <h3>
          <button>{sectionHead}</button>
        </h3>
      </div>
      <div
        className={`toggle ${toggleContainer}${reveal ? "" : " invisibility"}`}
      >
        {sectionBody && <p>{sectionBody}</p>}
        {sectionBlock &&
          sectionBlock.map((bodyContext, index) => {
            const isLast = index + 1 === sectionBlock.length;
            return isLast ? (
              <p key={`block-${index}`} className="mb-0">
                {bodyContext}
              </p>
            ) : (
              <p key={`block-${index}`}>{bodyContext}</p>
            );
          })}
      </div>
    </div>
  );
};
