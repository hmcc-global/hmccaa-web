import * as React from "react";
import { textContainer } from "../../css/ministryTeams.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { SecondaryButtonLink } from "../Button";

const GetConnectedText = () => (
  <div className="w-full flex-col xl:py-5">
    <div className="subheading">Get Connected</div>
    <h2>There is a place for you at HMCC.</h2>
    <p className="pt-5">
      New to Ann Arbor? Coming for school? Looking for a church? Whether you
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

// width matches the 240px photo box so Gatsby adds a 2x variant from the 600px sources;
// q95 because these small photos visibly soften at the q80 default
const lgsArray = [
  {
    title: "COVENANT",
    desc: "MARRIED COUPLES",
    color: "Accent-900", // #a842a8
    img: (
      <StaticImage
        src="../../images/life-stages/covenant.jpg"
        width={240}
        quality={95}
        alt="Covenant Life group"
        objectFit="fill"
        className="w-full h-full"
        imgClassName="mb-0"
      />
    ),
    css: `xl:top-[6rem] xl:right-[16rem]`,
  },
  {
    title: "FOCUS",
    desc: "SINGLE ADULTS",
    color: "Accent-700", // #f0508b
    img: (
      <StaticImage
        src="../../images/life-stages/focus.jpg"
        width={240}
        quality={95}
        alt="Focus Life group"
        objectFit="fill"
        className="w-full h-full"
        imgClassName="mb-0"
      />
    ),
    css: `bottom-[5rem] right-[18rem]`,
  },
  {
    title: "IMPACT",
    desc: "GRADUATE STUDENTS",
    color: "Accent-300", // #ffbd57
    img: (
      <StaticImage
        src="../../images/life-stages/impact.jpg"
        width={240}
        quality={95}
        alt="Impact Life group"
        objectFit="fill"
        className="w-full h-full"
        imgClassName="mb-0"
      />
    ),
    css: `xl:bottom-[18rem] xl:right-[-5rem]`,
  },
  {
    title: "ACCESS",
    desc: "UNDERGRADUATES",
    color: "Error-300", // #f39ea2
    img: (
      <StaticImage
        src="../../images/life-stages/access.jpg"
        width={240}
        quality={95}
        alt="Access Life group"
        objectFit="fill"
        className="w-full h-full"
        imgClassName="mb-0"
      />
    ),
    css: `xl:bottom-[12rem] xl:left-[12rem]`,
  },
  {
    title: "GLOBAL ACCESS",
    desc: "INTERNATIONAL STUDENTS",
    color: "Success-500", // #10b981
    img: (
      <StaticImage
        src="../../images/life-stages/global-access.jpg"
        width={240}
        quality={95}
        alt="GA Life group"
        objectFit="fill"
        className="w-full h-full"
        imgClassName="mb-0"
      />
    ),
    css: `xl:top-[-9rem] xl:left-[20rem]`,
  },
  {
    title: "LATITUDE/VELOCITY",
    desc: "YOUTH",
    color: "Accent-500", // #ff8069
    img: (
      <StaticImage
        src="../../images/life-stages/latitude-velocity.jpg"
        width={240}
        quality={95}
        alt="LatVel Life group"
        objectFit="fill"
        className="w-full h-full"
        imgClassName="mb-0"
      />
    ),
    css: `xl:top-[12rem] xl:left-[12rem]`,
  },
  {
    title: "BUILDING BLOCKS",
    desc: "KIDS",
    color: "Accent-1000", // #f0df5c
    img: (
      <StaticImage
        src="../../images/life-stages/building-blocks.jpg"
        width={240}
        quality={95}
        alt="BB Life group"
        objectFit="fill"
        className="w-full h-full"
        imgClassName="mb-0"
      />
    ),
    css: `xl:top-[20rem] xl:right-[-6rem]`,
  },
];

const GetConnectedCircleDesktop = () => (
  // Padding only makes room for the photos that hang past the top and bottom of the circle
  <div className="w-full pt-[6.25rem] pb-[8rem]">
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
      {img}
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
          {img}
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
  <div className="flex-col mx-3 w-full inline-flex">
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

// TODO: DoubleGrids aren't responsive
// Desktop larger than 1280
// but Mobile looks small above 780
// Switch with CSS, not JS: the prebuilt HTML can't know the screen width, so a JS switch
// shows the desktop layout (absolutely positioned over the hero) until hydration on small screens.
// display: contents keeps each layout's own box; lazy images in the hidden one aren't fetched.
const GetConnectedCircle = () => (
  <>
    <div className="contents xl:hidden">
      <GetConnectedCircleMobile />
    </div>
    <div className="hidden xl:contents">
      <GetConnectedCircleDesktop />
    </div>
  </>
);

export default GetConnectedCircle;
