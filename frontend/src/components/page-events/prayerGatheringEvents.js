import * as React from "react";

const PrayerGatheringEvents = () => {
  return (
    <div className="bg-Neutral-200 w-full justify-center flex flex-col items-center px-6 sm:px-2 py-[40px]">
      <div className="flex-col justify-start items-center gap-y-2 flex mt-2">
        <div className="subheading">PRAYER GATHERINGS</div>
        <div className="text-black text-center text-3xl sm:text-4xl font-semibold leading-10">
          BY PRAYING, WE LEARN TO PRAY.
        </div>
      </div>
      <div className="text-xl sm:text-base sm:w-2/5 px-4 pt-4 text-center text-black font-normal leading-normal">
        “The harvest is plentiful, but the laborers are few; therefore PRAY
        earnestly to the Lord of the harvest to send out laborers into his
        harvest.” -Matthew 9:37b-38
        <br />
        <br />
        Join us for a church-wide Prayer Gathering at our Transformation Center!
      </div>

      <div className="mt-8 sm:mt-4 max-w-[32.5rem] sm:px-[3.625rem] py-6 mb-4 bg-Shades-0 bg-opacity-80 rounded-2xl border-2 border-cyan-700 justify-center gap-1 sm:gap-2">
        <div className="w-full px-8 sm:px-0 sm:max-w-96 text-center mx-auto text-black text-2xl sm:text-xl font-medium">
          We meet once a month on <span className="font-bold">Thursday</span>{" "}
          from <span className="font-bold">7-9 pm</span> at the{" "}
          <span className="font-bold">T-center</span>.
        </div>
        <div className="w-full px-8 sm:px-0 sm:max-w-96 text-center mx-auto text-black text-xl sm:text-base font-normal leading-normal pt-[1.625rem]">
          *Look out for event updates for exact dates.
        </div>
      </div>
    </div>
  );
};

export default PrayerGatheringEvents;
