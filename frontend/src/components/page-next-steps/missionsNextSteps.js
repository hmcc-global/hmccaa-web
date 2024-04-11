import * as React from "react";
import { HighlightedParagraph } from "../shared/highlightedParagraph";
import { StaticImage } from "gatsby-plugin-image";
import { SecondaryButtonLink } from "../Button";

const MissionsNextStep = () => (
  <div className="flex flex-col lg:flex-row gap-5 pb-[29px] pt-4 content-image items-center lg:items-start">
    <div className="lg:order-1 text-center image-container">
      <StaticImage
        src="../../images/missionsNextStepImg.png"
        alt="Missions Next Step"
      />
    </div>
    <div className="text-center lg:text-left content-container">
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
      <div className="flex justify-center lg:justify-start">
        <SecondaryButtonLink to="" hasArrow={true}>
          Learn More
        </SecondaryButtonLink>
      </div>
    </div>
  </div>
);

export default MissionsNextStep;
