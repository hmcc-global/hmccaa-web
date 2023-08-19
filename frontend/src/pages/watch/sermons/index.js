import React from "react";
import Layout from "../../../components/layout";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import {
  BookIcon,
  CalendarIcon,
  PauseIcon,
  PlayIcon,
  SeriesIcon,
  UserIcon,
} from "../../../components/svgs";
import { StaticImage } from "gatsby-plugin-image";

const SermonPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const handleClick = () => {
    const svgs = document.querySelectorAll("#play-button svg");
    const spans = document.querySelectorAll("#play-button span");
    const playButton = document.querySelector("#play-button");
    playButton.ariaLabel = playButton.ariaLabel === "Play" ? "Pause" : "Play";
    svgs.forEach(item => item.classList.toggle("hidden"));
    spans.forEach(item => item.classList.toggle("hidden"));
    console.warn(svgs);
  };
  return (
    <Layout>
      <div className="px-4 w-full flex items-center flex-col">
        <div className="max-w-container w-full flex flex-col pt-10 pb-[22.8125rem] gap-y-[3.75rem] items-center">
          <div className="w-full">
            <Breadcrumb crumbs={crumbs} crumbSeparator=" > " />
          </div>
          <div className="flex flex-col gap-y-[3.75rem] items-center max-w-[61.25rem] w-full">
            <h1 className="text-4xl leading-tighter font-bold mb-0">
              Psalm 133
            </h1>
            <div className="flex gap-x-10 items-center">
              <div className="flex flex-col gap-y-10 text-xl font-medium">
                <div className="flex gap-x-2">
                  <CalendarIcon />
                  <div>August 13, 2023</div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <div className="flex gap-x-2">
                    <UserIcon />
                    <div>Pastor Pete Dahlem</div>
                  </div>
                  <div className="flex gap-x-2">
                    <BookIcon />
                    <div>Psalm 133</div>
                  </div>
                  <div className="flex gap-x-2">
                    <SeriesIcon />
                    <div>Selah</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full max-w-[45rem] relative">
                  <StaticImage
                    alt="Psalm 133"
                    src="../../../images/Sermon-Ad-Selah-April.png"
                  />
                  <div className="flex justify-center absolute left-0 bottom-0 w-full">
                    <div className="flex-1 border-solid border-[1px] border-[#DBE3E8]">
                      <div className="subpixel-antialiased font-medium tabular-nums h-full leading-[1.7] max-w-full min-w-[12.5rem] relative">
                        <div className="bg-Shades-0 text-[#4A5764] p-[0.625rem] items-center flex justify-end text-center">
                          <button
                            id="play-button"
                            aria-label="Play"
                            className="touch-manipulation rounded-[0.1875rem] shrink-0 overflow-visible p-[0.4375rem] relative transition duration-300 ease-[ease] hover:bg-[#00B3FF] hover:text-Shades-0 focus:outline-0"
                            onClick={handleClick}
                          >
                            <PauseIcon />
                            <PlayIcon />
                            <span className="overflow-hidden absolute w-[1px] h-[1px] hidden">
                              Puase
                            </span>
                            <span className="overflow-hidden absolute w-[1px] h-[1px]">
                              Play
                            </span>
                          </button>
                          <div className="pl-[2.5px] ml-[2.5px] flex-1">
                            <div className="left-[6.5px] mr-[13px] relative">
                              <input
                                type="range"
                                min="0"
                                max="100"
                                step="0.01"
                                value="0"
                                autoComplete="off"
                                aria-label="Seek"
                                aria-valuemin="0"
                                aria-valuemax="3222.677333"
                                aria-valuenow="0"
                                id="plyr-seek"
                                className="relative z-[2] -ml-[6.5px] -mr-[6.5px] w-[calc(100%+13px)] rounded-[26px] h-[19px] touch-manipulation"
                              />
                              <progress
                                min="0"
                                max="100"
                                value="0"
                                aria-hidden="true"
                                className="text-[rgba(193,201,209,.66)] appearance-none bg-transparent rounded-[100px] h-[5px] left-0 -mt-[2.5px] absolute top-[50%] -ml-[6.5px] -mr-[6.5px] w-[calc(100%+13px)]"
                              >
                                % buffered
                              </progress>
                              <span className="plyr__tooltip text-base left-0 bg-[rgba(255,255,255,0.9)] rounded-[3px] bottom-[100%] shadow-[0_1px_2px_rgbs(0,0,0,0.15)] text-[#4A5764] font-medium leading-[1.3] mb-10px opacity-0 py-[5px] px-[7.5px] pointer-events-none absolute translate-[-50%_10px] scale-[0.8] origin-[50%_100%] whitespace-nowrap z-[2]"></span>
                            </div>
                          </div>
                          <div className="px-[5px] ml-[2.5px] text-base">
                            53:42
                          </div>
                          <div className="ml-[2.5px] items-center flex max-w-[110px] min-w-[80px] relative w-[20%]">
                            <button className="touch-manipulation rounded-[3px] cursor-pointer flex-shrink-0 overflow-visible relative transition duration-300 ease-[ease]"></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SermonPage;
