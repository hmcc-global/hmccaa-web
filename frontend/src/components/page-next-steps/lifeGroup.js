import * as React from "react";
import { HighlightedParagraph } from "../shared/highlightedParagraph";
import { PrimaryButtonLink } from "../Button";
import { StaticImage } from "gatsby-plugin-image";

const LifeGroup = () => (
  <div className="flex flex-col md:flex-row gap-y-5 pt-[15px] pb-8 md:py-15 justify-center items-center content-image">
    <div className="md:order-1 text-center image-container">
      <StaticImage
        src="../../images/LifeGroupImg.png"
        alt="Life Group Next Step"
      />
    </div>
    <div className="text-center md:text-left content-container">
      <div className="subheading">life groups</div>
      <h2>build lasting relationships.</h2>
      <HighlightedParagraph>
        <p className="pt-5">
          In the Bible, Jesus talks about living an abundant life. The vision of
          LIFE Group is:{" "}
          <span>
            to experience the fullness of life in a Biblical community where the
            Gospel is radically lived out
          </span>
          . LIFE Groups seek to accomplish this by sharing our lives with one
          another within various life stages.
        </p>
      </HighlightedParagraph>
      <div className="flex justify-center md:justify-start">
        <PrimaryButtonLink hasArrow={true} to={"../../next-steps/lifegroups"}>
          Learn More
        </PrimaryButtonLink>
      </div>
    </div>
  </div>
);

export default LifeGroup;
