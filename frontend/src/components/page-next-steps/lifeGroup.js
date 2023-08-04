import * as React from "react";
import { HighlightedParagraph } from "../shared/highlightedParagraph";
import { PrimaryButtonLink } from "../Button";
import { StaticImage } from "gatsby-plugin-image";

const LifeGroup = () => (
  <div className="flex gap-x-32 pt-14 pb-14">
    <div className="w-sm h-sm">
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
      <div className="flex">
        <PrimaryButtonLink hasArrow={true}>Learn More</PrimaryButtonLink>
      </div>
    </div>
    <div>
      <StaticImage src="../../images/LifeGroupImg.png" alt="Life Group Next Step" />
    </div>
  </div>
);

export default LifeGroup;
