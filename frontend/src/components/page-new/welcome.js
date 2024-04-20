import * as React from "react";
import newWelcome from "../../images/new-welcome.png";
import { HighlightedParagraph } from "../shared/highlightedParagraph";
import { SecondaryButtonLink } from "../Button";

const WelcomeSection = () => (
  <div className="flex flex-col lg:flex-row items-center lg:items-start pt-3 pb-20.5 content-image">
    <div className="lg:order-1 image-container">
      <div>
        <img src={newWelcome} alt="Welcome" />
      </div>
    </div>
    <div className="text-center lg:text-left content-container">
      <div className="subheading">Welcome</div>
      <h2 className="pb-5">We&apos;re Glad You Are Here</h2>
      <HighlightedParagraph>
        <p>
          We believe <span>God created us to be in community</span> and not live
          life alone. We are glad that you&apos;re interested in connecting with
          us at HMCC, whether to learn more about God or to explore the abundant
          life He has called us to live.
        </p>
        <p>
          We gather as a church not as a religious duty but to{" "}
          <span>live out God&apos;s Word</span> by exhorting and lifting up one
          another. Furthermore, we <span>seek to encounter</span> Jesus together
          because not only does he bring healing and purpose and wholeness into
          our lives, he is glorious and worthy of our all.
        </p>
        <p>
          When you visit, we believe you will find more than just friendly
          faces, fun programs, and a celebratory atmosphere.{" "}
          <span>
            We know that lives can be transformed with just one encounter with
            Jesus.
          </span>
        </p>
      </HighlightedParagraph>
      <div className="flex justify-center lg:justify-start">
        <SecondaryButtonLink
          href="https://fs23.formsite.com/whitemn/dtuolqqeba/index.html"
          hasArrow={true}
        >
          Let us know you&apos;re coming
        </SecondaryButtonLink>
      </div>
    </div>
  </div>
);

export default WelcomeSection;
