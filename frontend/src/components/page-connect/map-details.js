import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { SecondaryButtonLink } from "../Button";

const MapDetails = () => {
  return (
    <div className="flex flex-col justify-center pt-5 md:pt-0 bg-Neutral-200 md:flex-row md:rounded-2xl max-w-[58.625rem] mx-auto">
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
              href="https://www.google.com/maps/place/Harvest+Mission+Community+Church/@42.2816338,-83.7372209,17z/data=!4m5!3m4!1s0x883cae6a77eef201:0xaf4019d9fc7aec8e!8m2!3d42.2816359!4d-83.7371982?hl=en&shorturl=1"
            >
              MAPS & DIRECTIONS
            </SecondaryButtonLink>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:p-2]">
        <StaticImage src="../../images/connect-map-parking.png" alt="" />
      </div>
    </div>
  );
};

export default MapDetails;
