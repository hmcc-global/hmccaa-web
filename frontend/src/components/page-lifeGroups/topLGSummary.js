import * as React from "react";
import { HighlightedParagraph } from "../shared/highlightedParagraph";
import { SecondaryButtonLink } from "../Button";
import { StaticImage } from "gatsby-plugin-image";
import { PageLink } from "../pageLink";

const pageLinkList = [
  { title: "Home", route: "../../" },
  { title: "Next Steps", route: "../../next-steps" },
  { title: "LIFE Groups", route: "." },
];

const TopLGSummary = () => (
  <div className="pt-[40px]">
    <PageLink>{pageLinkList}</PageLink>

    <h1 className="text-center text-[40px] pt-[80px] font-bold">LIFE GROUPS</h1>

    <div className="flex gap-x-28 pb-[100px]">
      <div className="w-[480px]">
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
          <p>
            If you are new to our church, there is no better way to get a taste
            of who we are and what we believe in then to check out one of our
            LIFE Groups. Don’t miss out this opportunity to experience the
            life-changing power of Biblical community!
          </p>
        </HighlightedParagraph>
        <div className="flex">
          <SecondaryButtonLink hasArrow={true}>
            CHECK OUT A LIFE GROUP
          </SecondaryButtonLink>
        </div>
      </div>
      <div>
        <StaticImage
          className="w-[605px]"
          src="../../images/lifeGroupHuddle.png"
          alt="LG people"
        />
      </div>
    </div>
  </div>
);

export default TopLGSummary;
