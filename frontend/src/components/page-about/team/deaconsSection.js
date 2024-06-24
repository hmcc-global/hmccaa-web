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
import imgPhiBang from "../../../images/team-deacon-phi-bang.png";
import imgDannyBang from "../../../images/team-deacon-danny-bang.png";
import TeamCard from "../shared/teamCard";

const DeaconsSection = () => {
  const deaconInfo = [
    {
      img: imgBryanLiu,
      name: "Bryan Liu",
      email: "bryan.liu@annarbor.hmcc.net",
      ministries: ["Operations"],
    },
    {
      img: imgDannyBang,
      name: "Danny Bang",
      email: "danny.bang@annarbor.hmcc.net",
      ministries: ["Building Blocks (Children)"],
    },
    {
      img: imgDennisKim,
      name: "Dennis Kim",
      email: "dennis.kim@annarbor.hmcc.net",
      ministries: ["Access (Undergraduate Students)"],
    },
    {
      img: imgEricaYang,
      name: "Erica Yang",
      email: "erica.yang@hmcc.net",
      ministries: ["Access (Undergraduate Students)"],
    },
    {
      img: imgGinaDahlem,
      name: "Gina Dahlem",
      email: "gina.dahlem@hmcc.net",
      ministries: ["Covenant (Married)", "Latitude & Velocity (Youth)"],
    },
    {
      img: imgKristinZheng,
      name: "Kristin Zheng",
      email: "kristin.zheng@annarbor.hmcc.net",
      ministries: ["Covenant (Married)", "Operations"],
    },
    {
      img: imgMieshaWhite,
      name: "Miesha White",
      email: "miesha.white@annarbor.hmcc.net",
      ministries: ["Focus"],
    },
    {
      img: imgNateJacobson,
      name: "Nate Jacobson",
      email: "nate.jacobson@annarbor.hmcc.net",
      ministries: ["Outreach"],
    },
    {
      img: imgSarahYon,
      name: "Sarah Yon",
      email: "sarah.yon@annarbor.hmcc.net",
      ministries: ["Covenant (Married)"],
    },
    {
      img: imgPhiBang,
      name: "Phi Bang",
      email: "phi.bang@annarbor.hmcc.net",
      ministries: ["Building Blocks (Children)"],
    },
    {
      img: imgSolomonZheng,
      name: "Solomon Zheng",
      email: "solomon.zheng@annarbor.hmcc.net",
      ministries: ["Covenant (Married)", "Operations"],
    },
    {
      img: imgTiffanyKim,
      name: "Tiffany Kim",
      email: "tiffany.kim@annarbor.hmcc.net",
      ministries: ["Access (Undergraduate Students)"],
    },
  ];

  return (
    <div className="w-full flex flex-col items-center lg:items-start gap-y-5 lg:gap-y-[3.75rem] pt-[1.625rem] pb-[0.125rem] lg:py-0">
      <TeamHeading title="Meet Our Deacons"></TeamHeading>
      <Team className="max-w-[36.25rem] lg:max-w-none gap-x-5">
        {deaconInfo.map((item, index) => (
          <TeamCard
            info={item}
            key={`team-deacon-${index + 1}`}
            customClassName={{
              container: "",
              h3: "text-lg lg:text-xl",
            }}
          />
        ))}
      </Team>
    </div>
  );
};

export default DeaconsSection;
