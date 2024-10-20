import * as React from "react";
import { HighlightedParagraph } from "../shared/highlightedParagraph";
import { PrimaryButtonLink } from "../Button";
import { StaticImage } from "gatsby-plugin-image";

const LifeGroup = () => (
  <div className="flex flex-col lg:flex-row gap-y-5 pt-[15px] pb-8 lg:py-15 justify-center items-center content-image">
    <div className="lg:order-1 text-center image-container">
      <StaticImage
        src="../../images/LifeGroupImg.png"
        alt="Life Group Next Step"
      />
    </div>
    <div className="text-center lg:text-left content-container">
      <div className="subheading">life groups</div>
      <h2>build lasting relationships.</h2>
      <HighlightedParagraph>
        <p className="pt-5">
          In the Bible, Jesus talks about living an abundant life. The vision of
          Life group is:{" "}
          <span>
            to experience the fullness of life in a Biblical community where the
            Gospel is radically lived out
          </span>
          . Life groups seek to accomplish this by sharing our lives with one
          another within various life stages.
        </p>
      </HighlightedParagraph>
      <div className="flex justify-center lg:justify-start">
        <PrimaryButtonLink hasArrow={true} to={"/get-involved/lifegroups"}>
          Learn More
        </PrimaryButtonLink>
      </div>
    </div>
  </div>
);

export default LifeGroup;
