import * as React from "react";
import { HighlightedParagraph } from "../shared/highlightedParagraph";
import { SecondaryButtonLink } from "../Button";
import { StaticImage } from "gatsby-plugin-image";

const TopLGSummary = () => (
  <div>
    <h1 className="text-center text-[40px] pt-[2.1875rem] lg:pt-20 font-bold mb-[2.25rem] lg:mb-8">
      LIFE GROUPS
    </h1>

    <div className="flex flex-col lg:flex-row gap-y-5 lg::gap-x-14 xl:gap-x-28 lg:pb-[100px]">
      <div className="lg:order-1 lg:w-[49.1526% text-center">
        <StaticImage
          className="max-w-[580px]"
          src="../../images/lifeGroupHuddle.png"
          alt="LG people"
        />
      </div>
      <div className="lg:w-[40.678%] text-center lg:text-left">
        <HighlightedParagraph className="text-[16px]">
          <p>
            In the Bible, Jesus talks about living an abundant life. The vision
            of LIFE Group is:{" "}
            <span>
              {" "}
              to experience the fullness of life in a Biblical community where
              the Gospel is radically lived out.{" "}
            </span>
            LIFE Groups seek to accomplish this by sharing our lives with one
            another within various life stages.
          </p>
          <p>
            More than just a weekly gathering, we believe that it is
            <span>
              {" "}
              an avenue to develop Christ-centered, genuine relationships for
              the greater empowerment of the body of Christ.
            </span>
          </p>
        </HighlightedParagraph>
      </div>
    </div>
  </div>
);

export default TopLGSummary;
