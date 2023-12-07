import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { SecondaryButtonLink } from "../Button";

const MapDetails = () => {
  return (
    <div className="flex flex-col items-center justify-center px-[3.66rem] py-5 h-[15.6875rem] bg-Neutral-200">
      <div className="w-[14.25rem] h-[12.6875] gap-5 flex flex-col justify-center items-center text-center">
        <p className="w-[8.125rem] h-[2.8125rem] text-lg font-medium leading-tighter mb-0 text-Shades-100">
          Sunday Mornings <br />{" "}
          <span className="font-bold text-xl text-Shades-100">10 AM</span>
        </p>
        <div className="gap-1">
          <p className="mb-0">
            <span className="font-medium text-lg">Transformation Center</span>
            <br />{" "}
            <span className="font-bold text-xl">
              1001 E Huron St, <br /> Ann Arbor, MI 48104
            </span>
          </p>
          <SecondaryButtonLink hasArrow={true} className={"bg-Shades-0"}>
            MAPS & DIRECTIONS
          </SecondaryButtonLink>
        </div>
      </div>
      <div>
        <StaticImage src="../../images/connect-map-parking.png" />
      </div>
    </div>
  );
};

export default MapDetails;
