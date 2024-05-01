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
  <div className="flex flex-row">
    {Acronym.map((item, index) => (
      <div key={index}>
        <p>{item.text}</p>
        {item.image}
      </div>
    ))}
  </div>
);

export default Life;
