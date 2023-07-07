import * as React from "react"
import hmccLogo from "../images/hmcc-ripple-white.svg"
import clockLogo from "../images/icons/clock.svg"
import mapPinLogo from "../images/icons/map-pin.svg"
import mailLogo from "../images/icons/mail.svg"
import smartPhoneLogo from "../images/icons/smartphone.svg"
import facebookLogo from "../images/icons/facebook.svg"
import instagramLogo from "../images/icons/instagram.svg"
import twitterLogo from "../images/icons/twitter.svg"
import copyrightLogo from "../images/icons/Copyright.svg"

const Footer = () => {
    const browseList = [{title: 'Home', route: '/'}, {title: 'About', route: '/about'}, {title: 'Connect', route: '/'}, {title: 'Next Steps', route: '/'}, {title: 'Events', route: '/'}, {title: 'Watch', route: '/'}, {title: 'Give', route: '/'}];
    const connectList = [{title: 'Interest Form', route: '/'}, {title: 'Join a LIFE Group', route: '/'}, {title: 'Become a Member', route: '/'}, {title: 'Join a Ministry Team', route: '/'}];
    return (
        <div className="flex flex-col justify-center items-center max-w-container w-full">
            <footer
                className="flex flex-row p-12 w-full justify-between"
            >
                <div className="flex flex-row justify-evenly w-auto gap-[0px] xl:gap-[120px] lg:gap-[100px] md:gap-[50px] sm:gap-[25px] mr-[25px]">
                    <div className="flex flex-col max-w-[180px] items-start">
                        <div className="flex flex-col items-center">
                            <img
                            alt="hmcc logo"
                            className="w-[120px] h-[46px]"
                            src={hmccLogo}
                            />
                            <h1 className="text-Shades-0 font-bold text-center text-sm leading-normal -m-2 w-[143px]">HARVEST MISSION COMMUNITY CHURCH</h1>
                        </div>
                        <p className="font-medium text-sm leading-[18px] text-Shades-0 mt-[22px]">To transform lost people into Christ’s disciples who will then transform the world.</p>
                    </div>
                    <div className="flex flex-col items-start w-fit mt-[30px]">
                        <div className="items-start flex flex-col">
                            <h1 className="text-Shades-0 font-bold text-center text-sm leading-normal mb-[12px]">Browse</h1>
                            {browseList.map(item => (
                                <a href={item.route} className="text-Shades-0 font-medium text-start text-sm leading-normal mb-0 no-underline hover:opacity-75">{item.title}</a>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-start w-fit mt-[30px]">
                        <div className="items-start flex flex-col">
                            <h1 className="text-Shades-0 font-bold text-center text-sm leading-normal mb-[12px]">Ways to Connect</h1>
                            {connectList.map(item => (
                                <a target="_blank" href={item.route} className="text-Shades-0 font-medium text-start text-sm leading-normal mb-0 no-underline hover:opacity-75">{item.title}</a>
                            ))}
                        </div>            
                    </div>
                </div>
                <div className="flex flex-col items-start mt-[30px]">
                    <div className="flex flex-row justify-center items-center">
                        <img
                        alt="clock logo"
                        className="w-[24px] h-[24px] mb-0"
                        src={clockLogo}
                        />
                        <h1 className="text-Shades-0 font-bold text-center text-sm leading-normal mb-0 ml-[12px]">SUNDAYS AT 10 AM</h1>
                    </div>
                    <div className="flex flex-row justify-center items-center mt-[15px]">
                        <img
                        alt="map-pin logo"
                        className="w-[24px] h-[24px] mb-0"
                        src={mapPinLogo}
                        />
                        <a target="_blank" href="https://www.google.com/maps/place/Harvest+Mission+Community+Church/@42.2816338,-83.7372209,17z/data=!4m5!3m4!1s0x883cae6a77eef201:0xaf4019d9fc7aec8e!8m2!3d42.2816359!4d-83.7371982?hl=en&shorturl=1" className="text-Shades-0 font-bold text-center text-sm leading-normal mb-0 ml-[12px] no-underline hover:opacity-75">1001 E Huron St, Ann Arbor, MI 48104</a>
                    </div>
                    <div className="flex flex-row justify-center items-center mt-[15px]">
                        <img
                        alt="mail logo"
                        className="w-[24px] h-[24px] mb-0"
                        src={mailLogo}
                        />
                        <a href="mailto:annarbor@hmcc.net" className="text-Shades-0 font-bold text-center text-sm leading-normal mb-0 ml-[12px] no-underline hover:opacity-75">annarbor@hmcc.net</a>
                    </div>
                    <div className="flex flex-row justify-center items-center mt-[15px]">
                        <img
                        alt="smartphone logo"
                        className="w-[24px] h-[24px] mb-0"
                        src={smartPhoneLogo}
                        />
                        <h1 className="text-Shades-0 font-bold text-center text-sm leading-normal mb-0 ml-[12px]">(PHONE)</h1>
                    </div>
                    <div className="flex flex-row justify-center items-center mt-[20px] gap-[20px]">
                        <a href="https://www.facebook.com/hmcc.aa/" target="_blank" className="hover:opacity-75">
                            <img
                            alt="facebook logo"
                            className="w-[32px] h-[32px] mb-0"
                            src={facebookLogo}
                            />
                        </a>
                        <a href="https://www.instagram.com/hmcc_aa/" target="_blank" className="hover:opacity-75">
                            <img
                            alt="instagram logo"
                            className="w-[32px] h-[32px] mb-0"
                            src={instagramLogo}
                            />
                        </a>
                        <a href="https://twitter.com/HMCC_AA" target="_blank" className="hover:opacity-75">
                            <img
                            alt="twitter logo"
                            className="w-[32px] h-[32px] mb-0"
                            src={twitterLogo}
                            />
                        </a>
                    </div>
                </div>
            </footer>
            <hr className="bg-Shades-0 w-[90%] mb-[20px]"/>
            <div className="flex flex-row justify-between w-full mb-[62px]">
                <div className="flex flex-row justify-center items-center">
                    <img
                        alt="copyright logo"
                        className="w-[24px] h-[24px] mb-0"
                        src={copyrightLogo}
                    />
                    <h1 className="text-Shades-0 text-[16px] font-bold mb-0 ml-[4px]">2023</h1>
                    <a href="https://annarbor.hmcc.net" className="text-Shades-0 text-[16px] font-bold mb-0 ml-[4px] no-underline hover:opacity-75">HARVEST MISSION COMMUNITY CHURCH</a>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <h1 className="text-Shades-0 text-[16px] font-bold mb-0 ml-[4px]">TERMS & CONDITIONS | OUR POLICY</h1>
                </div>
            </div>
        </div>

    )
}

export default Footer
