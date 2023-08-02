import * as React from "react";

const SundayCelebBar = () => {
  return (
    <div className="bg-Neutral-200 w-full flex justify-center items-center py-[30px] px-[130px]">
      <div className="bg-Shades-0 items-center h-full border-solid border-2 max-w-container rounded-xl py-9 px-24 border-Neutral-700 justify-between space-x-28">
        <div className="flex gap-x-10 place-items-center">
          <h2 className="text-[24px] font-semibold">
            SUNDAY CELEBRATION @<span className="font-bold">10 AM</span> @
            <span className="font-bold">Transformation Center </span>
          </h2>
          <h3 className="text-[14px]">*Unless otherwise listed below</h3>
        </div>
      </div>
    </div>
  );
};

export default SundayCelebBar;
