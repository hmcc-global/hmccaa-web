import * as React from "react";

const Card = ({ img, date, title, children }) => {
  return (
    <div className="flex flex-col items-center gap-2 w-[9.75rem] h-[12.5rem] pb-[2.19rem] mx-auto rounded-xl border border-solid border-b-Neutral-900 shadow-md overflow-hidden md:w-[23.75rem] md:h-[30rem] md:pb-[3.13rem] md:gap-5">
      <StaticImage
        className="h-[6.15788rem] w-[10.94738rem] flex-shrink-0 mb-0 md:h-60 md:w-[26.66669rem]"
        src={img}
        alt="Background" />
      />
      <div className="flex flex-col gap-1 items-start w-[8.75rem] md:gap-3 md:w-[20rem]">
        <p className="mb-0 text-[0.625rem] leading-[0.9375rem] text-black font-medium tracking-[0.0375rem] md:text-base md:leading-[1.3125rem] md:tracking-[0.0525rem]">
          {date}
        </p>
        <h3 className="text-lg leading-[1.25rem] font-semibold text-black md:leading-[1.8rem] md:text-2xl">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
};

export default Card;
