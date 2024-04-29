import * as React from "react";

import { SecondaryButtonLink } from "../Button";

const LifeAcronym = [
  {
    word: "Love",
  },
  {
    word: "Investment",
  },
  {
    word: "Faith",
  },
  {
    word: "Enjoyment",
  },
].map(text => {
  const [first, ...rest] = text.word.split("");
  return { ...text, word: [first, rest.join("")] };
});

const Life = () => (
  <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:justify-between pb-10 md:pb-[8.4375rem] gap-y-5">
    <div className="md:w-[40.679%] flex flex-col gap-y-[1.542rem]">
      <h3 className="text-xl font-medium leading-tighter">
        The L.I.F.E in LIFE Group stands for:
      </h3>
      <div>
        {LifeAcronym.map((item, index) => (
          <span key={`Life-${index}`} className="flex flex-col text-left">
            <div className="flex items-end">
              {item.word.map((textItem, index) =>
                index === 0 ? (
                  <span
                    key={`word-${textItem.toLowerCase()}`}
                    className="text-3xl font-bold leading-tighter"
                  >
                    {textItem}
                  </span>
                ) : (
                  <span
                    key={`word-${textItem.toLowerCase()}`}
                    className="text-xl font-medium pb-[1px]"
                  >
                    {textItem}
                  </span>
                )
              )}
            </div>
          </span>
        ))}
      </div>
    </div>
    <div className="md:w-[49.153%] flex flex-col px-2 py-6 justify-center gap-y-[3px] text-center rounded-2xl border-2 border-solid border-Neutral-600">
      <p>
        If you are new to our church, there is no better way to get a taste of
        who we are and what we believe in then to check out one of our LIFE
        Groups. Don’t miss out this opportunity to experience the life-changing
        power of Biblical community.
      </p>
      <div className="flex justify-center">
        <SecondaryButtonLink
          href="https://docs.google.com/forms/d/e/1FAIpQLSeSKeuDEtmv9mQAmm603df8IW82Uq6g_kiIKp-QnsUdBNcZbQ/viewform"
          hasArrow={true}
        >
          CHECK OUT A LIFE GROUP
        </SecondaryButtonLink>
      </div>
    </div>
  </div>
);

export default Life;
