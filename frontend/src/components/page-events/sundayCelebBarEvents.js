import * as React from "react";

const SundayCelebBarEvents = () => {
  return (
    <div className="bg-Neutral-200 w-full flex justify-center items-center py-[17px] lg:py-[30px] px-4 lg:px-[32px] xl:px-[65px] 2xl:px-[130px] lg:mt-0 mt-[3px]">
      <div className="flex flex-col bg-Shades-0 items-center h-full border-solid border-2 lg:max-w-container rounded-xl py-4 lg:py-9 px-3 lg:px-14 2xl:px-24 border-Neutral-700 space-x-28 w-[328px] lg:w-auto">
        <div className="flex flex-col lg:flex-row gap-x-3 place-items-center w-full justify-around">
          <h2 className="text-2xl font-semibold">SUNDAY CELEBRATION</h2>
          <div className="flex items-center gap-x-3 text-2xl lg:font-semibold">
            <span>|</span>
            <span>10 AM</span>
            <span>|</span>
            <span className="hidden lg:inline">Transformation Center</span>
            <span className="lg:hidden">T-Center</span>
          </div>
          <h3 className="text-sm lg:text-base normal-case">
            *Unless otherwise listed below.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SundayCelebBarEvents;
