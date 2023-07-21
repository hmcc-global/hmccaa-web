import * as React from "react";
import prayerGatheringImg from "../../images/prayer-gathering.png";

const Card = ({ type, date, name, location, description }) => {
  return (
    <div className="flex flex-col items-center gap-2 max-w-[9.75rem] max-h-[10.3rem] lg:max-w-[23.75rem] mx-auto rounded-xl border border-solid border-b-Neutral-900 shadow-md overflow-hidden">
      <img
        className="h-24 w-full object-scale-down md:h-full md:w-48"
        src={prayerGatheringImg}
        alt="Prayer Gathering"
      />
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          Company retreats
        </div>
        <a
          href="#"
          className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
        >
          Incredible accommodation for your team
        </a>
        <p className="mt-2 text-slate-500">
          Looking to take your team away on a retreat to enjoy awesome food and
          take in some sunshine? We have a list of places to do just that.
        </p>
      </div>
    </div>
  );
};

export default Card;
