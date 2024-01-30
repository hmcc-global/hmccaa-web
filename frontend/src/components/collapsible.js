import * as React from "react";
import { useState } from "react";
import { arrow, subHead, box, toggleContainer } from "../css/belief.module.css";
import { Chevron } from "./svgs";

export const Collapsible = ({ sectionHead, sectionBody }) => {
  const [reveal, setReveal] = useState(false);
  const toggle = () => {
    setReveal(!reveal);
  };

  return (
    <div className={box}>
      <div onClick={toggle} className={subHead}>
        <button className={arrow} aria-label="Toggle">
          <Chevron direction="right" className={reveal && "rotate-90"} />
        </button>
        <h3>
          <button>{sectionHead}</button>
        </h3>
      </div>
      <div
        className={`toggle ${toggleContainer}${reveal ? "" : " invisibility"}`}
      >
        <p>{sectionBody}</p>
      </div>
    </div>
  );
};
