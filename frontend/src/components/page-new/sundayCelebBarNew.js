import * as React from "react";
import { SecondaryButtonLink } from "../Button";

const SundayCelebBarNew = () => {
  return (
    <div className="bg-Neutral-200 w-full flex justify-center items-center pt-[28px] pb-[27px]  px-4 lg:py-[60px] lg:px-[65px] xl:px-[130px]">
      <div className="flex bg-Neutral-1000 items-center h-full border-solid border-2 max-w-container rounded-xl pt-[26px] pb-[37px] lg:py-16 px-6 lg:px-8 xl:px-16 2xl:pl-16 2xl:pr-32 border-Neutral-700 justify-between space-x-28">
        <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-x-10 2xl:gap-x-20 text-center">
          <h2 className="flex text-2xl lg:text-5xl font-semibold text-centr lg:text-left items-center">
            Sunday celebration
          </h2>
          <div className="whitespace-nowrap">
            <h3 className="font-medium text-base lg:text-xl">
              Sunday Mornings
            </h3>
            <h2 className="leading-normal lg:leading-tighter text-xl lg:text-3xl font-bold pb-6 lg:pb-5 lg:pt-[5px]">
              10 AM ET
            </h2>
            <div className="flex justify-center">
              <SecondaryButtonLink>more info</SecondaryButtonLink>
            </div>
          </div>
          <div>
            <h3 className="text-base lg:text-xl font-medium">
              Transformation Center
            </h3>
            <h2 className="leading-normal lg:leading-tighter text-xl lg:text-2xl font-bold lg:pt-[8px]">
              1001 E Huron St,
            </h2>
            <h2 className="leading-normal lg:leading-tighter text-xl lg:text-2xl font-bold pb-5 whitespace-pre">
              Ann Arbor, MI 48104
            </h2>
            <h4 className="text-[11px]">
              *Unless otherwise stated in the Events page.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SundayCelebBarNew;
