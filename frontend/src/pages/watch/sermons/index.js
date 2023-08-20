import React from "react";
import Layout from "../../../components/layout";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import {
  BookIcon,
  CalendarIcon,
  MuteIcon,
  PauseIcon,
  PlayIcon,
  SeriesIcon,
  SettingsIcon,
  UserIcon,
  VolumeIcon,
} from "../../../components/svgs";
import { StaticImage } from "gatsby-plugin-image";

const SermonPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const handleClick = (evt) => {
    if (!evt.target.id) {
        return;
    }
    const svgs = document.getElementById(evt.target.id).querySelectorAll("svg");
    const spans = document.getElementById(evt.target.id).querySelectorAll("span");
    svgs.forEach(item => item.classList.toggle("hidden"));
    spans.forEach(item => item.classList.toggle("hidden"));
    const playButton = /play-button/.test(evt?.target?.id) && document.getElementById(evt.target.id) || null;
    playButton && (playButton.ariaLabel = document.querySelector("#play-button span:not(.hidden)").textContent);
  };
  const rotateIcon = (evt) => {
        if (!evt.target.id) {
            return;
        }

        document.getElementById(evt.target.id).classList.toggle("plyr-focus");
        document.getElementById(evt.target.id).querySelector("svg").classList.toggle("rotate-90");
        document.getElementById("plyr-settings").classList.toggle("hidden");
  };

  const openSpeed = (evt) => {
    if (!evt.target) {
        return;
    }

    document.getElementById("plyr-settings-home").classList.toggle("hidden");
    document.getElementById("plyr-settings-speed").classList.toggle("hidden");
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
                              Pause
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
                                className="plyr-seek relative z-[2] -ml-[6.5px] -mr-[6.5px] w-[calc(100%+13px)] rounded-[26px] h-[19px] touch-manipulation"
                                onChange={() => null}
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
                            <button
                                id="volumn-button"
                                onClick={handleClick}
                                className="touch-manipulation rounded-[3px] cursor-pointer shrink-0 overflow-visible relative transition duration-300 ease-[ease] p-[7px] hover:bg-[#00B3FF] hover:text-Shades-0 focus:outline-0"
                                >
                                    <MuteIcon />
                                    <VolumeIcon />
                                    <span className="hidden overflow-hidden h-[1px] w-[1px] absolute">Unmute</span>
                                    <span className="overflow-hidden h-[1px] w-[1px] absolute">Mute</span>
                            </button>
                            <input 
                                type="range" 
                                min="0" 
                                max="1" 
                                step="0.05" 
                                value="1" 
                                autoComplete="off" 
                                aria-label="Volume" 
                                aria-valuemin="0" 
                                aria-valuemax="100" 
                                aria-valuenow="100" 
                                id="plyr-volume" 
                                aria-valuetext="100.0%" 
                                className="plyr-volume mx-[5px] relative z-[2] appearance-none rounded-[26px] text-[#00B3FF] block h-[19px] transition duration-300 ease-[ease] w-full touch-manipulation"
                                />
                          </div>
                          <div className="ml-[2.5px] flex relative">
                            <button id="plyr-settings-icon" onClick={rotateIcon} className="touch-manipulation rounded-[3px] cursor-pointer shrink-0 overflow-visible p-[7px] relative transition-all duration-300 ease-[ease] hover:bg-[#00B3FF] hover:text-Shades-0 focus:outline-0" aria-haspopup="true" aria-controls="plyr-settings" aria-expanded="false" type="button">
                                <SettingsIcon className="transition-tranform duration-300 ease-[ease]"/>
                                <span className="overflow-hidden h-[1px] w-[1px] absolute">Settings</span>
                            </button>
                            <div id="plyr-settings" className="plyr__menu__container animate-plyr-popup hidden bg-Shades-0 rounded-2 bottom-full shadow-[0_1px_2px_rgba(0,0,0,0.15)] text-[#4a5764] text-lg mb-[10px] absolute -right-[3px] text-left whitespace-nowrap z-[3]">
                                <div className="overflow-hidden transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)">
                                    <div id="plyr-settings-home">
                                        <div role="menu" className="p-[7px]">
                                            <button onClick={openSpeed} type="button" role="menuitem" aria-haspopup="true" className="plyr__control--forward pr-[28px] items-center text-[#4A5764] flex text-base py-2 px-[11px] w-full select-none mt-1 touch-manipulation rounded-[3px] cursor-pointer overflow-visible relative transition-all duration-300 ease-[ease] hover:bg-[#00B3FF] hover:text-Shades-0">
                                                <span className="items-center flex w-full">Speed<span className="items-center flex ml-auto -mr-[5px] overflow-hidden pl-[25px] pointer-events-none">Normal</span></span>
                                            </button>
                                        </div>
                                    </div>
                                    <div id="plyr-settings-speed" className="hidden">
                                        <button type="button" className="plyr__control--back font-medium m-[7px] mb-[3px] pl-[28px] relative w-[calc(100%-14px)] items-center text-[#4a5764] flex text-base py-2 px-[11px] select-none touch-manipulation rounded-[3px] cursor-pointer overflow-visible transition-all duration-300 ease-[ease] hover:bg-[#00B3FF] hover:text-Shades-0 ">
                                            <span aria-hidden="true" className="items-[inherit] flex w-full">Speed</span>
                                            <span className="items-[inherit] flex w-[1px] overflow-hidden h-[1px] absolute">Go back to previous menu</span>
                                        </button>
                                        <div role="menu" className="p-[7px]">
                                            <button type="button" role="menuitemradio" aria-checked="false" value="0.5" className="plyr_control_menuitem pl-[7px] items-center text-[#4A5764] flex text-base py-2 px-[11px] select-none w-full touch-manipulation rounded-[3px] cursor-pointer overflow-visible relative transition-all duration-300 ease-[ease] hover:bg-[#00B3FF] hover:text-Shades-0">
                                                <span className="items-[inherit] flex max-w-full">0.5×</span>
                                            </button>
                                            <button type="button" role="menuitemradio" aria-checked="false" value="0.75" className="plyr_control_menuitem pl-[7px] items-center flex text-base py-2 px-[11px] select-none w-full mt-1 touch-manipulation rounded-[3px] overflow-visible relative transition-all duration-300 ease-[ease] hover:bg-[#00B3FF] hover:text-Shades-0">
                                                <span className="items-[inherit] flex max-w-full">0.75×</span>
                                            </button>
                                            <button type="button" role="menuitemradio" aria-checked="true" value="1" className="plyr_control_menuitem pl-[7px] items-center flex text-base py-2 px-[11px] select-none w-full mt-1 touch-manipulation rounded-[3px] overflow-visible relative transition-all duration-300 ease-[ease] hover:bg-[#00B3FF] hover:text-Shades-0"><span className="items-[inherit] flex max-w-full">Normal</span></button>
                                            <button type="button" role="menuitemradio" aria-checked="false" value="1.25" className="plyr_control_menuitem pl-[7px] items-center flex text-base py-2 px-[11px] select-none w-full mt-1 touch-manipulation rounded-[3px] overflow-visible relative transition-all duration-300 ease-[ease] hover:bg-[#00B3FF] hover:text-Shades-0"><span className="items-[inherit] flex max-w-full">1.25×</span></button>
                                            <button type="button" role="menuitemradio" aria-checked="false" value="1.5" className="plyr_control_menuitem pl-[7px] items-center flex text-base py-2 px-[11px] select-none w-full mt-1 touch-manipulation rounded-[3px] overflow-visible relative transition-all duration-300 ease-[ease] hover:bg-[#00B3FF] hover:text-Shades-0"><span className="items-[inherit] flex max-w-full">1.5×</span></button>
                                            <button type="button" role="menuitemradio" aria-checked="false" value="1.75" className="plyr_control_menuitem pl-[7px] items-center flex text-base py-2 px-[11px] select-none w-full mt-1 touch-manipulation rounded-[3px] overflow-visible relative transition-all duration-300 ease-[ease hover:bg-[#00B3FF] hover:text-Shades-0"><span className="items-[inherit] flex max-w-full">1.75×</span></button>
                                            <button type="button" role="menuitemradio" aria-checked="false" value="2" className="plyr_control_menuitem pl-[7px] items-center flex text-base py-2 px-[11px] select-none w-full mt-1 touch-manipulation rounded-[3px] overflow-visible relative transition-all duration-300 ease-[ease] hover:bg-[#00B3FF] hover:text-Shades-0"><span className="items-[inherit] flex max-w-full">2×</span></button>
                                            <button type="button" role="menuitemradio" aria-checked="false" value="4" className="plyr_control_menuitem pl-[7px] items-center flex text-base py-2 px-[11px] select-none w-full mt-1 touch-manipulation rounded-[3px] overflow-visible relative transition-all duration-300 ease-[ease] hover:bg-[#00B3FF] hover:text-Shades-0"><span className="items-[inherit] flex max-w-full">4×</span></button>
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SermonPage;
