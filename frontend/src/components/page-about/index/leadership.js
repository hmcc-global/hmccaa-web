import * as React from "react";
import imgPeteDahlem from "../../../images/about-elders-pete-dahlem.png";
import imgJoshYang from "../../../images/about-elders-josh-yang.png";
import imgDaveYon from "../../../images/about-elders-dave-yon.png";
import imgSeongPark from "../../../images/about-elders-seong-park.png";
<<<<<<< HEAD
import {SecondaryButtonLink} from "../../Button";


=======
import { ButtonLink } from "../../Button";
>>>>>>> 915aa57 (adding format files)

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
    <div key={index} className="flex flex-col items-start">
      <img className="mb-3" src={info.img} alt={info.name} />
      <h3 className="font-bold text-2xl leading-tighter mb-3">{info.name}</h3>
      <div>{info.role}</div>
    </div>
  ));

  return (
    <div className="pb-20.25 flex flex-col items-center">
      <div className="text-center pb-11.25">
        <div className="subheading">Our Leadership</div>
        <h2>Meet Our Elders</h2>
      </div>
    <div className="flex justify-center gap-4 pb-11.25">
      {elderCards}
    </div>
    <div className="flex">
      <SecondaryButtonLink to={"/about/our-team"} hasArrow={true}>More About Our Elders and Deacons</SecondaryButtonLink>
    </div>
  </div>
  );
};

export default LeadershipSection;
