import * as React from "react";
import { SecondaryButtonLink } from "../Button";
import {
  containerLg,
  timeLg,
  buttonLg,
  titleLg,
  locationLg,
} from "./sunday-celebration.module.css";

const SundayCelebrationSection = () => {
  return (
    <div className="bg-Neutral-200 w-full flex justify-center items-center p-6 lg:py-16">
      <div
        className={`flex flex-col bg-Shades-0 items-center h-full border-solid border-2 max-w-container rounded-xl py-6 px-6 border-Neutral-700 lg:px-16 lg:py-10 ${containerLg}`}
      >
        <div className={`flex justify-evenly pb-5 lg:pb-0 ${titleLg}`}>
          <h2 className="text-center text-2xl lg:text-left lg:text-5xl">
            Sunday Celebration
          </h2>
        </div>
        <div className={`text-center pb-5 lg:pb-0 ${timeLg} lg:text-[20px]`}>
          Sunday Mornings
          <h2 className="text-[20px] lg:text-[32px] font-bold">10 AM ET</h2>
        </div>
        <div className={`text-center pb-5 lg:text-[20px] ${locationLg}`}>
          Transformation Center
          <h3 className="text-[20px] lg:text-[24px] font-bold">
            1001 E Huron St.
          </h3>
          <h3 className="text-[20px] lg:text-[24px] font-bold pb-5">
            Ann Arbor, MI 48104
          </h3>
          <div className="text-[11px]">
            *Unless otherwise stated in Events page.
          </div>
        </div>
        <div className={`flex justify-center ${buttonLg}`}>
          <SecondaryButtonLink to="/connect">More Info</SecondaryButtonLink>
        </div>
      </div>
    </div>
  );
};

export default SundayCelebrationSection;
