import * as React from "react";
import { shortHand, hyphen } from "../../css/celebrationBarEvent.module.css";

const SundayCelebBarEvents = () => {
  return (
    <div className="bg-Neutral-200 w-full flex justify-center items-center py-[17px] lg:py-[30px] px-4  lg:px-[32px] xl:px-[65px] 2xl:px-[130px] lg:mt-0 mt-[3px]">
      <div className="bg-Shades-0 items-center h-full border-solid border-2 max-w-container rounded-xl pt-[26px] pb-[17px] lg:py-9 px-[14px] lg:px-8 2xl:px-24 border-Neutral-700 space-x-28">
        <div className="flex flex-col lg:flex-row gap-y-3 gap-x-10 place-items-center w-full justify-between">
          <h2 className="text-2xl font-bold lg:font-semibold flex-col flex xl:flex-row xl:gap-x-2 items-center">
            <span className="text-center">
              <span>SUNDAY CELEBRATION</span>
            </span>
            <span className="flex gap-x-2">
              <span>
                @<span className="font-bold">10 AM</span>
              </span>
              <span className="flex">
                @
                <span className="font-bold flex lg:gap-x-[6px]">
                  <span className={shortHand}>Transformation</span>{" "}
                  <span className={hyphen}>Center</span>{" "}
                </span>
              </span>
            </span>
          </h2>
          <h3 className="text-[14px]">*Unless otherwise listed below</h3>
        </div>
      </div>
    </div>
  );
};

export default SundayCelebBarEvents;
