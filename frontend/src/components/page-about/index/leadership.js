import * as React from "react";
import imgPeteDahlem from "../../../images/about-elders-pete-dahlem.png";
import imgJoshYang from "../../../images/about-elders-josh-yang.png";
import imgDaveYon from "../../../images/about-elders-dave-yon.png";
import imgSeongPark from "../../../images/about-elders-seong-park.png";
import { SecondaryButtonLink } from "../../Button";
import TeamCard from "../shared/teamCard";
import Team from "../shared/team";

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
    <TeamCard
      key={`elder-${index + 1}`}
      info={info}
      customClassName={{ container: "gap-y-2", h3: "text-2xl leading-tighter" }}
    />
  ));

  return (
    <div className="py-10 lg:py-20 flex flex-col items-center max-w-container">
      <div className="text-center pb-14.5">
        <div className="subheading">Our Leadership</div>
        <h2>Meet Our Elders</h2>
      </div>
      <Team className="max-w-[36rem] lg:max-w-none gap-x-4 lg:gap-x-5 pb-11.25">
        {elderCards}
      </Team>
      <div className="flex">
        <SecondaryButtonLink
          to={"/about/our-team"}
          hasArrow={true}
          customClassName={{ textContainer: "-indent-[10rem] sm:indent-0" }}
        >
          More About Our Elders and Deacons
        </SecondaryButtonLink>
      </div>
    </div>
  );
};

export default LeadershipSection;
