import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { SecondaryButtonLink } from "../Button";

const MapDetails = () => {
  return (
    <div className="flex flex-col w-full text-center justify-center pt-5 bg-Primary-700 md:flex-row lg:max-w-[73.75rem] lg:pt-0 lg:rounded-2xl">
      <div className="flex flex-col gap-5 pb-4 lg:gap-0 lg:h-[33.75rem] lg:w-[26.25rem] lg:px-17 lg:py-11">
        <div className="flex flex-col gap-3 mb-8">
          <h5 className="text-base font-normal text-[#7AD1FF] uppercase">
            Harvest Mission <br /> Community Church
          </h5>
        </div>
        <div className="text-4xl font-bold leading-tighter text-Neutral-50 lg:mb-8 ">
          <h1 className="mb-0">
            Join us on <br /> Sunday
          </h1>
        </div>
        <h3 className="font-bold text-2xl text-Secondary-700 lg:mb-8">10 AM</h3>
        <div className="flex flex-col gap-1 lg:gap-2 lg:mb-4">
          <h5 className="font-medium text-lg text-Neutral-50">
            Transformation Center
          </h5>
          <h3 className="font-medium text-2xl text-Secondary-700">
            1001 E Huron St, <br /> Ann Arbor, MI 48104
          </h3>
        </div>
        <div className="flex justify-center w-auto">
          <SecondaryButtonLink
            hasArrow={true}
            className={"bg-Shades-0"}
            href="https://www.google.com/maps/place/Harvest+Mission+Community+Church/@42.2816338,-83.7372209,17z/data=!4m5!3m4!1s0x883cae6a77eef201:0xaf4019d9fc7aec8e!8m2!3d42.2816359!4d-83.7371982?hl=en&shorturl=1"
          >
            MAPS & DIRECTIONS
          </SecondaryButtonLink>
        </div>
      </div>
      <div className="lg:w-[47.5rem] py-2">
        <div className="lg:w-[47rem] h-full lg:overflow-hidden rounded-tr-2xl rounded-br-2xl">
          <StaticImage
            src="../../images/connect-map-parking.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MapDetails;
