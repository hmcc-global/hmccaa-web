import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { SecondaryButtonLink } from "../Button";

const MapDetails = () => {
  return (
    <div className="flex flex-col gap-y-5 lg:gap-y-0 justify-center pt-5 lg:pt-0 bg-Primary-700 lg:flex-row lg:rounded-2xl max-w-[58.625rem] mx-auto">
      <div className="lg:px-[3.925rem] gap-5">
        <div className="flex flex-col justify-center items-center text-center lg:gap-8 lg:py-[4.75rem]">
          <h5 className="text-lg font-normal text-[#7AD1FF] uppercase">
            Harvest Mission <br /> Community Church
          </h5>
          <h1 className="text-4xl font-bold leading-tighter mb-0 text-Neutral-50">
            Join us on <br /> Sunday
          </h1>
          <h3 className="font-bold text-2xl text-Secondary-700">10 AM</h3>
          <div className="flex flex-col gap-1 lg:gap-5">
            <p className="mb-0">
              <span className="font-medium text-lg text-Neutral-50">
                Transformation Center
              </span>
              <br />{" "}
              <span className="font-bold text-xl text-Secondary-700">
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
      <div className="flex justify-center pb-2 lg:p-2">
        <StaticImage
          src="../../images/connect-map-parking.png"
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
};

export default MapDetails;
