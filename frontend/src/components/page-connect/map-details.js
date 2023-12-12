import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { SecondaryButtonLink } from "../Button";

const MapDetails = () => {
  return (
    <div className="flex flex-col justify-center pt-5 md:pt-0 bg-Neutral-200 md:flex-row md:flex-shrink-0 md:rounded-2xl max-w-[58.625rem] mx-auto">
      <div className="px-[3.925rem] gap-5">
        <div className="flex flex-col justify-center items-center text-center md:gap-8 md:py-[4.75rem]">
          <p className="text-lg font-medium leading-tighter mb-0 text-Shades-100">
            Sunday Mornings <br />{" "}
            <span className="font-bold text-xl text-Shades-100">10 AM</span>
          </p>
          <div className="flex flex-col gap-1 md:gap-5">
            <p className="mb-0">
              <span className="font-medium text-lg">Transformation Center</span>
              <br />{" "}
              <span className="font-bold text-xl">
                1001 E Huron St, <br /> Ann Arbor, MI 48104
              </span>
            </p>
            <SecondaryButtonLink
              hasArrow={true}
              className={"bg-Shades-0"}
              to=""
            >
              MAPS & DIRECTIONS
            </SecondaryButtonLink>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:rounded-r-[1.25rem]">
        <StaticImage src="../../images/connect-map-parking.png" alt="" />
      </div>
    </div>
  );
};

export default MapDetails;
