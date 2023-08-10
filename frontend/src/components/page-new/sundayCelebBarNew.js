import * as React from "react";
import { SecondaryButtonLink } from "../Button";

const SundayCelebBarNew = () => {
  return (
    <div className="bg-Neutral-200 w-full flex justify-center items-center py-[60px] px-[130px]">
      <div className="flex bg-Neutral-1000 items-center h-full border-solid border-2 max-w-container rounded-xl py-16 pl-16 pr-32 border-Neutral-700 justify-between space-x-28">
        <div className="flex gap-x-20 text-center">
          <h2 className="flex text-[48px] font-semibold text-left items-center">
            Sunday celebration
          </h2>
          <div className="whitespace-nowrap">
            <h3 className="font-medium text-[20px]">Sunday Mornings</h3>
            <h2 className="text-[32px] font-bold pb-[20px] pt-[5px]">
              10 AM ET
            </h2>
            <div className="flex justify-center">
              <SecondaryButtonLink>more info</SecondaryButtonLink>
            </div>
          </div>
          <div>
            <h3 className="text-[20px] font-medium">Transformation Center</h3>
            <h2 className="text-[24px] font-bold pt-[8px]">1001 E Huron St,</h2>
            <h2 className="text-[24px] font-bold pb-[20px] whitespace-pre">
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
