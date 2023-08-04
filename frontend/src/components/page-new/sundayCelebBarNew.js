import * as React from "react";
import { SecondaryButtonLink } from "../Button";

const SundayCelebBarNew = () => {
  return (
    <div className="bg-Neutral-200 w-full flex justify-center items-center py-[60px] px-[130px]">
      <div className="flex bg-Neutral-1000 items-center h-full border-solid border-2 max-w-container rounded-xl py-16 pl-16 pr-32 border-Neutral-700 justify-between space-x-28">
        <div className="flex gap-x-20 place-items-center text-center">
          <h1 className="text-[48px] font-semibold">Sunday celebration</h1>
          <div>
            <h3 className="font-medium text-[20px] w-44">Sunday Mornings</h3>
            <h2 className="text-[32px] font-bold pb-[20px]">10 AM ET</h2>
            <div className="w-36">
              <SecondaryButtonLink hasArrow={true}>
              more info
            </SecondaryButtonLink>
            </div>
            
          </div>
          <div>
            <h3 className="text-[20px] font-medium">Transformation Center</h3>
            <h2 className="text-[32px] font-bold">
              1001 E Huron St, Ann Arbor, MI 48104
            </h2>
            <h4 className="text-[11px]">*Unless otherwise stated in the Events page.</h4>
          </div>
        </div>

        {/* <div className="flex flex-col">
          <p className="text-lg">
            This form is for people connected to Harvest Mission Community
            Church of Ann Arbor to be able to submit questions, concerns,
            issues, or suggestions to the pastors and elders.
          </p>
          <p className="text-lg">
            Please note: the name and email questions are optional, but if forms
            are submitted anonymously, it may be more difficult to follow up on
            some types of concerns.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default SundayCelebBarNew;
