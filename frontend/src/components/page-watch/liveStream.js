import React, { useState } from "react";
import { PrimaryButtonLink } from "../Button";
import { mediaWrapper, mediaContent } from "../../css/media.module.css";
import { useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";

const MOBILE_SIZE = 768;
const handleMobile = () =>
  typeof window !== "undefined" && window.innerWidth < MOBILE_SIZE ? "m." : "";

const LiveStream = () => {
  const [mobile, setMobile] = useState(handleMobile());
  const handleResize = () => {
    setMobile(handleMobile());
  };

  useEffect(() => {
    window?.addEventListener("resize", handleResize);

    return function cleanup() {
      window?.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-Neutral-200  w-full flex flex-col items-center py-7 lg:py-15 px-4 lg:px-8 mt-[2.5px] lg:mt-0">
      <div className="flex flex-col lg:flex-row max-w-container w-full gap-x-15 gap-y-5">
        <div className="lg:order-1 w-full max-w-[36.25rem] image-container">
          <div className={`${mediaWrapper} pb-[3.364%]`}>
            <div>
              <div className={mediaContent}>
                <div>
                  <StaticImage
                    src="../../images/YouTube-watch.png"
                    alt="Watch Sermon Online"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-left content-container">
          <div className="subheading">Live Stream</div>
          <h2 className="pb-5">Celebrate With Us Virtually!</h2>
          <p className="mb-5 text-base lg:text-lg">
            We meet every Sunday at 10 am at the T-center. Please join us in
            person, but if you cannot, come worship with us through our live
            stream!
          </p>
          <div className="flex">
            <PrimaryButtonLink
              hasArrow={true}
              href={`https://${mobile}youtube.com/@hmcc_aa/streams`}
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
