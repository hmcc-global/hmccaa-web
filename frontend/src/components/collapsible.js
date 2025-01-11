import * as React from "react";
import { useState } from "react";
import { arrow, subHead, box, toggleContainer } from "../css/belief.module.css";
import { Chevron } from "./svgs";

export const Collapsible = ({
  sectionHead,
  sectionBody,
  sectionBlock,
  headCss,
  overrideCss,
}) => {
  const [reveal, setReveal] = useState(false);
  const toggle = () => {
    setReveal(!reveal);
  };

  return (
    <div className={`${box} collapsible`}>
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
          <button className={headCss}>{sectionHead}</button>
        </h3>
      </div>
      <div
        className={`toggle ${toggleContainer}${reveal ? "" : " invisibility"}`}
      >
        {sectionBody && <div>{sectionBody}</div>}
        {sectionBlock &&
          sectionBlock.map((bodyContext, index) => {
            const isLast = index + 1 === sectionBlock.length;
            return isLast ? (
              <div key={`block-${index}`} className="mb-0">
                {bodyContext}
              </div>
            ) : (
              <div key={`block-${index}`}>{bodyContext}</div>
            );
          })}
      </div>
    </div>
  );
};
