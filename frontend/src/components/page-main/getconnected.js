import * as React from "react";
import { useMediaQuery } from "react-responsive";
import {
  textContainer,
  highlightText,
} from "../../css/ministryTeams.module.css";
import { SecondaryButtonLink } from "../Button";
import imgAccess from "../../images/home-get-connected/access-raw.png";
import imgBB from "../../images/home-get-connected/bb-raw.png";
import imgCovenant from "../../images/home-get-connected/covenant-raw.png";
import imgFocus from "../../images/home-get-connected/focus-raw.png";
import imgGA from "../../images/home-get-connected/ga-raw.png";
import imgImpact from "../../images/home-get-connected/impact-raw.png";
import imgLatVel from "../../images/home-get-connected/latvel-raw.png";

const GetConnectedText = () => (
  <div className="w-full flex-col xl:py-5">
    <div className="subheading">Get Connected</div>
    <h2>There is a place for you at HMCC.</h2>
    <p className="pt-5">
      New to Michigan? Coming for school? Looking for community? Whether you
      know God or not, we welcome you! We have fellowship for all different life
      stages, from youth to students to working adults or married couples!
    </p>
    <div className="py-5 lg:flex lg:justify-center lg:w-full">
      <SecondaryButtonLink to="/new/life-stages" hasArrow={true}>
        Learn More
      </SecondaryButtonLink>
    </div>
  </div>
);

const lgsArray = [
  {
    title: "COVENANT",
    desc: "MARRIED COUPLES",
    color: "Accent-900", // #a842a8
    img: imgCovenant,
    alt: "Covenant Life group",
    css: `xl:top-[6rem] xl:right-[16rem]`,
  },
  {
    title: "FOCUS",
    desc: "SINGLE ADULTS",
    color: "Accent-700", // #f0508b
    img: imgFocus,
    alt: "Focus Life group",
    css: `bottom-[5rem] right-[18rem]`,
  },
  {
    title: "IMPACT",
    desc: "GRADUATE STUDENTS",
    color: "Accent-300", // #ffbd57
    img: imgImpact,
    alt: "Impact Life group",
    css: `xl:bottom-[18rem] xl:right-[-5rem]`,
  },
  {
    title: "ACCESS",
    desc: "UNDERGRADUATES",
    color: "Error-300", // #f39ea2
    img: imgAccess,
    alt: "Access Life group",
    css: `xl:bottom-[12rem] xl:left-[12rem]`,
  },
  {
    title: "GLOBAL ACCESS",
    desc: "INTERNATIONAL STUDENTS",
    color: "Success-500", // #10b981
    img: imgGA,
    alt: "GA Life group",
    css: `xl:top-[-9rem] xl:left-[20rem]`,
  },
  {
    title: "LATITUDE/VELOCITY",
    desc: "YOUTH",
    color: "Accent-500", // #ff8069
    img: imgLatVel,
    alt: "LatVel Life group",
    css: `xl:top-[12rem] xl:left-[12rem]`,
  },
  {
    title: "BUILDING BLOCKS",
    desc: "KIDS",
    color: "Accent-1000", // #f0df5c
    img: imgBB,
    alt: "BB Life group",
    css: `xl:top-[20rem] xl:right-[-6rem]`,
  },
];

const GetConnectedCircleDesktop = () => (
  <div className="2 w-full pt-[12rem] pb-[8rem]">
    <div>
      <div
        className={
          "w-full xl:max-w-[56.25rem] xl:relative mx-auto xl:left-[1px] xl:py-[16.6875rem] xl:rounded-full"
        }
      >
        <div className={textContainer}>
          <GetConnectedText />
        </div>
        <div className="flex flex-col absolute top-1/2 left-1/2">
          {lgsArray.map((item, index) => {
            const key = `lgs-${index + 1}`;
            return (
              <div
                key={key}
                className={`w-full xl:w-auto inline-flex justify-center items-center xl:absolute ${item.css}`}
              >
                <DoubleGridDesktop
                  title={item.title}
                  desc={item.desc}
                  color={item.color}
                  img={item.img}
                  alt={item.alt}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

// title on bottom, white text
// desc on right, white text, left aligned
const DoubleGridDesktop = ({ title, desc, color, img, alt }) => (
  <div className="w-[17rem] h-[17.5rem]">
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
      <img src={img} alt={alt} className="mb-0 w-full h-full" />
    </div>
  </div>
);

const DoubleGridMobile = ({ title, desc, color, img, alt }) => {
  let descTextSize = desc.length > 16 ? "text-xs" : "text-sm";
  return (
    <div className="flex-col justify-start items-center gap-1 inline-flex">
      <div className="text-center w-full text-Shades-100 text-lg font-bold">
        {title}
      </div>
      <div className="relative w-[9.75rem] h-[10rem]">
        <div
          className={`w-[9.5rem] h-[9.5rem] left-[.625rem] top-[1rem] absolute bg-${color}`}
        >
          <div
            className={`text-center ${descTextSize} bottom-[0rem] absolute w-full text-Shades-0 text-md font-bold`}
          >
            {desc}
          </div>
        </div>
        <div
          className={`w-[9.5rem] h-[9.5rem] left-0 top-0 absolute border-4 border-${color}`}
        >
          <img src={img} alt={alt} className="mb-0 w-full h-full" />
        </div>
      </div>
    </div>
  );
};

const RowMobile = ({ children }) => (
  <div className="justify-start items-center gap-8 inline-flex">{children}</div>
);

const LifeStagesBoxMobile = () => (
  <div className="w-[150px] h-[150px] px-[15px] py-[51px] bg-white justify-center items-center flex">
    <div className="w-[120px] text-center text-black text-xl font-bold leading-normal">
      LIFE STAGES
    </div>
  </div>
);

// title on top, black text
// desc on bottom, white text, centered
const GetConnectedCircleMobile = () => (
  <div className="flex-col mx-3 py-10 w-full inline-flex">
    <div>
      <GetConnectedText />
    </div>
    <div className="flex-col justify-start items-center gap-9 inline-flex">
      <RowMobile>
        <LifeStagesBoxMobile />
        <DoubleGridMobile
          title={lgsArray[0].title}
          desc={lgsArray[0].desc}
          color={lgsArray[0].color}
          img={lgsArray[0].img}
          alt={lgsArray[0].alt}
        />
      </RowMobile>
      <RowMobile>
        <DoubleGridMobile
          title={lgsArray[1].title}
          desc={lgsArray[1].desc}
          color={lgsArray[1].color}
          img={lgsArray[1].img}
          alt={lgsArray[1].alt}
        />
        <DoubleGridMobile
          title={lgsArray[2].title}
          desc={lgsArray[2].desc}
          color={lgsArray[2].color}
          img={lgsArray[2].img}
          alt={lgsArray[2].alt}
        />
      </RowMobile>
      <RowMobile>
        <DoubleGridMobile
          title={lgsArray[3].title}
          desc={lgsArray[3].desc}
          color={lgsArray[3].color}
          img={lgsArray[3].img}
          alt={lgsArray[3].alt}
        />
        <DoubleGridMobile
          title={lgsArray[4].title}
          desc={lgsArray[4].desc}
          color={lgsArray[4].color}
          img={lgsArray[4].img}
          alt={lgsArray[4].alt}
        />
      </RowMobile>
      <RowMobile>
        <DoubleGridMobile
          title={lgsArray[5].title}
          desc={lgsArray[5].desc}
          color={lgsArray[5].color}
          img={lgsArray[5].img}
          alt={lgsArray[5].alt}
        />
        <DoubleGridMobile
          title={lgsArray[6].title}
          desc={lgsArray[6].desc}
          color={lgsArray[6].color}
          img={lgsArray[6].img}
          alt={lgsArray[6].alt}
        />
      </RowMobile>
    </div>
  </div>
);

const GetConnectedCircle = () => {
  // TODO: DoubleGrids aren't responsive
  // Desktop larger than 1280
  // but Mobile looks small above 780
  const isMobile = useMediaQuery({ maxWidth: 1279 });
  // Define switch cases based on screen size
  const switchElement = isMobile ? (
    <GetConnectedCircleMobile />
  ) : (
    <GetConnectedCircleDesktop />
  );

  return switchElement;
};

export default GetConnectedCircle;
