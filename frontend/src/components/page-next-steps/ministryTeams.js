import * as React from "react";
import {
  textContainer,
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
import { PrimaryButtonLink } from "../Button";
import { buildCoordinates, translatesArray } from "../../config/theme";
console.warn(translatesArray);
const teams = [
  {
    team: "Art & Design Servants",
    abbreviation: "ADS",
    Component: AdsLogo,
  },
  {
    team: "Building Blocks",
    abbreviation: "KIDS",
    Component: KidsLogo,
  },
  {
    team: "Documentations",
    abbreviation: "DOCS - PHOTO/VIDEO",
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
    abbreviation: "VIDEO RECORDING",
    Component: VMLogo,
  },
  {
    team: "Worship Team",
    abbreviation: "AV/BAND",
    Component: WorshipLogo,
  },
];

const coords = buildCoordinates(teams.length);

const translatesX = {
  13: "xl:translate-x-13",
  40: "xl:translate-x-40",
  81: "xl:translate-x-81",
  111: "xl:translate-x-111",
  151: "xl:translate-x-151",
  184: "xl:translate-x-184",
  204: "xl:translate-x-204",
  226: "xl:translate-x-226",
  238: "xl:translate-x-238",
  250: "xl:translate-x-250",
  276: "xl:translate-x-276",
  295: "xl:translate-x-295",
  314: "xl:translate-x-314",
  325: "xl:translate-x-325",
  329: "xl:translate-x-329",
  333: "xl:translate-x-333",
  336: "xl:translate-x-336",
  352: "xl:translate-x-[11rem]",
  439: "xl:translate-x-[20rem]",
  "-493": "xl:-translate-x-493",
  "-656": "xl:-translate-x-656",
  "-114": "xl:-translate-x-114",
  "-618": "xl:-translate-x-618",
  "-423": "xl:-translate-x-423",
  "-630": "xl:-translate-x-630",
  "-546": "xl:-translate-x-546",
  "-678": "xl:-translate-x-678",
  "-382": "xl:-translate-x-382",
  "-671": "xl:-translate-x-671",
  "-355": "xl:-translate-x-355",
  "-568": "xl:-translate-x-568",
  "-637": "xl:-translate-x-637",
  "-453": "xl:-translate-x-453",
  "-6": "xl:-translate-x-6",
  "-336": "xl:-translate-x-336",
  "-526": "xl:-translate-x-526",
  "-675": "xl:-translate-x-675",
  "-580": "xl:-translate-x-580",
  "-667": "xl:-translate-x-667",
  "-20": "xl:-translate-x-20",
  "-322": "xl:-translate-x-322",
};

const translatesY = {
  54: "xl:translate-y-54",
  78: "xl:translate-y-78",
  100: "xl:translate-y-100",
  139: "xl:translate-y-139",
  169: "xl:translate-y-169",
  187: "xl:translate-y-187",
  225: "xl:translate-y-225",
  256: "xl:translate-y-256",
  281: "xl:translate-y-281",
  301: "xl:translate-y-301",
  318: "xl:translate-y-318",
  345: "xl:translate-y-345",
  364: "xl:translate-y-364",
  379: "xl:translate-y-379",
  390: "xl:translate-y-390",
  398: "xl:translate-y-398",
  405: "xl:translate-y-405",
  411: "xl:translate-y-411",
  450: "xl:translate-y-450",
  497: "xl:translate-y-497",
  514: "xl:translate-y-514",
  550: "xl:translate-y-550",
  589: "xl:translate-y-589",
  610: "xl:translate-y-610",
  675: "xl:translate-y-675",
  731: "xl:translate-y-731",
  745: "xl:translate-y-745",
  768: "xl:translate-y-768",
  787: "xl:translate-y-787",
  814: "xl:translate-y-814",
  840: "xl:translate-y-840",
  855: "xl:translate-y-855",
  873: "xl:translate-y-873",
  882: "xl:translate-y-882",
  887: "xl:translate-y-887",
  890: "xl:translate-y-890",
  900: "xl:translate-y-900",
};

const MinistryTeams = () => (
  <div>
    <div className={wrapper}>
      <div className="xl:relative">
        <div className={container}>
          <div className={textContainer}>
            <div>
              <div className="subheading">Ministry Teams</div>
              <h2>
                SERVING IS A WAY TO USE GOD&apos;S BLESSING TO BLESS OTHERS.
              </h2>
            </div>
            <p>
              We believe God has given us unique talents and all are needed to
              be a healthy church body. Whether you know your gifts or are in
              the process of figuring out, come learn more about how we can use
              our gifts to help those around us!
            </p>
          </div>
          <div className="flex flex-col gap-y-3 xl:block py-5 xl:py-0 xl:absolute xl:inset-0 xl:transform">
            {teams.map((item, index) => {
              let className = "xl:-translate-x-[11.875rem]";
              if (index > 0) {
                const [x, y] = coords[index];
                if (translatesX[x] && translatesY[y]) {
                  className = `${translatesX[x]} ${translatesY[y]}`;
                }
              }

              const Component = item.Component;
              const key = `team-${index + 1}`;

              return (
                <div
                  key={key}
                  className={`xl:w-[23.75rem] xl:absolute xl:left-1/2 xl:z-index-10 xl:-top-[0.625rem] xl:transform ${className} h-0 overflow-hidden border-b-[0.625rem]  border-solid`}
                >
                  <div className={`${ministryTeam}`}>
                    <div className={teamWrapper}>
                      <div>
                        <Component className="w-10 md:w-[3.75rem]" />
                      </div>
                      <div>
                        <h3>{item.team}</h3>
                        <div>({item.abbreviation})</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center">
            <PrimaryButtonLink hasArrow={true} to={"/next-steps/ministryteams"}>
              Join a Team
            </PrimaryButtonLink>
          </div>
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
