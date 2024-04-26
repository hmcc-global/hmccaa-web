import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { SecondaryButtonLink } from "../Button";

const Transformation = () => (
  <div className="max-w-container w-full flex flex-col md:flex-row content-image gap-y-5 py-5 text-center md:text-left items-center">
    <div className="max-w-[26.25rem] md:max-w-none image-container">
      <StaticImage
        src="../../images/transformation-classes.png"
        alt="Transformation Class"
      />
    </div>
    <div className="content-container flex flex-col gap-y-5">
      <div className="flex flex-col">
        <div className="subheading">Transformation Classes</div>
        <h2>Dig Deeper.</h2>
      </div>
      <div className="flex flex-col text-base md:text-lg">
        <p>
          Transformation classes dive deeper into some fundamentals of our faith
          - such as what it means to be a disciple of Christ, how to break free
          from our past, or how to spread God&apos;s Word.
        </p>
      </div>
      <div className="flex justify-center md:justify-start">
        <SecondaryButtonLink to="/next-steps/transformation">
          More Info
        </SecondaryButtonLink>
      </div>
    </div>
  </div>
);

export default Transformation;
