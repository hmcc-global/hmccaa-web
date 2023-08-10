import * as React from "react";
import { HighlightedParagraph } from "../shared/highlightedParagraph";
import { SecondaryButtonLink } from "../Button";
import { StaticImage } from "gatsby-plugin-image";

const MissionsNextStep = () => (
  <div className="flex gap-x-5 pt-14 pb-14">
    <div className="w-smx2 h-smx2">
      <div className="subheading">Missions</div>
      <h2>go to all nations</h2>
      <HighlightedParagraph>
        <p className="pt-5">
          We believe <span>God has called each one of us to missions</span>,
          whether it’s overseas or locally. As our vision is to become more
          transcultural, we want to go where people are. We go in order to
          experience their culture and way of life, to see what they see and
          understand what they may encounter each day, to empathize and to
          connect.
        </p>
        <p>
          Throughout the years, we’ve travelled to Indonesia, Singapore, Chile,
          Honduras, Peru, Jordan, as well as locally in Detroit, Chicago,
          Austin, and more.
        </p>
        <p>
          We have new opportunities each year. See how you can get involved!
        </p>
      </HighlightedParagraph>
      <div>
        <p className="text-Accent-200 font-bold">
          Please email abc@hmccaa.com to get connected!
        </p>
      </div>
    </div>
    <div>
      <StaticImage
        src="../../images/missionsNextStepImg.png"
        alt="Missions Next Step"
      />
    </div>
  </div>
);

export default MissionsNextStep;
