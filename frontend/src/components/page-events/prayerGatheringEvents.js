import * as React from "react";

const PrayerGatheringEvents = () => {
  return (
    <div className="bg-Neutral-200 w-full justify-center flex flex-col items-center px-6 sm:px-2 py-18">
      <div className="w-full xl:max-w-container sm:px-[3.625rem] mb-4 bg-Shades-0 bg-opacity-80 rounded-xl border-2 border-cyan-700 justify-center gap-1 sm:gap-2">
        <div className="flex-col justify-start items-center gap-y-2 flex py-20">
          <div className="subheading">PRAYER GATHERINGS</div>

          <div className="text-black text-center text-2xl lg:text-4xl font-semibold leading-10">
            BY PRAYING, WE LEARN TO PRAY.
          </div>
          <div className="w-full xl:max-w-screen-sm text-base p-4 text-center text-black font-normal leading-normal">
            “The harvest is plentiful, but the laborers are few; therefore PRAY
            earnestly to the Lord of the harvest to send out laborers into his
            harvest.” -Matthew 9:37b-38
            <br />
            <br />
          </div>

          <div className="w-full px-8 sm:px-0 max-w-screen-sm text-center mx-auto text-black text-xl xl:text-2xl font-medium">
            Join us for a church-wide{" "}
            <span className="font-bold">Prayer Gathering</span> once a month on{" "}
            <span className="font-bold">Thursday</span> from{" "}
            <span className="font-bold">7-9 pm</span> at the{" "}
            <span className="font-bold">T-center</span>.
          </div>
          <div className="w-full px-8 sm:px-0 max-w-screen-sm text-center mx-auto text-black text-sm lg:text-lg font-normal leading-normal pt-[1.625rem]">
            *Look out for event updates for exact dates.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerGatheringEvents;
