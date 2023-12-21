import * as React from "react";
import {
  container,
  text,
  topBox,
  topTrapezoid,
  bottomBox,
  bottomTrapezoid,
} from "../../../css/mission.module.css";

const EventPage = () => (
  <div className={container}>
    <div className={topBox}>
      <div className={topTrapezoid}>
        <div className={text}>
          <div className="subheading pb-1 lg:pb-0">
            What we are called to do
          </div>
          <h2>Our mission</h2>
          <p>
            To <span>transform lost people</span> into Christ’s disciples who
            will then <span>transform the world</span>.
          </p>
        </div>
      </div>
    </div>
    <div className={bottomBox}>
      <div className={bottomTrapezoid}>
        <div className={text}>
          <div className="subheading   pb-1 lg:pb-0">How we aspire to live</div>
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
export default EventPage;
