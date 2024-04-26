import * as React from "react";
import { TeamHeading } from "./heading";
import Team from "../shared/team";
import imgBryanLiu from "../../../images/team-deacon-bryan-liu.png";
import imgDennisKim from "../../../images/team-deacon-dennis-kim.png";
import imgEricaYang from "../../../images/team-deacon-erica-yang.png";
import imgGinaDahlem from "../../../images/team-deacon-gina-dahlem.png";
import imgKristinZheng from "../../../images/team-deacon-kristin-zheng.png";
import imgMieshaWhite from "../../../images/team-deacon-miesha-white.png";

import imgNateJacobson from "../../../images/team-deacon-nate-jacobson.png";
import imgSarahYon from "../../../images/team-deacon-sarah-yon.png";
import imgSolomonZheng from "../../../images/team-deacon-solomon-zheng.png";
import imgTiffanyKim from "../../../images/team-deacon-tiffany-kim.png";
import TeamCard from "../shared/teamCard";
const DeaconsSection = () => {
  const deaconInfo = [
    {
      img: imgBryanLiu,
      name: "Bryan Liu",
      role: "#Operations",
      email: "bryan.liu@annarbor.hmcc.net",
    },
    {
      img: imgDennisKim,
      name: "Dennis Kim",
      role: "#Access (UG)",
      email: "dennis.kim@annarbor.hmcc.net",
    },
    {
      img: imgEricaYang,
      name: "Erica Yang",
      role: "#Access (UG)",
      email: "erica.yang@hmcc.net",
    },
    {
      img: imgGinaDahlem,
      name: "Gina Dahlem",
      role: "#Covenant, Lat/Vel, BB",
      email: "gina.dahlem@hmcc.net",
    },
    {
      img: imgKristinZheng,
      name: "Kristin Zheng",
      role: "#Covenant, Operations",
      email: "kristin.zheng@annarbor.hmcc.net",
    },
    {
      img: imgMieshaWhite,
      name: "Miesha White",
      role: "#Focus",
      email: "miesha.white@annarbor.hmcc.net",
    },
    {
      img: imgNateJacobson,
      name: "Nate Jacobson",
      role: "Outreach",
      email: "nate.jacobson@annarbor.hmcc.net",
    },
    {
      img: imgSarahYon,
      name: "Sarah Yon",
      role: "#Covenant",
      email: "sarah.yon@annarbor.hmcc.net",
    },
    {
      img: imgSolomonZheng,
      name: "Solomon Zheng",
      role: "#Covenant",
      email: "solomon.zheng@annarbor.hmcc.net",
    },
    {
      img: imgTiffanyKim,
      name: "Tiffany Kim",
      role: "#Access (UG)",
      email: "tiffany.kim@annarbor.hmcc.net",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center lg:items-start gap-y-5 lg:gap-y-[3.75rem] pt-[1.625rem] pb-[0.125rem] lg:py-0">
      <TeamHeading title="Meet Our Deacons">
      </TeamHeading>
      <Team className="max-w-[36.25rem] lg:max-w-none gap-x-5">
        {deaconInfo.map((item, index) => (
          <TeamCard
            info={item}
            key={`team-deacon-${index + 1}`}
            customClassName={{
              container: "",
              h3: "text-lg lg:text-xl",
              role: "text-sm font-medium",
            }}
          />
        ))}
      </Team>
    </div>
  );
};

export default DeaconsSection;
