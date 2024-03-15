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

const conversion = Math.PI / 180;
const radius = 450;
const translatesX = {
  21: "xl:translate-x-21",
  50: "xl:translate-x-50",
  62: "xl:translate-x-62",
  76: "xl:translate-x-76",
  92: "xl:translate-x-92",
  110: "xl:translate-x-110",
  132: "xl:translate-x-132",
  156: "xl:translate-x-156",
  165: "xl:translate-x-165",
  185: "xl:translate-x-185",
  201: "xl:translate-x-201",
  207: "xl:translate-x-207",
  219: "xl:translate-x-219",
  237: "xl:translate-x-237",
  257: "xl:translate-x-257",
  276: "xl:translate-x-276",
  288: "xl:translate-x-288",
  295: "xl:translate-x-295",
  306: "xl:translate-x-306",
  310: "xl:translate-x-310",
  312: "xl:translate-x-312",
  314: "xl:translate-x-314",
  315: "xl:translate-x-315",
  317: "xl:translate-x-317",
  "-455": "xl:-translate-x-455",
  "-618": "xl:-translate-x-618",
  "-133": "xl:-translate-x-133",
  "-580": "xl:-translate-x-580",
  "-385": "xl:-translate-x-385",
  "-629": "xl:-translate-x-629",
  "-542": "xl:-translate-x-542",
  "-508": "xl:-translate-x-508",
  "-640": "xl:-translate-x-640",
  "-344": "xl:-translate-x-344",
  "-633": "xl:-translate-x-633",
  "-479": "xl:-translate-x-479",
  "-6": "xl:-translate-x-6",
  "-317": "xl:-translate-x-317",
  "-530": "xl:-translate-x-530",
  "-635": "xl:-translate-x-635",
  "-599": "xl:-translate-x-599",
  "-433": "xl:-translate-x-433",
  "-415": "xl:-translate-x-415",
  "-25": "xl:-translate-x-25",
  "-298": "xl:-translate-x-298",
  "-488": "xl:-translate-x-488",
  "-611": "xl:-translate-x-611",
  "-637": "xl:-translate-x-637",
  "-560": "xl:-translate-x-560",
  "-399": "xl:-translate-x-399",
  "-190": "xl:-translate-x-190",
  "-39": "xl:-translate-x-39",
  "-284": "xl:-translate-x-284",
  "-638": "xl:-translate-x-638",
  "-524": "xl:-translate-x-524",
  "-373": "xl:-translate-x-373",
};

const translatesY = {
  0: "xl:translate-y-0",
  54: "xl:translate-y-54",
  78: "xl:translate-y-78",
  100: "xl:translate-y-100",
  139: "xl:translate-y-139",
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
          <div className="flex flex-col gap-y-3 xl:block py-5 xl:py-0 xl:absolute xl:inset-0 xl:transform xl:-rotate-[40deg]">
            {teams.map((item, index, currentArray) => {
              let quadrant = 90;
              let deltaDegree = 90;
              let className = "xl:-translate-x-[11.875rem]";
              let [x, y] = [0, 0];
              if (index > 0) {
                let angle =
                  Number((360 / currentArray.length).toFixed(4)) * index;
                while (angle > quadrant) {
                  quadrant += 90;
                  if (quadrant === 270) {
                    deltaDegree = quadrant;
                  }
                }

                if (quadrant === 90 || quadrant === 270) {
                  angle = Number((deltaDegree - angle).toFixed(4));
                } else {
                  angle = Number((angle - deltaDegree).toFixed(4));
                }

                [x, y] = [
                  Math.round(radius * Math.cos(angle * conversion)) *
                    (quadrant <= 180 ? 1 : -1) -
                    380 * (quadrant <= 180 ? 0.35 : 0.5),
                  Math.round(radius * Math.sin(angle * conversion)) +
                    (quadrant > 90 && quadrant <= 270 ? 450 : 0),
                ];

                if (translatesX[x] && translatesY[y]) {
                  className = `${translatesX[x]} ${translatesY[y]}`;
                }
              }

              const Component = item.Component;
              const key = `team-${index + 1}`;

              return (
                <div
                  key={key}
                  className={`xl:w-[23.75rem] xl:absolute xl:left-1/2 xl:-top-[3.75rem] xl:z-index-10 xl:transform xl:rotate-[40deg]   ${className}`}
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
