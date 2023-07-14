import * as React from "react";
import whyGiveImage from "../../images/give-why-we-give.png";
import { HighlightedParagraph } from "../shared/highlightedParagraph";

const WhyWeGiveSection = () => (
  <div className="flex pb-20.5">
    <div className="pl-2.5 order-2">
      <div>
        <img src={whyGiveImage} alt="Why we give" />
      </div>
    </div>
    <div className="basis-689/1180 pr-8 pt-3.5 order-1">
      <div className="subheading">Why We Give</div>
      <h2>As God has given to us abundantly, we can give with joy!</h2>
      <HighlightedParagraph>
        <p>
          At HMCC, we believe that when God gives someone a vision, He will
          always provide for that vision.
        </p>
        <p>
          {" "}
          God invites us to partner with Him in His ministry of making disciples
          and transforming the world. Our financial giving - whether it is
          regular tithes or additional gifts - is not only an expression of{" "}
          <span>thankfulness and worship unto God</span>, but also{" "}
          <span>
            an act of faith that God will provide and equip His church for His
            mission
          </span>
          .
        </p>
        <p>
          Your gift propels us toward our vision and enables our church to
          respond swiftly with obedience to God's calling.{" "}
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
