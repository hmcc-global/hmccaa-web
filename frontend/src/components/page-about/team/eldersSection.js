import * as React from "react";
import Team from "../shared/team";
import TeamCard from "../shared/teamCard";
import { TeamHeading } from "./heading";
import imgPeteDahlem from "../../../images/about-elders-pete-dahlem.png";
import imgJoshYang from "../../../images/about-elders-josh-yang.png";
import imgDaveYon from "../../../images/about-elders-dave-yon.png";
import imgSeongPark from "../../../images/about-elders-seong-park.png";

const EldersSection = () => {
  const elderInfo = [
    {
      img: imgPeteDahlem,
      name: "Rev. Pete Dahlem",
      role: "Lead Pastor",
      email: "pete.dahlem@hmcc.net",
      emailIcon: true,
    },
    {
      img: imgJoshYang,
      name: "Josh Yang",
      role: "Associate Pastor",
      email: "joshua.yang@hmcc.net",
      emailIcon: true,
    },
    {
      img: imgDaveYon,
      name: "Dave Yon",
      role: "Elder",
      email: "dave.yon@annarbor.hmcc.net",
      emailIcon: true,
    },
    {
      img: imgSeongPark,
      name: "Seong Park",
      role: "Elder",
      email: "seongwpark@annarbor.hmcc.net",
      emailIcon: true,
    },
  ];
  return (
    <div className="w-full flex flex-col items-start gap-y-[3.75rem]">
      <TeamHeading title="Meet Our Elders">
        <p>
          Something about Elders... Lorem Ipsum... esus talks about living an
          abundant life. The vision of LIFE Group is: to experience the fullness
          of life in a Biblical community where the Gospel is radically lived
          out. LIFE Groups seek to accomplish this by sharing our lives with one
          another within various life stages.
        </p>
      </TeamHeading>
      <Team className="pb-[3.75rem]">
        {elderInfo.map((item, index) => (
          <TeamCard
            info={item}
            key={`team-elder-${index + 1}`}
            customClassName={{
              container: "gap-y-1",
              h3: "text-xl",
              role: "text-sm font-medium",
            }}
          />
        ))}
      </Team>
    </div>
  );
};

export default EldersSection;
