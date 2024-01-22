import * as React from "react";
import tempLIFEimg from "../../images/Frame 406.png";

const LifeAcronym = [
  {
    word: "Love",
    image: tempLIFEimg,
  },
  {
    word: "Investment",
    image: tempLIFEimg,
  },
  {
    word: "Faith",
    image: tempLIFEimg,
  },
  {
    word: "Enjoyment",
    image: tempLIFEimg,
  },
];

const Life = () => (
  <div className="pt-[2.375rem] pb-[5.75rem] md:py-[100px] grid grid-cols-2 md:grid-cols-4 gap-y-8  gap-x-4 md:gap-x-5">
    {LifeAcronym.map((item, index) => (
      <span key={`Life-${index}`} className="flex flex-col">
        <div className="first-letter:text-[40px] first-letter:font-bold text-[24px] font-semibold text-center">
          {item.word}
        </div>
        <div className="w-full pb-[64.29%] bg-[#5E5E5E]"></div>
      </span>
    ))}
  </div>
);

export default Life;
