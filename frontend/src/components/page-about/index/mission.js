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
      <p className="text-Secondary-900">
        To transform lost people into Christ’s 
        disciples who will then transform the world.
      </p>
    </div>
    <div className={topRightTriangle}></div>
  </div>
  <div className="bottom-box">
    <div className="bottom-left-triangle"></div>
    <div className="subheading">How we aspire to live</div>
    <h2>Our vision</h2>
    <p>
      Becoming a transcultural spiritual family 
      reaching our neighbors, the nations, and 
      the next generation.
    </p>
    <div className="bottom-right-triangle"></div>
  </div>
</div>
);
export default Mission;
