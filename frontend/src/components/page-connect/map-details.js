import * as React from "react";

const MapDetails = () => {
  return (
    <div className="px-17 py-5 h-60 bg-Neutral-200">
      <div className="w-[14.25rem] h-[12.6875] gap-5 flex flex-col justify-center items-center text-center ">
        <p className=" font-raleway text-lg font-medium leading-5">
          Sunday Mornings 10 AM
        </p>
        <p className="w-[11.8125rem] h-[5.735rem]">
          <span className="font-medium text-lg">Transformation Center</span>
          <br />{" "}
          <span className="font-bold text-xl">
            1001 E Huron St, <br /> Ann Arbor, MI 48104
          </span>
        </p>
        <p>MAPS & DIRECTIONS</p>
      </div>
    </div>
  );
};

export default MapDetails;
