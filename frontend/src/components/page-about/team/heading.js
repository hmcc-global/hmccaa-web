import * as React from "react";

const Heading = () => (
  <div className="max-w-[61.25rem] w-full flex flex-col lg:items-center gap-y-[2.25rem] lg:gap-y-[3.75rem]">
    <h1 className="font-semibold lg:font-bold leading-tighter text-2xl lg:text-4xl uppercase mb-0 tracking-normal">
      Our Team
    </h1>
    <div className="max-w-[42.5rem] pt-[1.125rem] pb-6 lg:py-0 text-base lg:text-lg lg:text-center">
      <p className="mb-0">
        At HMCC we desire to live out the Great Commission that Jesus commanded
        in Matthew 28. We know that empowering a church community to live out
        Christ’s mission includes Godly leaders to shepherd, guide, and support
        our members. To do so, our church follows the Biblical framework for
        elders and deacons laid out in the the book of Acts.
      </p>
    </div>
  </div>
);

const TeamHeading = ({ title, children }) => (
  <div className="w-full flex flex-col items-start gap-y-5 lg:gap-y-3 text-center lg:text-left">
    <h2 className="text-xl font-semibold lg:text-3xl lg:font-bold">{title}</h2>
    {children && <div className="text-base lg:text-lg">{children}</div>}
  </div>
);

export { Heading, TeamHeading };
