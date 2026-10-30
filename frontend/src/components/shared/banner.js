import * as React from "react";

const Banner = ({ children, bgImage, bgImageUrl, headingClassName = "" }) => (
  <div
    className={`section-band bg-cover ${bgImage}`}
    style={bgImageUrl ? { backgroundImage: `url(${bgImageUrl})` } : {}}
  >
    {/* CMS-uploaded photos keep the dark overlay so the title stays readable */}
    <div
      className={`flex flex-col items-center justify-center min-h-[6.25rem] lg:min-h-[10rem] w-full ${
        bgImageUrl ? "bg-[rgba(6,_20,_51,_0.8)]" : ""
      }`}
    >
      <h1
        className={`uppercase max-w-container px-4 md:px-24 text-xl lg:text-5xl font-bold leading-tighter tracking-medium-wide mb-0 text-Shades-0 ${headingClassName}`}
      >
        {children}
      </h1>
    </div>
  </div>
);

export default Banner;
