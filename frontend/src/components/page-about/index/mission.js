import * as React from "react";
import {
  container,
  text,
  topBox,
  topTrapezoid,
} from "../../../css/missionVision.module.css";

const Mission = () => (
  <div className={container}>
    <div className={topBox}>
      <div className={topTrapezoid}>
        <div className={text}>
          <div className="subheading pb-1 lg:pb-0">
            What we are called to do
          </div>
          <h2>Our mission</h2>
          <p>
            To <span>transform lost people</span> into Christ&apos;s disciples
            who will then <span>transform the world</span>.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Mission;
