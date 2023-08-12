import * as React from "react";

const Team = ({ children, className = "" }) => (
  <div className={`flex justify-between gap-x-5 gap-y-20 ${className}`}>
    {children}
  </div>
);

export default Team;
