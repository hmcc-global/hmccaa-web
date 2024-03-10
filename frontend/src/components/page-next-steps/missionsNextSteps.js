import * as React from "react";
import { HighlightedParagraph } from "../shared/highlightedParagraph";
import { StaticImage } from "gatsby-plugin-image";

const MissionsNextStep = () => (
  <div className="flex flex-col lg:flex-row gap-5 pb-[29px] pt-4 lg:py-14">
    <div className="lg:w-sm lg:order-1 text-center">
      <StaticImage
        src="../../images/missionsNextStepImg.png"
        alt="Missions Next Step"
      />
    </div>
    <div className="lg:w-sm h-auto text-center lg:text-left">
      <div className="subheading">Missions</div>
      <h2>go to all nations</h2>
      <HighlightedParagraph>
        <p className="pt-5">
          We believe <span>God has called each one of us to missions</span>,
          whether it&apos;s overseas or locally. Our vision is to be a
          transcultural church, allowing us to share the Gospel wherever we go,
          to people of all nations. We go in order to experience new cultures
          and ways of life, to see and understand, to empathize and to connect
          people with Jesus.
        </p>
        <p>
          Throughout the years, we&apos;ve traveled to Indonesia, Singapore,
          Chile, Honduras, Peru, Jordan, as well as locally in Detroit, Chicago,
          Austin, and more.
        </p>
        <p>
          We have new opportunities each year. See how you can get involved!
        </p>
      </HighlightedParagraph>
      <div>
        <p className="text-Accent-200 font-bold">
          Please email annarbor@hmcc.net to get connected!
        </p>
      </div>
    </div>
  </div>
);

export default MissionsNextStep;
