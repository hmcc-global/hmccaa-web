import * as React from "react";
import { HighlightedParagraph } from "../shared/highlightedParagraph";
import { SecondaryButtonLink } from "../Button";
import { StaticImage } from "gatsby-plugin-image";

const WelcomeMain = () => (
  <div className="flex flex-col lg:flex-row gap-x-32 gap-y-5 lg:pt-14 pt-6 pb-[1.5625rem] lg:pb-14 lg:mx-3 px-4 lg:px-0 items-center lg:items-start w-full lg:w-auto">
    <div className="lg:order-1">
      <StaticImage
        src="../../images/welcomeMainImg.png"
        alt="welcome page image"
      />
    </div>
    <div className="w-full lg:w-sm lg:h-sm lg:text-left text-center flex lg:block flex-col">
      <div className="subheading">welcome</div>
      <h2>we are all about jesus</h2>
      <HighlightedParagraph>
        <p className="pt-5">
          At HMCC, we believe Jesus is the most important person in the universe
          and <span>knowing Him changes everything.</span>
        </p>
        <p>
          We aim to create <span>a space where you can encounter God</span> and{" "}
          <span>experience His love in the community of others</span>, whether
          meeting together on Sunday, gathering in weekly LIFE groups, serving
          the needs of our community, and much more!
        </p>
        <p>
          We hope that we can get to know you and together, understand more of
          God’s love by the way we love one another.
        </p>
      </HighlightedParagraph>
      <div className="flex lg:justify-start justify-center">
        <SecondaryButtonLink hasArrow={true}>About Us</SecondaryButtonLink>
      </div>
    </div>
  </div>
);

export default WelcomeMain;
