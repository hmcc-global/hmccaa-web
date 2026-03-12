import React from "react";
import Team from "../shared/team";
import TeamCard from "../shared/teamCard";
import { TeamHeading } from "./heading";

const EldersSection = ({ elders = [] }) => {
  const elderInfo = elders.map(elder => ({
    gatsbyImageData:
      elder.TeamMember?.Headshot?.file?.childImageSharp?.gatsbyImageData,
    name: elder.TeamMember?.DisplayName,
    role: elder.Role,
    email: elder.TeamMember?.Email,
    emailIcon: true,
    background: elder.Background,
    ministries: elder.TeamMember?.focus_areas?.map(fa => fa.FocusArea) || [],
  }));

  return (
    <div className="flex flex-col lg:items-center gap-y-[3.75rem] pt-[1.6875rem] pb-[1.125rem] lg:py-0">
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
