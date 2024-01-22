import * as React from "react";
import { PrimaryButtonLink } from "../Button";
import { mediaWrapper, mediaContent } from "../../css/media.module.css";

const LiveStream = () => {
  return (
    <div className="bg-Neutral-200  w-full flex justify-center py-7 lg:py-15 px-4 mt-[2.5px] lg:mt-0">
      <div className="flex flex-col lg:flex-row max-w-container w-full gap-x-[7.5rem] items-center gap-y-5">
        <div className="lg:order-1 w-full lg:w-[49.1526%] max-w-[36.25rem]">
          <div className={`${mediaWrapper} pb-[3.364%]`}>
            <div>
              <div className={mediaContent}></div>
            </div>
          </div>
        </div>
        <div className="lg:w-[40.678%] text-center lg:text-left">
          <div className="subheading">Live Stream</div>
          <h2 className="pb-5">Celebrate With Us Virtually!</h2>
          <p className="mb-5 text-base lg:text-lg">
            We meet every Sunday at 10 am at the T-center. Please join us in
            person, but if you cannot, come worship with us through our live
            stream!
          </p>
          <div className="flex justify-center lg:justify-start">
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
