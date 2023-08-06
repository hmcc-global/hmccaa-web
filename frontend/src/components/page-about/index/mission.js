import * as React from "react";
import {
  container,
  text,
  topBox,
  topLeftTriangle,
  topRightTriangle,
  bottomBox,
  bottomLeftTriangle,
  bottomRightTriangle,
} from "../../../css/mission.module.css";

const Mission = () => (
  <div className={container}>
    <div className={topBox}>
      <div className={topLeftTriangle}></div>
      <div className={text}>
        <div className="subheading">What we are called to do</div>
        <h2>Our mission</h2>
        <p>
          To <span>transform lost people</span> into Christ’s 
          disciples who will then <span>transform the world</span>.
        </p>
      </div>
      <div className={topRightTriangle}></div>
    </div>
    <div className={bottomBox}>
      <div className={bottomLeftTriangle}></div>
      <div className={text}>
        <div className="subheading">How we aspire to live</div>
        <h2>Our vision</h2>
        <p>
          Becoming a <span>transcultural spiritual 
          family</span> reaching our neighbors, the 
          nations, and the next generation.
        </p>
      </div>
      <div className={bottomRightTriangle}></div>
    </div>
  </div>
);
export default Mission;
