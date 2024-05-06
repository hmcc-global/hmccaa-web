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
import { buildCoordinates } from "../../config/theme";
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
  11: "xl:left-11",
  17: "xl:left-17",
  26: "xl:left-26",
  35: "xl:left-35",
  38: "xl:left-38",
  49: "xl:left-49",
  51: "xl:left-51",
  57: "xl:left-57",
  65: "xl:left-65",
  71: "xl:left-71",
  77: "xl:left-77",
  88: "xl:left-88",
  106: "xl:left-106",
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
  "-100": "xl:-left-100",
  "-168": "xl:-left-168",
  "-5": "xl:-left-5",
  "-60": "xl:-left-60",
  "-190": "xl:-left-190",
  "-30": "xl:-left-30",
  "-92": "xl:-left-92",
  "-179": "xl:-left-179",
  "-7": "xl:-left-7",
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
  0: "xl:top-0",
  26: "xl:top-26",
  77: "xl:top-77",
  82: "xl:top-82",
  101: "xl:top-101",
  109: "xl:top-109",
  134: "xl:top-134",
  149: "xl:top-149",
  185: "xl:top-185",
  204: "xl:top-204",
  211: "xl:top-211",
  213: "xl:top-213",
  249: "xl:top-249",
  263: "xl:top-263",
  270: "xl:top-270",
  310: "xl:top-310",
  319: "xl:top-319",
  331: "xl:top-331",
  336: "xl:top-336",
  344: "xl:top-344",
  397: "xl:top-397",
  403: "xl:top-403",
  417: "xl:top-417",
  433: "xl:top-433",
  448: "xl:top-448",
  458: "xl:top-458",
  475: "xl:top-475",
  486: "xl:top-486",
  523: "xl:top-523",
  545: "xl:top-545",
  555: "xl:top-555",
  571: "xl:top-571",
  585: "xl:top-585",
  606: "xl:top-606",
  621: "xl:top-621",
  638: "xl:top-638",
  662: "xl:top-662",
  685: "xl:top-685",
  693: "xl:top-693",
  710: "xl:top-710",
  712: "xl:top-712",
  726: "xl:top-726",
  737: "xl:top-737",
  840: "xl:top-840",
  "-15": "xl:-top-15",
  "-26": "xl:-top-26",
  "-33": "xl:-top-33",
  "-38": "xl:-top-38",
  "-42": "xl:-top-42",
  "-45": "xl:-top-45",
  "-47": "xl:-top-47",
  "-49": "xl:-top-49",
  "-50": "xl:-top-50",
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
