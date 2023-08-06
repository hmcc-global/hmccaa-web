import * as React from "react";
import imgPeteDahlem from "../../../images/about-elders-pete-dahlem.png";
import imgJoshYang from "../../../images/about-elders-josh-yang.png";
import imgDaveYon from "../../../images/about-elders-dave-yon.png";
import imgSeongPark from "../../../images/about-elders-seong-park.png";
import { SecondaryButtonLink } from "../../Button";

const LeadershipSection = () => {
  const elderInfo = [
    {
      img: imgPeteDahlem,
      name: "Rev. Pete Dahlem",
      role: "Lead Pastor",
    },
    {
      img: imgJoshYang,
      name: "Josh Yang",
      role: "Associate Pastor",
    },
    {
      img: imgDaveYon,
      name: "Dave Yon",
      role: "Elder",
    },
    {
      img: imgSeongPark,
      name: "Seong Park",
      role: "Elder",
    },
  ];

  const elderCards = elderInfo.map((info, index) => (
    <div
      key={`e-card-${index + 1}`}
      className="flex flex-col items-center flex-[0_0_calc(50%-0.5rem)] lg:flex-auto"
    >
      <div>
        <img className="mb-3" src={info.img} alt={info.name} />
        <h3 className="font-bold text-lg lg:text-2xl leading-tighter mb-2 w-full">
          {info.name}
        </h3>
        <div className="w-full">{info.role}</div>
      </div>
    </div>
  ));

  return (
    <div className="pt-4 lg:pt-16 pb-[2.5625rem] lg:pb-20.25 flex flex-col items-center px-4">
      <div className="text-center pb-14.5">
        <div className="subheading">Our Leadership</div>
        <h2>Meet Our Elders</h2>
      </div>
      <div className="flex justify-center gap-x-4 gap-y-5 lg:gap-5 pb-10 flex-wrap lg:flex-nowrap">
        {elderCards}
      </div>
      <div className="flex">
        <SecondaryButtonLink
          to={"/about/our-team"}
          hasArrow={true}
          customClassName={{ textContainer: "-indent-[8.8rem] sm:indent-0" }}
        >
          More About Our Elders and Deacons
        </SecondaryButtonLink>
      </div>
    </div>
  );
};

export default LeadershipSection;
