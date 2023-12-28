import * as React from "react";

const Banner = ({ children, bgImage }) => (
  <div className={`w-screen bg-cover ${bgImage}`}>
    <div className="flex flex-col items-center justify-center min-h-[6.25rem] lg:min-h-[17.5rem] w-full bg-[rgba(6,_20,_51,_0.8)]">
      <h1 className="uppercase text-xl lg:text-5xl font-bold leading-tighter tracking-medium-wide mb-0 text-Shades-0">
        {children}
      </h1>
    </div>
  </div>
);

export default Banner;
