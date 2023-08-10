import * as React from "react";
import { HighlightedParagraph } from "../../shared/highlightedParagraph";
import { StaticImage } from "gatsby-plugin-image";

const OurStory = () => {
  return (
    <div className="px-0.5 flex flex-col items-center justify-center lg:flex-row lg:gap-[60px] py-[60px]">
      <div className="flex-shrink-0 lg:order-2">
        <StaticImage
          src="../../../images/about-our-story-greeters.png"
          alt="Greeter"
          className="mb-0"
        />
      </div>

      <div className="text-center lg:basis-[49.32%] lg:order-1 lg:items-center lg:text-left">
        <div className="flex flex-col gap-3 ">
          <div className="subheading">Our Story</div>
          <h2 className="pb-5">
            Transform lives, <br /> Transform the world.
          </h2>
        </div>
        <HighlightedParagraph>
          <p>
            Harvest Mission Community Church began in 1996 with a group of eight
            people and a dream:{" "}
            <span>
              to be a 1st-century church in the 21st century. As we looked into
              the book of Acts, God gave us the vision to be a community of
              faith that raises bold disciples of Christ who will transform the
              world.
            </span>
          </p>
          <p>
            We planted our roots on the University of Michigan campus in Ann
            Arbor with a focus of reaching college students, because we believe
            that college is a pivotal time for people to discover their
            God-given destiny. Over the years, our ministry has expanded to
            encompass people from different walks of life—from infants and
            youth, to single adults and married couples, to international
            students and families.
          </p>
          <p>
            Although the composition of our church may continue to change, our
            mission will always remain the same.{" "}
            <span>
              We desire to see people’s lives transformed, redirected to Gods
              purposes, and set out to transform the world for the glory of God.
            </span>
          </p>
        </HighlightedParagraph>
      </div>
    </div>
  );
};

export default OurStory;
