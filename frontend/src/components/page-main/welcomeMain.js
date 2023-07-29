import * as React from "react";
import { HighlightedParagraph } from "../shared/highlightedParagraph";
import { SecondaryButtonLink } from "../Button";
import welcomeMainImg from "../../images/welcomeMainImg.png";

const WelcomeMain = () => (
  <div className="flex gap-x-32 pt-14 pb-14 mx-32">
    <div className="w-sm h-sm">
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
      <div className="flex">
        <SecondaryButtonLink hasArrow={true}>About Us</SecondaryButtonLink>
      </div>
    </div>
    <div>
      <img src={welcomeMainImg} alt="welcome page image" />
    </div>
  </div>
);

export default WelcomeMain;
