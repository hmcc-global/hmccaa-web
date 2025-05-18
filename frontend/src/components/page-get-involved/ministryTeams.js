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
  17: "xl:left-17",
  18: "xl:left-18",
  35: "xl:left-35",
  41: "xl:left-41",
  51: "xl:left-51",
  59: "xl:left-59",
  65: "xl:left-65",
  74: "xl:left-74",
  77: "xl:left-77",
  86: "xl:left-86",
  88: "xl:left-88",
  97: "xl:left-97",
  105: "xl:left-105",
  106: "xl:left-106",
  113: "xl:left-113",
  119: "xl:left-119",
  121: "xl:left-121",
  133: "xl:left-133",
  144: "xl:left-144",
  152: "xl:left-152",
  160: "xl:left-160",
  166: "xl:left-166",
  260: "xl:left-260",
  449: "xl:left-449",
  455: "xl:left-455",
  463: "xl:left-463",
  471: "xl:left-471",
  482: "xl:left-482",
  494: "xl:left-494",
  506: "xl:left-506",
  509: "xl:left-509",
  527: "xl:left-527",
  532: "xl:left-532",
  550: "xl:left-550",
  566: "xl:left-566",
  580: "xl:left-580",
  588: "xl:left-588",
  604: "xl:left-604",
  612: "xl:left-612",
  620: "xl:left-620",
  621: "xl:left-621",
  641: "xl:left-641",
  657: "xl:left-657",
  663: "xl:left-663",
  675: "xl:left-675",
  687: "xl:left-687",
  693: "xl:left-693",
  713: "xl:left-713",
  728: "xl:left-728",
  732: "xl:left-732",
  739: "xl:left-739",
  744: "xl:left-744",
  751: "xl:left-751",
  758: "xl:left-758",
  762: "xl:left-762",
  766: "xl:left-766",
  768: "xl:left-768",
  770: "xl:left-770",
  771: "xl:left-771",
  773: "xl:left-773",
  926: "xl:left-926",
  939: "xl:left-939",
  956: "xl:left-956",
  980: "xl:left-980",
  1016: "xl:left-1016",
  "-52": "xl:-left-52",
  "-168": "xl:-left-168",
  "-5": "xl:-left-5",
  "-12": "xl:-left-12",
  "-190": "xl:-left-190",
  "-92": "xl:-left-92",
  "-179": "xl:-left-179",
  "-156": "xl:-left-156",
  "-29": "xl:-left-29",
  "-183": "xl:-left-183",
  "-130": "xl:-left-130",
  "-104": "xl:-left-104",
  "-149": "xl:-left-149",
  "-185": "xl:-left-185",
  "-80": "xl:-left-80",
  "-58": "xl:-left-58",
  "-175": "xl:-left-175",
  "-110": "xl:-left-110",
  "-187": "xl:-left-187",
  "-161": "xl:-left-161",
  "-38": "xl:-left-38",
  "-21": "xl:-left-21",
  "-145": "xl:-left-145",
  "-74": "xl:-left-74",
  "-188": "xl:-left-188",
};

const translatesY = {
  10: "xl:top-10",
  11: "xl:top-11",
  13: "xl:top-13",
  15: "xl:top-15",
  18: "xl:top-18",
  22: "xl:top-22",
  27: "xl:top-27",
  34: "xl:top-34",
  45: "xl:top-45",
  60: "xl:top-60",
  86: "xl:top-86",
  129: "xl:top-129",
  132: "xl:top-132",
  151: "xl:top-151",
  157: "xl:top-157",
  182: "xl:top-182",
  194: "xl:top-194",
  230: "xl:top-230",
  248: "xl:top-248",
  251: "xl:top-251",
  253: "xl:top-253",
  289: "xl:top-289",
  299: "xl:top-299",
  310: "xl:top-310",
  346: "xl:top-346",
  349: "xl:top-349",
  366: "xl:top-366",
  367: "xl:top-367",
  374: "xl:top-374",
  427: "xl:top-427",
  433: "xl:top-433",
  441: "xl:top-441",
  463: "xl:top-463",
  468: "xl:top-468",
  486: "xl:top-486",
  495: "xl:top-495",
  510: "xl:top-510",
  538: "xl:top-538",
  565: "xl:top-565",
  575: "xl:top-575",
  583: "xl:top-583",
  605: "xl:top-605",
  616: "xl:top-616",
  636: "xl:top-636",
  638: "xl:top-638",
  674: "xl:top-674",
  685: "xl:top-685",
  703: "xl:top-703",
  710: "xl:top-710",
  724: "xl:top-724",
  726: "xl:top-726",
  737: "xl:top-737",
  840: "xl:top-840",
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
              let className = "";
              if (coords.length > 0) {
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
                  className={`xl:w-[23.75rem] xl:absolute xl:z-index-10 ${className}`}
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
          <div className="flex xl:relative z-10">
            <PrimaryButtonLink
              hasArrow={true}
              to={"/get-involved/ministryteams"}
            >
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
