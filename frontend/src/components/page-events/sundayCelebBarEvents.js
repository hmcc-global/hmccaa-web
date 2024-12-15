import * as React from "react";
import { shortHand, hyphen } from "../../css/celebrationBarEvent.module.css";

const SundayCelebBarEvents = () => {
  return (
    <div className="bg-Neutral-200 w-full flex justify-center items-center py-[17px] lg:py-[30px] px-4 lg:px-[32px] xl:px-[65px] 2xl:px-[130px] lg:mt-0 mt-[3px]">
      <div className="flex flex-col bg-Shades-0 items-center h-full border-solid border-2 max-w-container rounded-xl py-10 lg:py-9 px-3 lg:px-14 2xl:px-24 border-Neutral-700 space-x-28">
        <div className="flex flex-col lg:flex-row gap-y-3 gap-x-10 place-items-center w-full justify-around">
          <h2 className="text-2xl font-bold lg:font-semibold flex-col flex xl:flex-row xl:gap-x-2 items-center">
            <span className="flex gap-x-4 text-center">
              <span>SUNDAY CELEBRATION</span>
              <span>|</span>
              <span>10 AM</span>
              <span>|</span>
              <span>
                <span className={shortHand}>Transformation</span>{" "}
                <span className={hyphen}>Center</span>{" "}
              </span>
              <div className="flex items-center">
                <h3 className="text-[14px] text-center normal-case">
                  *Unless otherwise listed below
                </h3>
              </div>
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SundayCelebBarEvents;
