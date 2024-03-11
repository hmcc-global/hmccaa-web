import * as React from "react";
import hmccLogo from "../images/hmcc-ripple-white.svg";
import clockLogo from "../images/icons/clock.svg";
import mapPinLogo from "../images/icons/map-pin.svg";
import mailLogo from "../images/icons/mail.svg";
import smartPhoneLogo from "../images/icons/smartphone.svg";
import facebookLogo from "../images/icons/facebook.svg";
import instagramLogo from "../images/icons/instagram.svg";
import twitterLogo from "../images/icons/twitter.svg";
import { CopyrightLogo } from "./svgs";
import Link from "./Link";

const Footer = () => {
  const browseList = [
    { title: "Home", route: "/" },
    { title: "About", route: "/about" },
    { title: "Connect", route: "/connect" },
    { title: "Next Steps", route: "/next-steps" },
    { title: "Events", route: "/events" },
    { title: "Watch", route: "/watch" },
    { title: "Give", route: "/give" },
  ];
  // TODO: what is interest form?
  // fix remainder of routes when their sections get added
  // all link to next steps for now
  const connectList = [
    // { title: "Interest Form", route: "/" }, Add back when there is a real link
    { title: "Join a LIFE Group", route: "/next-steps/lifegroups" },
    { title: "Become a Member", route: "/next-steps" },
    { title: "Join a Ministry Team", route: "/next-steps" },
  ];
  return (
    <footer>
      <div className="bg-Primary-700 justify-center items-center flex">
        <div className="flex flex-col justify-center items-center max-w-container w-full px-4 xl:px-0">
          <div className="flex flex-col items-center md:items-start md:flex-row gap-y-10 px-4 py-5 md:p-12 w-full lg:justify-between xl:justify-normal xl:gap-[10.753%]">
            <div className="flex flex-col max-w-[180px] items-center">
              <div className="flex flex-col items-center">
                <img
                  alt="hmcc logo"
                  className="w-[120px] h-[46px]"
                  src={hmccLogo}
                />
                <h2 className="text-Shades-0 font-bold text-center text-sm leading-normal -m-2 w-[143px]">
                  HARVEST MISSION COMMUNITY CHURCH
                </h2>
              </div>
              <p className="font-medium text-sm leading-[18px] text-Shades-0 mt-[22px] mb-0 text-center md:text-left">
                To transform lost people into Christ’s disciples who will then
                transform the world.
              </p>
            </div>
            <hr className="bg-Shades-0 w-full md:w-0 md:h-0 m-0 order-3 md:order-none " />
            <div className="flex flex-row justify-between md:gap-0 md:justify-evenly w-full sm:max-w-[313px] lg:justify-between md:py-0 order-3 md:order-none px-[12.805%] sm:px-0">
              <div className="flex flex-col items-start w-fit">
                <div className="items-start flex flex-col">
                  <h2 className="text-Shades-0 font-bold text-center text-sm leading-normal mb-[12px]">
                    Browse
                  </h2>
                  {browseList.map((item, index) => (
                    <Link
                      key={`browseLink-${index}`}
                      to={item.route}
                      className="text-Shades-0 font-medium text-start text-sm leading-normal mb-4 md:mb-0 no-underline hover:opacity-75"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-start w-fit">
                <div className="items-start flex flex-col">
                  <h2 className="text-Shades-0 font-bold text-center text-sm leading-normal mb-[12px]">
                    Ways to Connect
                  </h2>
                  {connectList.map((item, index) => (
                    <Link
                      key={`connectLink-${index}`}
                      to={item.route}
                      className="text-Shades-0 font-medium text-start text-sm leading-normal mb-4 md:mb-0 no-underline hover:opacity-75"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start xl:ml-[12.815%] min-w-[15rem] md:py-0 order-2 md:order-none">
              <div className="flex flex-row justify-center items-center">
                <img
                  alt="clock logo"
                  className="w-[24px] h-[24px] mb-0"
                  src={clockLogo}
                />
                <h2 className="text-Shades-0 font-bold text-center text-sm leading-normal mb-0 ml-[12px]">
                  SUNDAYS AT 10 AM
                </h2>
              </div>
              <div className="flex flex-row justify-center items-center mt-[15px]">
                <img
                  alt="map-pin logo"
                  className="w-[24px] h-[24px] mb-0"
                  src={mapPinLogo}
                />
                <Link
                  href="https://www.google.com/maps/place/Harvest+Mission+Community+Church/@42.2816338,-83.7372209,17z/data=!4m5!3m4!1s0x883cae6a77eef201:0xaf4019d9fc7aec8e!8m2!3d42.2816359!4d-83.7371982?hl=en&shorturl=1"
                  className="text-Shades-0 font-medium text-center text-sm leading-normal mb-0 ml-[12px] no-underline hover:opacity-75"
                >
                  1001 E Huron St, Ann Arbor, MI 48104
                </Link>
              </div>
              <div className="flex flex-row justify-center items-center mt-[15px]">
                <img
                  alt="mail logo"
                  className="w-[24px] h-[24px] mb-0"
                  src={mailLogo}
                />
                <Link
                  href="mailto:annarbor@hmcc.net"
                  className="text-Shades-0 font-medium text-center text-sm leading-normal mb-0 ml-[12px] no-underline hover:opacity-75"
                >
                  annarbor@hmcc.net
                </Link>
              </div>
              <div className="flex flex-row justify-center items-center mt-[15px]">
                <img
                  alt="smartphone logo"
                  className="w-[24px] h-[24px] mb-0"
                  src={smartPhoneLogo}
                />
                <h2 className="text-Shades-0 font-medium text-center text-sm leading-normal mb-0 ml-[12px]">
                  (734) 662-4622
                </h2>
              </div>
              <div className="flex flex-row justify-center items-center mt-[20px] gap-[20px]">
                <Link
                  href="https://www.facebook.com/hmcc.aa/"
                  className="hover:opacity-75"
                >
                  <img
                    alt="facebook logo"
                    className="w-[32px] h-[32px] mb-0"
                    src={facebookLogo}
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/hmcc_aa/"
                  className="hover:opacity-75"
                >
                  <img
                    alt="instagram logo"
                    className="w-[32px] h-[32px] mb-0"
                    src={instagramLogo}
                  />
                </Link>
                <Link
                  href="https://twitter.com/HMCC_AA"
                  className="hover:opacity-75"
                >
                  <img
                    alt="twitter logo"
                    className="w-[32px] h-[32px] mb-0"
                    src={twitterLogo}
                  />
                </Link>
              </div>
            </div>
          </div>
          <hr className="bg-Shades-0 w-full md:w-0 md:h-0 mb-[20px]" />
          <div className="flex flex-row justify-center md:justify-normal w-full md:px-12 mb-[62px]">
            <div className="flex flex-row justify-center items-center mb-5 md:mb-0">
              <CopyrightLogo className="w-5 h-5 md:w-6 md:h-6" />
              <h2 className="text-Shades-0 text-sm md:text-lg font-normal mb-0 ml-1 tracking-medium-wide md:tracking-normal">
                {new Date().getFullYear()}
              </h2>
              <Link
                to="/"
                className="text-Shades-0 text-sm md:text-lg leading-tighter font-medium md:font-semibold mb-0 ml-1 md:ml-3 no-underline hover:opacity-75 tracking-medium-wide"
              >
                HARVEST MISSION COMMUNITY CHURCH
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
