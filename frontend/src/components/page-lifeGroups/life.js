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
  <div className="py-[100px] flex gap-x-[20px]">
    {LifeAcronym.map((item, index) => (
      <span key={`Life-${index}`} className="flex flex-col">
        <div className="first-letter:text-[40px] first-letter:font-bold text-[24px] font-semibold text-center">
          {item.word}
        </div>
        <img src={item.image}></img>
      </span>
    ))}
  </div>
);

export default Life;
