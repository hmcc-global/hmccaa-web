import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

// static images used in array directly to get around static image not being able to handle dynamic src
const Acronym = [
  {
    text: "Love",
    image: (
      <StaticImage
        src="../../images/LifegroupLove.png"
        alt="Lifegroup love image"
      />
    ),
  },
  {
    text: "Investment",
    image: (
      <StaticImage
        src="../../images/LifegroupInvestment.png"
        alt="Lifegroup investment image"
      />
    ),
  },
  {
    text: "Faith",
    image: (
      <StaticImage
        src="../../images/LifegroupFaith.png"
        alt="Lifegroup faith image"
      />
    ),
  },
  {
    text: "Enjoyment",
    image: (
      <StaticImage
        src="../../images/LifegroupEnjoyment.png"
        alt="Lifegroup enjoyment image"
      />
    ),
  },
];

const Life = () => (
  <div className="flex lg:flex-row lg:flex-nowrap flex-wrap gap-6 pb-25 justify-center">
    {Acronym.map((item, index) => (
      <div key={index} className="flex flex-col">
        <p className="font-bold first-letter:text-4xl text-2xl text-center mb-0">
          {item.text}
        </p>
        <div className="max-w-[300px] self-center">{item.image}</div>
      </div>
    ))}
  </div>
);

export default Life;
