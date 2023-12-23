import * as React from "react";
import { InstaIcon } from "./svgs";

// could make entire bar clickable to link to ig page?
const Instagram = () => (
  <div className="bg-Shades-100 py-5 w-full">
    <div className="flex place-content-center gap-x-3">
      <div>
        <InstaIcon className="w-5 h-5 lg:w-10 lg:h-10" />
      </div>
      <h3 className="text-Shades-0 font-medium text-sm lg:text-2xl font-inter leading-relaxed">
        Follow us on Instagram @HMCC_AA
      </h3>
    </div>
  </div>
);

export default Instagram;
