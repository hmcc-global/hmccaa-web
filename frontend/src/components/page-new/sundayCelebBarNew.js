import * as React from "react";
import { SecondaryButtonLink } from "../Button";

const SundayCelebBarNew = () => {
  return (
    <div className="bg-Neutral-200 w-full flex justify-center items-center pt-[28px] pb-[27px]  px-4 lg:py-[60px] lg:px-[65px] xl:px-[130px]">
      <div className="flex bg-Neutral-1000 items-center h-full border-solid border-2 max-w-container rounded-xl pt-[26px] pb-[37px] lg:py-16 px-6 lg:px-8 xl:px-16 2xl:pl-16 2xl:pr-32 border-Neutral-700 justify-between space-x-28">
        <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-x-5 xl:gap-x-10 2xl:gap-x-[6.0625rem] text-center">
          <h2 className="text-2xl lg:text-5xl font-semibold text-centr lg:text-left  lg:max-w-[22.5rem] 2xl:max-w-[25rem] lg:tracking-medium-wide flex items-center">
            Sunday celebration
          </h2>
          <div className="lg:grid lg:grid-cols-2   xl:gap-x-5 2xl:gap-x-[2.5625rem]">
            <div className="flex flex-col gap-y-1 lg:max-w-[10.125rem]">
              <h3 className="font-medium text-base lg:text-xl">
                Sunday Mornings
              </h3>
              <h2 className="leading-normal lg:leading-tighter text-xl lg:text-3xl font-bold pb-4 lg:pb-5">
                10 AM ET
              </h2>
            </div>
            <div className="lg:row-span-2 flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-1">
                <h3 className="text-base lg:text-xl font-medium">
                  Transformation Center
                </h3>
                <h2 className="leading-normal lg:leading-tighter text-xl lg:text-2xl font-bol normal-case">
                  <div>1001 E Huron St,</div>
                  <div>Ann Arbor, MI 48104</div>
                </h2>
              </div>
              <h4 className="text-[11px] font-medium">
                *Unless otherwise stated in the Events page.
              </h4>
            </div>
            <div className="lg:max-w-[10.125rem] lg:pt-0 pt-5">
              <div className="flex justify-center">
                <SecondaryButtonLink>more info</SecondaryButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SundayCelebBarNew;
