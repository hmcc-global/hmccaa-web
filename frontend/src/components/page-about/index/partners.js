import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import {
  container,
  globalMissionImgContainer,
  globalMissionContainer,
  globalMissionContext,
  globalMission,
  statementContainer,
  buttonContainer,
} from "../../../css/partners.module.css";
import { SecondaryButtonLink } from "../../Button";
import { HighlightedParagraph } from "../../shared/highlightedParagraph";

const Partners = () => (
  <div className={container}>
    <div className={globalMissionImgContainer}>
      <div>
        <StaticImage src="../../../images/image264.png" alt="HMI Project" />
      </div>
    </div>
    <div className={statementContainer}>
      <div className="subheading">Our Partners</div>
      <h2>Harvest Mission International (HMI)</h2>
      <HighlightedParagraph>
        <p>
          As Christ has called us to{" "}
          <span>’make disciples of all nations’</span> (Matthew 28:19), we value
          the importance of the local church making an impact in its surrounding
          community for the Gospel of Jesus Christ.
        </p>
        <p>
          Currently HMI is involved in short-term projects both locally and
          internationally.
        </p>
      </HighlightedParagraph>
      <div className={buttonContainer}>
        <SecondaryButtonLink hasArrow={true} to={"/about/hmi"}>
          More Info
        </SecondaryButtonLink>
      </div>
    </div>
    <div className={globalMissionContainer}>
      <div className={globalMissionContext}>
        <div className={globalMission}>
          <h3>Our Global Mission</h3>
          <p>
            <span>Multiplying churches</span> in campuses and cities{" "}
            <span>to transform the next generation</span> among the nations.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Partners;
