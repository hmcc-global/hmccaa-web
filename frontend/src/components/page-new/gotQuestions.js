import * as React from "react";
import { MailIcon } from "../svgs";

const Questions = () => (
  <div className="pt-14 pb-14">
    <div className="flex gap-x-10 pt-5 pb-5 pl-28 pr-28 place-items-center border-2 border-Neutral-600  rounded-xl">
      <div>
        <h2 className="text-5xl font-semibold">GOT ANY QUESTIONS?</h2>
      </div>
      <div className="flex items-center">
        <h3>Shoot us an email at: </h3>
        <span className="inline-flex items-center mr-1 ml-2">
          <MailIcon className="w-6 h-6" />
        </span>{" "}
        <h3 className="font-bold">annarbor@hmcc.net</h3>
      </div>
    </div>
  </div>
);

export default Questions;
