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

const GetConnectedCircleDesktop = () => (
  <div className="flex-col relative">
    <div className="flex flex-row relative h-[500px] w-[500px] ">
      <div className="relative w-[270px] h-[278px]">
        <div className="w-[15.5rem] h-[250px] left-[1.25rem] top-[1.75rem] absolute bg-[#FFBD57]">
          <div className="left-[11px] top-[221px] absolute text-Shades-0 text-xl font-bold font-['Raleway'] leading-normal">
            IMPACT
          </div>
          {/* <div className="w-[200px] left-[11px] top-[221px] absolute text-Shades-0 text-xl font-bold font-['Raleway'] leading-normal">IMPACT</div> */}
          <div className="left-[230px] top-[196px] absolute origin-top-left -rotate-90 text-Shades-0 text-sm font-bold font-['Raleway'] leading-[21px]">
            GRADUATE&nbsp;&nbsp;&nbsp;STUDENTS
          </div>
        </div>
        <div className="w-[250px] h-[250px] left-0 top-0 absolute border-4 border-[#FFBD57] items-center inline-flex">
          <img
            src={imgImpact}
            alt={"asdf"}
            className="mb-0 w-[242px] h-[242px]"
          />
        </div>
      </div>
    </div>

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
        <div className="w-[120px] text-center text-black text-xl font-bold font-['Raleway'] leading-normal">
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
