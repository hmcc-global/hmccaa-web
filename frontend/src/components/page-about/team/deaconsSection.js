import * as React from "react";
import { TeamHeading } from "./heading";
import Team from "../shared/team";
import TeamCard from "../shared/teamCard";

const DeaconsSection = ({ deacons = [] }) => {
  const deaconInfo = deacons.map(deacon => ({
    gatsbyImageData:
      deacon.Headshot?.file?.childImageSharp?.gatsbyImageData,
    name: deacon.DisplayName,
    email: deacon.Email,
    ministries: deacon.focus_areas?.map(fa => fa.FocusArea) || [],
  }));

  return (
    <div className="flex flex-col items-center gap-y-5 lg:gap-y-[3.75rem] pt-[1.625rem] pb-[0.125rem] lg:py-0">
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
