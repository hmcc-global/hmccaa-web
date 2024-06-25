import * as React from "react";
import {
  container,
  text,
  bottomBox,
  bottomTrapezoid,
} from "../../../css/missionVision.module.css";

const Vision = () => (
  <div className={container}>
    <div className={bottomBox}>
      <div className={bottomTrapezoid}>
        <div className={text}>
          <div className="subheading pb-1 lg:pb-0">How we aspire to live</div>
          <h2>Our vision</h2>
          <p>
            Becoming a <span>transcultural spiritual family</span> reaching our
            neighbors, the nations, and the next generation.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Vision;
