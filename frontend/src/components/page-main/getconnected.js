import * as React from "react";
import { useMediaQuery } from "react-responsive";
import {
  textContainer,
  container,
  ministryTeam,
  teamWrapper,
  wrapper,
} from "../../css/ministryTeams.module.css";
import { SecondaryButtonLink } from "../Button";
import gc94 from "../../images/gc94.svg";
import imgImpact from "../../images/home-get-connected/impact-raw.png";
import ga from "../../images/home-get-connected/ga.svg";
import lv from "../../images/home-get-connected/lv.svg";
import covMobile from "../../images/home-get-connected/covenant-mobile.svg";
import focusMobile from "../../images/home-get-connected/focus-mobile.svg";
import impactMobile from "../../images/home-get-connected/impact-mobile.svg";
import accessMobile from "../../images/home-get-connected/access-mobile.svg";
import gaMobile from "../../images/home-get-connected/ga-mobile.svg";
import lvMobile from "../../images/home-get-connected/lv-mobile.svg";
import bbMobile from "../../images/home-get-connected/bb-mobile.svg";

const GetConnectedText = () => (
  <div className="w-full flex-col justify-center text-center">
    <div className="subheading">Get Connected</div>
    <h2>There is a place for you at HMCC.</h2>
    <p className="pt-21">
      New to Michigan? Coming for school? Looking for community? Whether you
      believe in God or not, we welcome you! We have fellowship for all
      different life stages, from youth to students to working adults or married
      couples!
    </p>
    <div className="flex justify-center">
      <SecondaryButtonLink to="/connect" hasArrow={true}>
        Learn More
      </SecondaryButtonLink>
    </div>
  </div>
);
const lgs = [
  {
    title: "COVENANT",
    desc: "MARRIED COUPLES",
    color: "Accent-900", // #a842a8
  },
  {
    title: "FOCUS",
    desc: "SINGLE ADULTS",
    color: "Accent-700", // #f0508b
  },
  {
    title: "IMPACT",
    desc: "GRADUATE STUDENTS",
    color: "Accent-300", // #ffbd57
  },
  {
    title: "ACCESS",
    desc: "UNDERGRADUATES",
    color: "Error-300", // #f39ea2
  },
  {
    title: "GLOBAL ACCESS",
    desc: "INTERNATIONAL STUDENTS",
    color: "Success-500", // #10b981
  },
  {
    title: "LATITUDE/VELOCITY",
    desc: "YOUTH",
    color: "Accent-500", // #ff8069
  },
  {
    title: "BUILDING BLOCKS",
    desc: "KIDS",
    color: "[#f0df5c]", // #f0df5c
  },
];
// title on bottom, white text
// desc on right, white text, left aligned
const DoubleGridDesktop = ({ title, desc, color }) => (
  <div className="relative w-[17rem] h-[17.5rem]">
    <div
      className={`w-[15.5rem] h-[15.5rem] left-[1.25rem] top-[1.75rem] absolute bg-${color}`}
    >
      <div className="left-[0.75rem] bottom-[0rem] absolute text-Shades-0 text-xl font-bold">
        {title}
      </div>
      <div className="text-center absolute w-full -left-[1rem] origin-top-right -rotate-90 text-Shades-0 text-[14px] leading-[1rem]">
        {desc}
      </div>
    </div>
    <div
      className={`w-[15.5rem] h-[15.5rem] left-0 top-0 absolute border-4 border-${color}`}
    >
      <img src={imgImpact} alt={"asdf"} className="mb-0 w-full h-full" />
    </div>
  </div>
);

// title on top, black text
// desc on bottom, white text, centered
const DoubleGridMobile = ({ title, desc, color }) => (
  <div className="flex-col justify-start items-center gap-1 inline-flex">
    <div className="text-center w-full text-Shades-100 text-lg font-bold">
      {title}
    </div>
    <div className="relative w-[17rem] h-[17.5rem]">
      <div
        className={`w-[15.5rem] h-[15.5rem] left-[1.25rem] top-[1.75rem] absolute bg-${color}`}
      >
        <div className="text-center bottom-[0rem] absolute w-full text-Shades-0 text-md font-bold">
          {desc}
        </div>
      </div>
      <div
        className={`w-[15.5rem] h-[15.5rem] left-0 top-0 absolute border-4 border-${color}`}
      >
        <img src={imgImpact} alt={"asdf"} className="mb-0 w-full h-full" />
      </div>
    </div>
  </div>
);

const GetConnectedCircleDesktop = () => (
  <div className="flex-col relative">
    <div className="px-10">
      <img
        className="padding-4"
        alt="Images of LIFE Groups arranged in a circle"
        src={gc94}
      />
    </div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <GetConnectedText />
    </div>
  </div>
);

const GetConnectedCircleMobile = () => (
  <div className="flex-col justify-start items-center gap-5 inline-flex">
    <div className="justify-start items-center gap-4 inline-flex">
      <div className="w-[150px] h-[150px] px-[15px] py-[51px] bg-white justify-center items-center flex">
        <div className="w-[120px] text-center text-black text-xl font-bold leading-normal">
          LIFE STAGES
        </div>
      </div>
      <div className="flex-col justify-start items-center gap-1 inline-flex">
        <img src={covMobile} />
      </div>
    </div>
    <div className="justify-start items-center gap-4 inline-flex">
      <div className="flex-col justify-start items-center gap-1 inline-flex">
        <img src={focusMobile} />
      </div>
      <div className="flex-col justify-start items-center gap-1 inline-flex">
        <img src={impactMobile} />
      </div>
    </div>
    <div className="justify-start items-center gap-4 inline-flex">
      <div className="flex-col justify-start items-center gap-1 inline-flex">
        <img src={accessMobile} />
      </div>
      <div className="flex-col justify-start items-center gap-1 inline-flex">
        <img src={gaMobile} />
      </div>
    </div>
    <div className="justify-start items-center gap-4 inline-flex">
      <div className="flex-col justify-start items-center gap-1 inline-flex">
        <img src={lvMobile} />
      </div>
      <div className="flex-col justify-start items-center gap-1 inline-flex">
        <img src={bbMobile} />
      </div>
    </div>
  </div>
);

const GetConnectedCircle = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // Define your switch cases based on screen size
  const switchElement = isMobile ? (
    <GetConnectedCircleMobile />
  ) : (
    <GetConnectedCircleDesktop />
  );

  return <div>{switchElement}</div>;
};

export default GetConnectedCircle;
