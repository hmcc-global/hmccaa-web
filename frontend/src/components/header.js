import * as React from "react";
import hmccLogo from "../images/hmcc-ripple-white.svg";
import mapPinLogo from "../images/icons/map-pin.svg";
import dropDown from "../images/icons/dropdown.svg";
import x from "../images/icons/X.svg";
import Link from "./Link";

const Header = () => {
  const browseList = [
    { title: "About", route: "/about" },
    { title: "Connect", route: "/connect" },
    { title: "Next Steps", route: "/next-steps" },
    { title: "Events", route: "/events" },
    { title: "Watch", route: "/watch" },
    { title: "Give", route: "/give" },
  ];

  const locationsList = [
    { title: "Ann Arbor", route: "/" },
    { title: "Austin", route: "https://austin.hmcc.net/" },
    { title: "Detroit", route: "https://detroit.hmcc.net/" },
    { title: "Hong Kong", route: "https://hongkong.hmcc.net/" },
    { title: "Jakarta", route: "https://jakarta.hmcc.net/" },
  ];

  const [isOpen, setIsOpen] = React.useState(false);
  const path =
    (typeof window !== "undefined" && window.location.pathname) || "";
  const containerStyle =
    "flex flex-row h-[60px]lg:h-[100px] relative flext-start bg-Primary-700 items-center justify-center pl-[18px] xl:pl-[80.286px] lg:pt-[40px] lg:pb-[17px] pr-[16px] 2xl:pr-[65px] [@media(min-width:1440px)]:gap-[140px] [@media(min-width:1600px)]:gap-[220px] position-fixed";
  const logoStyle = "w-[80px] h-[32px] mb-0";
  const dropDownStyle = "w-[40px] h-[40px] mb-0";
  const textStyle = "text-Shades-0 text-base leading-normal no-underline";
  const mapPinStyle =
    "mb-0 shrink-0 h-[20px] w-[15.7px] peer hover:bg-[#1A56D6]";
  const borderStyle =
    "flex items-center py-2 px-4 md:px-6 rounded-lg border-2 border-[#FF8069] shadow-md";

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const htmlElement = document?.querySelector("html");
  const bodyElement = document?.querySelector("body");
  if (isOpen) {
    htmlElement.classList.add("menu__Html--open");
    bodyElement.classList.add("menu__Body--open");
  } else {
    htmlElement.classList.remove("menu__Html--open");
    bodyElement.classList.remove("menu__Body--open");
  }

  return (
    <header>
      <div className={`${containerStyle}`}>
        <div className="flex flex-row w-full justify-between lg:hidden relative">
          <Link to="/">
            <img alt="hmcc logo" className={logoStyle} src={hmccLogo} />
          </Link>
          <Link
            to="/"
            className={`${textStyle} text-center w-[183px] font-semibold`}
          >
            HARVEST MISSION COMMUNITY CHURCH
          </Link>
          <button onClick={toggleModal}>
            <img alt="drop down" className={dropDownStyle} src={dropDown} />
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-4 md:gap-6 lg:gap-8">
          <Link to="/">
            <img alt="hmcc logo" className={logoStyle} src={hmccLogo} />
          </Link>
          <Link to="/" className={`${textStyle} w-[183px] font-semibold`}>
            HARVEST MISSION COMMUNITY CHURCH
          </Link>
        </div>

        {isOpen && (
          <div className="text-Shades-0 h-screen justify-center bg-Shades-50 items-start fixed overflow-auto inset-0 z-50">
            <div className="flex flex-col justify-start items-center">
              <div className="flex flex-row pt-5 w-full justify-between opacity-90">
                <div></div>
                <Link className="ml-12" to="/">
                  <img alt="hmcc logo" className={logoStyle} src={hmccLogo} />
                </Link>
                <button
                  onClick={toggleModal}
                  className="mr-4 flex justify-center items-center"
                >
                  <img alt="x" src={x} />
                </button>
              </div>
              <div className="w-full flex flex-col items-start">
                {browseList.map((item, index) => (
                  <Link
                    key={`browseLink-${index}`}
                    to={item.route}
                    className={`${textStyle} ${
                      item.route + "/" === path
                        ? "font-extrabold py-2 px-4"
                        : "font-medium py-2 px-4"
                    } w-full text-left flex items-center pl-[56px] text-xl h-[75px] border-b-[0.5px] last:border-none`}
                  >
                    {item.title}
                  </Link>
                ))}
                <div className={`${borderStyle} mt-6 w-[90vw] self-center`}>
                  <Link
                    to="/new"
                    className={`${textStyle} ${
                      "/new/" === path ? "font-extrabold" : ""
                    } font-bold hover:font-extrabold tracking-[0.96px]`}
                  >
                    I&apos;m New
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex-row items-center gap-4 hidden lg:flex lg:gap-3 [@media(min-width:1040px)]:gap-8 [@media(min-width:1440px)]:gap-11">
          <div className="relative hover:bg-[#1A56D6] hover:border-[#1A56D6] hover:rounded-t-lg">
            <div className="hover:bg-[#1A56D6] hover:border-[#1A56D6] py-2 px-2 rounded-t-lg peer">
              <img
                alt="map pin logo"
                className={`${mapPinStyle}`}
                src={mapPinLogo}
              />
            </div>
            <div className="hidden peer-hover:flex hover:flex w-[150px] flex-col absolute bg-[#1A56D6]">
              {locationsList.map((item, index) =>
                index == 0 ? (
                  <Link
                    key={`browseLink-${index}`}
                    to={"/"}
                    className={`${textStyle} hover:bg-[#0C2966] py-2 px-4 border-b-[0.1px] border-gray-100 tracking-[0.96px]`}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <Link
                    key={`browseLink-${index}`}
                    href={item.route}
                    className={`${textStyle} hover:bg-[#0C2966] py-2 px-4 border-b-[0.1px] border-gray-100 tracking-[0.96px]`}
                  >
                    {item.title}
                  </Link>
                )
              )}
              <Link
                href="https://tangerang.hmcc.net/"
                className={`${textStyle} hover:bg-[#0C2966] py-2 px-4 tracking-[0.96px]`}
              >
                Tangerang
              </Link>
            </div>
          </div>

          <div className="flex flex-row items-center gap-4 md:gap:6 [@media(min-width:1040px)]:gap-8 [@media(min-width:1440px)]:gap-11">
            {browseList.map((item, index) => (
              <Link
                key={`browseLink-${index}`}
                to={item.route}
                className={`${textStyle} ${
                  item.route + "/" === path
                    ? "font-extrabold hover:bg-Primary-300 py-2 px-4 rounded-default"
                    : "font-normal hover:bg-Primary-300 py-2 px-4 rounded-default"
                } tracking-[0.96px]`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className={borderStyle}>
            <Link
              to="/new"
              className={`${textStyle} ${
                "/new/" === path ? "font-extrabold" : ""
              } font-bold hover:font-extrabold tracking-[0.96px]`}
            >
              I&apos;m New
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
