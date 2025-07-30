import * as React from "react";
import { HighlightedParagraph } from "../shared/highlightedParagraph";
import { StaticImage } from "gatsby-plugin-image";

const WhyWeGiveSection = () => (
  <div className="flex flex-col lg:flex-row pt-[15px] pb-[68px] gap-y-5 content-image">
    <div className="lg:order-1 image-container">
      <div>
        <StaticImage
          src="../../images/give-why-we-give.png"
          alt="Why we give"
        />
      </div>
    </div>
    <div className="content-container">
      <div className="subheading">Why We Give</div>
      <h2 className="pb-[20px]">
        As God has given to us abundantly, we can give with joy!
      </h2>
      <HighlightedParagraph>
        <p>
          God invites us to partner with Him in His ministry of making disciples
          and transforming the world. Our financial giving — whether it is
          regular tithes or additional gifts — is not only an expression of{" "}
          <span>thankfulness and worship unto God</span>, but also{" "}
          <span>
            an act of faith that God will provide and equip His church for His
            mission
          </span>
          .
        </p>
        <p>
          Your gift propels us toward our vision and enables our church to
          respond swiftly with obedience to God&#8217;s calling.{" "}
          <span>
            We invite you to contribute to this vision and to play a vital role
            in what God is doing!
          </span>
        </p>
      </HighlightedParagraph>
    </div>
  </div>
);

export default WhyWeGiveSection;
