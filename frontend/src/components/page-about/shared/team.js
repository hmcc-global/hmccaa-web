import * as React from "react";

const Team = ({
  children,
  className = "max-w-[36rem] lg:max-w-none gap-x-4 lg:gap-x-5",
}) => (
  <div
    className={`grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-20 ${className}`}
  >
    {children}
  </div>
);

export default Team;
