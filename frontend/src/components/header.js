import * as React from "react";
import hmccLogo from "../images/hmcc-ripple-white.svg";
import mapPinLogo from "../images/icons/map-pin.svg";
import dropDown from "../images/icons/dropdown.svg";
import x from "../images/icons/X.svg";

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
  const path = window.location.pathname;
  const containerStyle = "flex flex-row h-[60px] [@media(min-width:900px)]:h-[100px] flext-start bg-Primary-700 items-center justify-center pl-[18px] xl:pl-[80.286px] [@media(min-width:900px)]:pt-[40px] [@media(min-width:900px)]:pb-[17px] pr-[16px] xl:pr-[65px] lg:gap-[20px] xl:gap-[140px] [@media(min-width:1440px)]:gap-[220px] position-fixed"
  const logoStyle = "w-[80px] h-[32px] mb-0";
  const dropDownStyle = "w-[40px] h-[40px] mb-0"
  const textStyle = "text-Shades-0 text-base leading-normal no-underline";
  const mapPinStyle = "mb-0 shrink-0 h-[20px] w-[15.7px] peer hover:bg-[#1A56D6]";
  const borderStyle = "flex items-center py-2 px-4 md:px-6 rounded-lg border-2 border-[#FF8069] shadow-md";

  // var menu = document.getElementById("menu");

  // this function is used to open the menu
  // function openMenu() {
  //     menu.classList.remove("w-0", "h-0", "opacity-0");
  //     menu.classList.add("w-screen", "h-screen", "opacity-95");
  // }

  // this function is used to close the menu
  // function closeMenu() {
  //     menu.classList.remove("w-screen", "h-screen", "opacity-95");
  //     menu.classList.add("w-0", "h-0", "opacity-0");
  // }


  return (
    <header>
      <div className={`${containerStyle}`}>
        <div className="flex flex-row w-full justify-between [@media(min-width:900px)]:hidden relative">
          <a href="/">
            <img alt="hmcc logo" className={logoStyle} src={hmccLogo} />
          </a>
          <a href="/" className={`${textStyle} text-center w-[183px] font-semibold`}>
            HARVEST MISSION COMMUNITY CHURCH
          </a>
          <button>
            <img alt="drop down" className={dropDownStyle} src={dropDown} />
          </button>
        </div>

        <div className="hidden [@media(min-width:900px)]:flex items-center gap-4 md:gap-6 lg:gap-8">
          <a href="/">
            <img alt="hmcc logo" className={logoStyle} src={hmccLogo} />
          </a>
          <a href="/" className={`${textStyle} w-[183px] font-semibold`}>
            HARVEST MISSION COMMUNITY CHURCH
          </a>
        </div>

        <div className="flex-row items-center gap-4 hidden [@media(min-width:900px)]:flex [@media(min-width:1040px)]:gap-8 [@media(min-width:1440px)]:gap-11">
          <div className="relative hover:bg-[#1A56D6] hover:border-[#1A56D6] hover:rounded-t-lg">
            <div className="hover:bg-[#1A56D6] hover:border-[#1A56D6] py-2 px-2 rounded-t-lg peer">
              <img alt="map pin logo" className={`${mapPinStyle}`} src={mapPinLogo}/>
            </div>
            <div className="hidden peer-hover:flex hover:flex w-[150px] flex-col absolute bg-[#1A56D6]">
              {locationsList.map((item, index) => (
                <a
                  key={`browseLink-${index}`}
                  href={item.route}
                  target="_blank"
                  className={`${textStyle} hover:bg-[#0C2966] py-2 px-4 border-b-[0.1px] border-gray-100 tracking-[0.96px]`}
                >
                  {item.title}
                </a>
              ))}
              <a 
                  href = "https://tangerang.hmcc.net/"
                  target="_blank"
                  className={`${textStyle} hover:bg-[#0C2966] py-2 px-4 tracking-[0.96px]`}
                >
                  Tangerang
              </a>
            </div>
          </div>

          <div className="flex flex-row items-center gap-4 md:gap:6 [@media(min-width:1040px)]:gap-8 [@media(min-width:1440px)]:gap-11">
            {browseList.map((item, index) => (
              <a
                key={`browseLink-${index}`}
                href={item.route}
                className={`${textStyle} ${item.route + "/" == path ? "font-extrabold hover:font-extrabold" : "font-normal hover:font-bold"} tracking-[0.96px]`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <div className={borderStyle}>
            <a href="/new" className={`${textStyle} ${"/new/" == path ? "font-extrabold" : ""} font-bold hover:font-extrabold tracking-[0.96px]`}>
              I'm New
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
