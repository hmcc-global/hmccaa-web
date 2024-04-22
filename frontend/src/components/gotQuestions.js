import * as React from "react";
import { MailIcon } from "./svgs";

const Questions = () => (
  <div className="pb-[1.125rem] pt-5 lg:py-15 max-w-container w-full">
    <div className="flex flex-col xl:flex-row gap-5 xl:gap-x-10 py-5 px-[0.875rem] items-center justify-center border-2 border-Neutral-600 rounded-xl">
      <div>
        <h2 className="text-2xl lg:text-5xl font-bold lg:font-semibold lg:tracking-medium-wide text-center sm:text-left">
          GOT ANY QUESTIONS?
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-y-1">
        <h3 className="text-base lg:text-lg">Shoot us an email at: </h3>
        <div className="flex">
          <span className="inline-flex items-center mr-1 ml-2">
            <MailIcon className="w-6 h-6" />
          </span>{" "}
          <h3 className="font-bold tracking-medium-wide">annarbor@hmcc.net</h3>
        </div>
      </div>
    </div>
  </div>
);

export default Questions;
