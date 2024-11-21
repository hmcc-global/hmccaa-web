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
    description: [
      "Pastor Pete joined HMCC after receiving Christ through a Life group in January 2000. He was captivated by our church’s mission to transform lost people into Christ’s disciples who will then transform the world, and continued to grow, serve, and discover his calling to pastoral ministry. Pastor Pete met his wife, Gina, at HMCC, and they were married in August 2010. Their son, Nicholas, was born in July 2011.",
      "After serving as associate pastor for nine years, Pastor Pete stepped into the lead pastor role in 2015. He believes the church should be a transcultural community where followers of Jesus learn to bring the gospel across cultural barriers to our neighbors, the nations, and the next generation. Pastor Pete loves spending time with his family, anything outdoorsy, carpentry/woodworking, riding motorcycles, and traveling.",
    ],
    ministries: ["Covenant (Married)", "Latitude & Velocity (Youth)"],
  },
  {
    img: imgJoshYang,
    name: "Joshua Yang",
    role: "Associate Pastor",
    email: "joshua.yang@hmcc.net",
    emailIcon: true,
    description: [
      "Pastor Josh joined the HMCC family in 2006 as a freshman at Northwestern University, where HMCC planted its first church plant. It was here that God grew Pastor Josh’s heart for the local church as he served as a coordinator, Life group leader, and worship leader, and in 2011, Pastor Josh first received his calling to pastoral ministry. In 2015, Pastor Josh moved to Ann Arbor and joined the HMCC of Ann Arbor staff as an assistant pastor in 2017. He has a passion to see people fully understand God’s love for them, and to experience Him deeply. In August 2021, Pastor Josh married his wife Erica, with whom he shares a love for Christ, coffee, and the local church (not necessarily in that order).",
    ],
    ministries: ["Access (Undergraduate Students)"],
  },
  {
    img: imgDaveYon,
    name: "Dave Yon",
    role: "Elder",
    email: "dave.yon@annarbor.hmcc.net",
    emailIcon: true,
    description: [
      "David joined HMCC Ann Arbor as a freshman at the University of Michigan in 1998. He joined a Life group community that met at his college dorm and as he experienced God’s transformation in his life he joined HMCC. Since that time he served as a Life group leader for the undergrad ministry, served on the Worship Team, and led Latitude | Velocity (youth group ministry). David is an educator who has been teaching since 2005 and he is married to Sarah and has 3 children. He and his family most recently returned to Ann Arbor in 2020 after spending 5 years in Hong Kong with the church plant team.",
    ],
    ministries: ["Covenant (Married)"],
  },
  {
    img: imgSeongPark,
    name: "Seong Park",
    role: "Elder",
    email: "seongwpark@annarbor.hmcc.net",
    emailIcon: true,
    description: [
      "Seong Weon Park joined HMCC Ann Arbor as part of the church plant team in 1996 as the only working person at the time. He has served on the worship band, as coordinator, programming director, and board of directors. He has led all the various life-stages Life groups at one time or another (undergraduate, graduate, working single, and the married). He married Helen in 2005 and have 4 children. Seong continues to work as an automotive engineer for major OEM’s in the area.",
    ],
    ministries: ["Covenant (Married)"],
  },
];

const EldersSection = () => {
  return (
    <div className="flex flex-col items-center gap-y-[3.75rem] pt-[1.6875rem] pb-[1.125rem] lg:py-0">
      <TeamHeading title="Meet Our Elders" />
      <Team className="gap-x-4 lg:gap-x-5 lg:pb-[3.75rem]">
        {elderInfo.map((item, index) => (
          <TeamCard
            info={item}
            key={`team-elder-${index + 1}`}
            customClassName={{
              container: "gap-y-1",
              h3: "text-xl",
            }}
            showModal={true}
          />
        ))}
      </Team>
    </div>
  );
};

export default EldersSection;
