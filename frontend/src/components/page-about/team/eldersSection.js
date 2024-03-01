import React from "react";
import Team from "../shared/team";
import TeamCard from "../shared/teamCard";
import { TeamHeading } from "./heading";
import imgPeteDahlem from "../../../images/about-elders-pete-dahlem.png";
import imgJoshYang from "../../../images/about-elders-josh-yang.png";
import imgDaveYon from "../../../images/about-elders-dave-yon.png";
import imgSeongPark from "../../../images/about-elders-seong-park.png";

export const elderInfo = [
  {
    img: imgPeteDahlem,
    name: "Rev. Pete Dahlem",
    role: "Lead Pastor",
    email: "pete.dahlem@hmcc.net",
    emailIcon: true,
    description: "data",
  },
  {
    img: imgJoshYang,
    name: "Joshua Yang",
    role: "Associate Pastor",
    email: "joshua.yang@hmcc.net",
    emailIcon: true,
    description:
      "Pastor Josh joined the HMCC family in 2006 as a freshman at Northwestern University, where HMCC planted its first church plant. It was here that God grew Pastor Josh’s heart for the local church as he served as a coordinator, LIFE group leader, and worship leader, and in 2011, Pastor Josh first received his calling to pastoral ministry. In 2015, Pastor Josh moved to Ann Arbor and joined the HMCC of Ann Arbor staff as an assistant pastor in 2017. He has a passion to see people fully understand God’s love for them, and to experience Him deeply. In August 2021, Pastor Josh married his wife Erica, with whom he shares a love for Christ, coffee, and the local church (not necessarily in that order).",
    responsibility: "#Access (Undergraduate Student)",
  },
  {
    img: imgDaveYon,
    name: "Dave Yon",
    role: "Elder",
    email: "dave.yon@annarbor.hmcc.net",
    emailIcon: true,
    description: "simple data",
  },
  {
    img: imgSeongPark,
    name: "Seong Park",
    role: "Elder",
    email: "seongwpark@annarbor.hmcc.net",
    emailIcon: true,
    description: "last data",
  },
];

const EldersSection = () => {
  return (
    <div className="w-full flex flex-col items-center lg:items-start gap-y-[3.75rem] pt-[1.6875rem] pb-[1.125rem] lg:py-0">
      <TeamHeading title="Meet Our Elders">
        <p className="mb-0">
          Something about Elders... Lorem Ipsum... esus talks about living an
          abundant life. The vision of LIFE Group is: to experience the fullness
          of life in a Biblical community where the Gospel is radically lived
          out. LIFE Groups seek to accomplish this by sharing our lives with one
          another within various life stages.
        </p>
      </TeamHeading>
      <Team className="gap-x-4 lg:gap-x-5 lg:pb-[3.75rem]">
        {elderInfo.map((item, index) => (
          <TeamCard
            info={item}
            key={`team-elder-${index + 1}`}
            customClassName={{
              container: "gap-y-1",
              h3: "text-xl",
              role: "text-sm font-medium",
            }}
            showModal={true}
          />
        ))}
      </Team>
    </div>
  );
};

export default EldersSection;
