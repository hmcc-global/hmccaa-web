import * as React from "react";
import hmccLogo from "../images/hmcc-ripple-white.svg";
import mapPinLogo from "../images/icons/map-pin.svg";

const Header = () => {
    const browseList = [
      { title: "About", route: "/about" },
      { title: "Connect", route: "/connect" },
      { title: "Next Steps", route: "/next-steps" },
      { title: "Events", route: "/events" },
      { title: "Watch", route: "/watch" },
    ];

    const containerStyle = {
      display: "flex",
      height: "100px",
      padding: "40px 80.286px 17px 80px",
      justifyContent: "center",
      gap: "246px",
      alignItems: "flex-start",
      background: "var(--primary-1700, #0C2966)",
    };
    
    const textStyle = {
      color: "#FFF",
      fontFamily: "Raleway",
      fontSize: "16px",
      fontStyle: "normal",
      lineHeight: "normal",
      textDecoration: "none",
    };

    const borderStyle = {
      display: "flex",
      padding: "12px 20px",
      alignItems: "flex-start",
      gap: "8px",
      borderRadius: "8px",
      border: "2px solid var(--accent-1500, #FF8069)",
      boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.16)",
    };
    
    return (
      <header>
        <div style={containerStyle}>
          <div className="flex flex-row items-center gap-[12px]">
            <a href="\">
              <img
                alt="hmcc logo"
                className="w-[80px] h-[32px] mb-0"
                src={hmccLogo}
              />
            </a>
          
            <a style={textStyle}
              className="text-left text-sm leading-normal w-[183px] font-semibold">
              HARVEST MISSION COMMUNITY CHURCH
            </a>
          </div>
          <div className="flex flex-row items-center gap-[40px]">
              <div>
                <a
                  href="https://www.google.com/maps/place/Harvest+Mission+Community+Church/@42.2816338,-83.7372209,17z/data=!4m5!3m4!1s0x883cae6a77eef201:0xaf4019d9fc7aec8e!8m2!3d42.2816359!4d-83.7371982?hl=en&shorturl=1"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-75"
                >
                  <img
                    alt="map pin logo"
                    className="mb-0"
                    src={mapPinLogo}
                  />
                </a>
              </div>
            <div className="items-start flex flex-row gap-[40px]">
              {browseList.map((item, index) => (
                <a
                  key={`browseLink-${index}`}
                  href={item.route}
                  style={textStyle}
                  className="font-medium hover:opacity-75 tracking-[.96px]"
                >
                  {item.title}
                </a>
              ))}
            </div>
            <div style={borderStyle}>
              <a href="/new"
                 style={textStyle}
                 className="font-bold hover:opacity-75 tracking-[.96px]">
                    I'm New
              </a>
            </div>
          </div>
          
        </div>
        
      </header>
    );
  };
  
  export default Header;