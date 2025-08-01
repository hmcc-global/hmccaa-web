import * as React from "react";
import { HighlightedParagraph } from "../shared/highlightedParagraph";
import { SecondaryButtonLink } from "../Button";
import { StaticImage } from "gatsby-plugin-image";
import { mediaWrapper } from "../../css/media.module.css";

const TopLGSummary = () => {
  return (
    <div>
      <h1 className="lg:text-center text-[2.5rem] pt-[2.1875rem] lg:pt-20 font-bold mb-[2.25rem] lg:mb-0">
        LIFE GROUPS
      </h1>

      <div className="flex flex-col lg:flex-row gap-y-5 lg:pb-25 pb-15 content-image">
        <div
          className={`${mediaWrapper} lg:order-1 text-center image-container`}
        >
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/5OOb0W8Kv_A"
              title="LIFE Group Intro Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="text-left content-container">
          <HighlightedParagraph className="text-lg">
            <p>
              In the Bible, Jesus talks about living an abundant life. The
              vision of Life group is:{" "}
              <span>
                {" "}
                to experience the fullness of life in a Biblical community where
                the Gospel is radically lived out.{" "}
              </span>
              Life groups seek to accomplish this by sharing our lives with one
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
              If you are new to our church, there is no better way to get a
              taste of who we are and what we believe in than to check out one
              of our Life groups. Don&apos;t miss out this opportunity to
              experience the life-changing power of Biblical community.
            </p>
          </HighlightedParagraph>
          <div className="lg:flex lg:justify-start">
            <SecondaryButtonLink hasArrow={true} to="#lg-signups-anchor">
              CHECK OUT A LIFE GROUP
            </SecondaryButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopLGSummary;
