import * as React from "react";
import prayerGatheringImg from "../../images/prayer-gathering.png";
import mapPinLogo from "../../images/icons/map-pin.svg";

const Card = ({ type, date, name, location, description }) => {
  return (
    <div className="flex flex-col items-center gap-2 max-w-[9.75rem] max-h-[12.5rem] pb-[2.19rem] lg:max-w-[23.75rem] mx-auto rounded-xl border border-solid border-b-Neutral-900 shadow-md overflow-hidden">
      <img
        className="h-[6.15788rem] w-[10.94738rem] flex-shrink-0 mb-0 md:h-full md:w-48"
        src={prayerGatheringImg}
        alt="Prayer Gathering"
      />
      <div className="flex flex-col gap-1 items-start max-w-[8.75rem] max-h-[3.63rem]">
        <div className="text-[0.625rem] leading-[0.9375rem] text-black font-medium tracking-[0.0375rem]">
          Th, May 25, 2023
        </div>
        <div className="text-lg leading-[1.25rem] font-semibold text-black">
          Prayer Gathering
        </div>
        <div className="flex items-center gap-1">
          <img className="w-4 h-4 mb-0" src={mapPinLogo} alt="Map" />
          <div className="text-black text-[0.625rem] leading-[0.9375rem] font-medium tracking-[0.0375rem]">
            T-Center
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
