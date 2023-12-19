import * as React from "react";
import {
  textContainer,
  highlightText,
  container,
  ministryTeam,
  teamWrapper,
  wrapper,
} from "../../css/ministryTeams.module.css";
import {
  AdsLogo,
  KidsLogo,
  DocsLogo,
  HostsLogo,
  FacilitiesLogo,
  VMLogo,
  WorshipLogo,
} from "../svgs";
import { StaticImage } from "gatsby-plugin-image";

const teams = [
  {
    team: "Art & Design Servant",
    abbreviation: "ADS",
    Component: AdsLogo,
  },
  {
    team: "Building Blocks",
    abbreviation: "KIDS",
    Component: KidsLogo,
  },
  {
    team: "Documentation",
    abbreviation: "DOCS - PHOTO/VIDOES",
    Component: DocsLogo,
  },
  {
    team: "Hospitality",
    abbreviation: "HOSTS/WELCOME TEAM",
    Component: HostsLogo,
  },
  {
    team: "Servants United",
    abbreviation: "FACILITIES",
    Component: FacilitiesLogo,
  },
  {
    team: "Video Ministry",
    abbreviation: "Video Recording",
    Component: VMLogo,
  },
  {
    team: "Worship Team",
    abbreviation: "AV/BAND",
    Component: WorshipLogo,
  },
];
const MinistryTeams = () => (
  <div>
    <div className={wrapper}>
      <div className={container}>
        <div className={textContainer}>
          <div>
            <div className="subheading">Ministry Teams</div>
            <h2>
              SERVING IS A WAY TO USE GOD&apos;S BLESSING TO BLESS OTHERS.
            </h2>
          </div>
          <p>
            We believe God has given us unique talents and all are needed to be
            a healthy church body. Whether you know your gifts or are in the
            process of figuring out, come learn more about how we can use our
            gifts to help those around us!
          </p>
        </div>
        <div className="flex flex-col gap-y-3 lg:block py-5 lg:py-0">
          {teams.map((item, index) => {
            const Component = item.Component;
            const key = `team-${index + 1}`;
            const teamItem = item.team.charAt(0);
            let className = "";
            switch (teamItem) {
              case "A":
                className = "lg:top-[1.8125rem] lg:left-[0.4375rem]";
                break;
              case "B":
                className =
                  "lg:top-[12.5375rem] xl:top-[19.9375rem] lg:-right-[3.775rem] xl:-right-[14.875rem]";
                break;
              case "D":
                className = "lg:top-[1.875rem] lg:-right-[1.25rem]";
                break;
              case "H":
                className =
                  "lg:top-[39.0625rem] lg:-right-[2.6875rem] xl:-right-[9.6875rem]";
                break;
              case "S":
                className = "lg:-bottom-[2.8125rem] lg:left-[17.1875rem]";
                break;
              case "V":
                className =
                  "lg:bottom-[9.6875rem] lg:-left-[3.875rem] xl:-left-[4.875rem]";
                break;
              case "W":
                className =
                  "lg:top-[12.5375rem] xl:top-[19.9375rem] lg:-left-[3.85rem] xl:-left-[11.25rem]";
                break;
              default:
            }
            return (
              <div key={key} className={`${ministryTeam} ${className}`}>
                <div className={teamWrapper}>
                  <div>
                    <Component />
                  </div>
                  <div>
                    <h3>{item.team}</h3>
                    <div>({item.abbreviation})</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={highlightText}>
          Please email <a href="mailto:abc@hmccaa.com">abc@hmccaa.com</a> to get
          connected!
        </div>
      </div>
    </div>
    <div className="pt-10 lg:pt-0">
      <StaticImage
        src="../../images/ug-retreat.png"
        alt="Ministry Teams Hero"
      />
    </div>
  </div>
);

export default MinistryTeams;
