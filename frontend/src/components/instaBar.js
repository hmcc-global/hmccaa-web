import * as React from "react";
import { InstaIcon } from "./svgs";
import Link from "./Link";

const Instagram = () => (
  <div className="bg-Shades-100 py-5 w-full">
    <Link
      href="https://www.instagram.com/hmcc_aa/"
      className="flex place-content-center gap-x-3 no-underline"
    >
      <div>
        <InstaIcon className="w-5 h-5 lg:w-10 lg:h-10" />
      </div>
      <h3 className="text-Shades-0 font-medium text-sm lg:text-2xl font-inter leading-relaxed">
        Follow us on Instagram <span className="underline">@HMCC_AA</span>
      </h3>
    </Link>
  </div>
);

export default Instagram;
