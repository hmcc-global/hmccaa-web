import * as React from "react";
import { SecondaryButtonLink } from "../../Button";
import TeamCard from "../shared/teamCard";
import Team from "../shared/team";

const LeadershipSection = ({ elders = [] }) => {
  const elderCards = elders.map((elder, index) => (
    <TeamCard
      key={`elder-${index + 1}`}
      info={{
        gatsbyImageData:
          elder.TeamMember?.Headshot?.file?.childImageSharp?.gatsbyImageData,
        name: elder.TeamMember?.DisplayName,
        role: elder.Role,
      }}
      customClassName={{ container: "gap-y-2", h3: "text-2xl leading-tighter" }}
    />
  ));

  return (
    <div className="py-10 lg:py-20 flex flex-col lg:items-center max-w-container">
      <div className="lg:text-center pb-[3.75rem]">
        <div className="subheading">Our Leadership</div>
        <h2>Meet Our Elders</h2>
      </div>
      <Team className="max-w-[36rem] lg:max-w-none gap-x-4 lg:gap-x-5 pb-11.25">
        {elderCards}
      </Team>
      <div className="flex">
        <SecondaryButtonLink to={"/about/our-team"} hasArrow={true}>
          More About Our Elders and Deacons
        </SecondaryButtonLink>
      </div>
    </div>
  );
};

export default LeadershipSection;
