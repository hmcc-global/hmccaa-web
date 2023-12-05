import * as React from "react";

const MapDetails = () => {
  return (
    <div className="px-17 py-5 h-60 bg-Neutral-200">
      <div className="w-[14.25rem] h-[12.6875] gap-5 flex flex-col justify-center items-center text-center">
        <p className="w-[8.125rem] h-[2.8125rem] text-lg font-medium leading-tighter mb-0">
          Sunday Mornings <br />{" "}
          <span className="font-bold text-xl">10 AM</span>
        </p>
        <div className="gap-1">
          <p className="mb-0">
            <span className="font-medium text-lg">Transformation Center</span>
            <br />{" "}
            <span className="font-bold text-xl">
              1001 E Huron St, <br /> Ann Arbor, MI 48104
            </span>
          </p>
          <div className="pt-3 pb-3 pl-5 pr-5 text-Accent-500 underline font-bold leading-6 text-lg tracking-medium-wide">
            MAPS & DIRECTIONS
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapDetails;
