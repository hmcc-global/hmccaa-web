import * as React from "react";
import { PrimaryButtonLink } from "../Button";
import { mediaWrapper, mediaContent } from "../../css/media.module.css";

const LiveStream = () => {
  return (
    <div className="bg-Neutral-200  w-full flex justify-center py-7 md:py-15 px-4 md:px-8 mt-[2.5px] md:mt-0">
      <div className="flex flex-col md:flex-row max-w-container w-full gap-x-15 items-center md:items-start gap-y-5">
        <div className="md:order-1 w-full max-w-[36.25rem] image-container">
          <div className={`${mediaWrapper} pb-[3.364%]`}>
            <div>
              <div className={mediaContent}></div>
            </div>
          </div>
        </div>
        <div className="text-center md:text-left content-container">
          <div className="subheading">Live Stream</div>
          <h2 className="pb-5">Celebrate With Us Virtually!</h2>
          <p className="mb-5 text-base md:text-lg">
            We meet every Sunday at 10 am at the T-center. Please join us in
            person, but if you cannot, come worship with us through our live
            stream!
          </p>
          <div className="flex justify-center md:justify-start">
            <PrimaryButtonLink
              hasArrow={true}
              href="https://www.youtube.com/@hmcc_aa/streams"
            >
              Watch Now
            </PrimaryButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStream;
