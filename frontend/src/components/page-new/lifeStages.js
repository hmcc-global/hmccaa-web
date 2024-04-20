import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { bgLeft, bgRight } from "../../css/lifeStagesNew.module.css";
import { SecondaryButtonLink } from "../Button";

const lifeStages = [
  {
    heading: "A Place for Families",
    description:
      "Newly married? Have newborns? Kids? We have families from different life stages you can connect with in our Covenant ministry!",
    lifeStageImage: (
      <StaticImage
        src="../../images/families-life-stage.png"
        alt="Families Life Stage"
      />
    ),
  },
  {
    heading: "A Place for Single Adults",
    description:
      "New to the area? Just graduated? Our FOCUS ministry is for anyone out of school and not yet married.",
    lifeStageImage: (
      <StaticImage
        src="../../images/single-adults-life-stage.png"
        alt="Single Adults Life Stage"
      />
    ),
  },
  {
    heading: "A Place for Grad Students",
    description:
      "In grad school? Taking extra courses? This is a place you can connect with those pursuing higher education in our Impact ministry.",
    lifeStageImage: (
      <StaticImage
        src="../../images/grad-students-life-stage.png"
        alt="Grad Students Life Stage"
      />
    ),
  },
  {
    heading: "A Place for International Students",
    description:
      "Flew in from overseas to attend school in the US? In our Global Access ministry we have students from China, HK, Indonesia, Malaysia, Japan, and many more!",
    lifeStageImage: (
      <StaticImage
        src="../../images/international-students-life-stage.png"
        alt="International Students Life Stage"
      />
    ),
  },
  {
    heading: "A Place for Undergrads",
    description:
      "A student at U of M? Eastern? Other schools for undergrad studies? Our undergrad ministry is what sparked the start of HMCC. We would love to connect more with you!",
    lifeStageImage: (
      <StaticImage
        src="../../images/undergrads-life-stage.png"
        alt="Undergrads Life Stage"
      />
    ),
  },
];

const desktopViewRightSideItems = [0, 2, 3];
const LifeStages = () => {
  return (
    <div className="px-4 pt-[1.1875rem] pb-[4.1875rem] lg:py-[9.5625rem] flex flex-col gap-y-10 lg:gap-y-[3.75rem] max-w-[33.125rem] lg:max-w-[66.3125rem]">
      <div className="text-center">
        <div className="subheading">Life Stages</div>
        <h2>There&apos;s a Place For Everyone</h2>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:gap-x-[2.8125rem] lg:grid-rows-6">
        {lifeStages.map(({ heading, description, lifeStageImage }, index) => (
          <div
            key={`lifeStage-${index}`}
            className={`${
              index % 2 === 0 ? "text-right" : "text-left"
            } lg:flex lg:row-span-2 gap-x-10 ${
              desktopViewRightSideItems.includes(index)
                ? "lg:col-start-2 lg:text-left"
                : "lg:text-right"
            } ${
              !desktopViewRightSideItems.includes(index)
                ? index === 1
                  ? " lg:row-start-2"
                  : " lg:row-start-4"
                : ""
            }`}
          >
            <div
              className={`${
                !desktopViewRightSideItems.includes(index) ? "lg:order-1" : ""
              }`}
            >
              <div className="text-lg uppercase text-Primary-300 pb-1 lg:text-2xl leading-tighter font-semibold">
                {heading}
              </div>
              <div className="text-sm font-medium tracking-medium-wide pb-3 lg:text-base">
                {description}
              </div>
            </div>
            <div className="lg:max-w-[11.75rem]">
              <div
                className={`${index % 2 === 0 ? bgRight : bgLeft} mb-[7px] ${
                  index % 2 === 0 ? "mr-[7px]" : "ml-[7px]"
                } relative`}
              >
                <div className="border-Primary-900 border-solid border-[1px] relative z-[1]">
                  {lifeStageImage}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-y-5">
        <SecondaryButtonLink href="https://fs23.formsite.com/whitemn/dtuolqqeba/index.html" hasArrow={true}>
          Let Us Know You&apos;re Interested
        </SecondaryButtonLink>
        <p>*We will have a servant leader contact you.</p>
      </div>
    </div>
  );
};

export default LifeStages;
