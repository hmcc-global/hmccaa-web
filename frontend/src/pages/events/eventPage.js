import * as React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import { PrimaryButtonLink } from "../../components/Button";
import locationPinIcon from "../../images/icons/locationPin.svg"
import calendarIcon from "../../images/icons/calendar.svg"
import clockIcon from "../../images/icons/clock-black.svg"
import { StaticImage } from "gatsby-plugin-image";

import Seo from "../../components/seo";



const EventPage = () => (
    <Layout>
        <div className="flex flex-col justify-start items-center gap-y-8 lg:gap-y-14 pt-8 gap-x-32 lg:pt-14 py-32">
            <h2 className="text-center lg:text-left text-xl lg:text-3xl font-semibold">Campus Missions Week</h2>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-14 lg:gap-48">
                <div>
                    <div className="flex flex-col items-start gap-5 lg:gap-9">
                        <div className="flex items-center gap-1 lg:gap-2">
                        <div className="w-5 h-5 lg:w-6 lg:h-6 relative" > <img src={calendarIcon}></img></div>
                            <div className="text-black text-md md:text-xl font-medium leading-tight lg:leading-loose">August 27, 2023</div>
                        </div>
                        <div className="flex items-center gap-1 lg:gap-2">
                            <div className="w-5 h-5 lg:w-6 lg:h-6 relative" > <img src={clockIcon}></img></div>
                            <div className="text-black text-md md:text-xl font-medium leading-tight lg:leading-loose">TBD</div>
                        </div>
                        <div className="flex items-center gap-1 lg:gap-2">
                            <div className="w-5 h-5 lg:w-6 lg:h-6 relative" > <img src={locationPinIcon}></img></div>
                            <div className="text-black text-md md:text-xl font-medium leading-tight lg:leading-loose">TBD</div>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-start pt-8 lg:pt-10">
                        <PrimaryButtonLink hasArrow={true} to={"../../next-steps/lifegroups"}>Sign Up</PrimaryButtonLink>
                    </div>
                </div>

                <div className="text-center lg:order-1">
                    <StaticImage src="https://via.placeholder.com/382x215" alt="CMW" />
                </div>
            </div>

            <div className="flex flex-col justify-start items-start gap-y-8 w-96 md:w-full">
                <div><span className="text-black text-2xl font-semibold leading-7">Details<br /></span><span className="text-black text-base font-normal leading-normal"><br />Come back a week earlier to reach out to new students!<br /><br></br>Global Access students can also sign up for International Campus Reach using the same form.</span></div>
                <div><span className="text-black text-2xl font-semibold leading-7">Contact<br /></span><span className="text-black text-base font-normal leading-normal tracking-wide"><br /></span><span className="text-black text-base font-normal leading-normal">Have a question? Please contact aaaa at aaaa@hmcc.net</span></div>
            </div>
        </div>


        {/* <div className="flex flex-col gap-y-8 gap-x-32 pt-[15px] pb-8 lg:py-14">
            <div className="text-center lg:text-left">
                <h2 className="pt-8 pb-4">Campus Missions Week</h2>
                <div className="flex flex-col gap-14 inline-flex">
                    <div>
                        <div className="flex-col justify-center items-start flex">
                            <div className="justify-start items-center gap-1 inline-flex">
                                <div className="w-5 h-5 relative" />
                                <div className="text-black text-sm font-medium leading-tight">August 27, 2023</div>
                            </div>
                            <div className="justify-start items-center gap-1 inline-flex">
                                <div className="w-5 h-5 relative" />
                                <div className="text-black text-sm font-medium leading-tight">TBD</div>
                            </div>
                            <div className="justify-start items-center gap-1 inline-flex">
                                <div className="w-5 h-5 relative" />
                                <div className="text-black text-sm font-medium leading-tight">TBD</div>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-start py-5">
                            <PrimaryButtonLink hasArrow={true} to={"../../next-steps/lifegroups"}>
                                Sign Up
                            </PrimaryButtonLink>
                        </div>
                    </div>
                    <div className="lg:order-1 text-center">
                        <StaticImage
                            src="https://via.placeholder.com/382x215"
                            alt="CMW"
                        />
                    </div>
                </div>

            </div>

            <div className="flex-col justify-start items-start gap-y-8 flex">
                <div className="w-96"><span className="text-black text-2xl font-semibold font-['Raleway'] leading-7">Details<br /></span><span className="text-black text-2xl font-bold font-['Ubuntu'] leading-normal tracking-wider"><br /></span><span className="text-black text-base font-normal font-['Raleway'] leading-normal">Come back a week earlier to reach out to new students!<br /><br></br>Global Access students can also sign up for International Campus Reach using the same form.</span></div>
                <div className="w-96"><span className="text-black text-2xl font-semibold font-['Raleway'] leading-7">Contact<br /></span><span className="text-black text-base font-normal font-['Ubuntu'] leading-normal tracking-wide"><br /></span><span className="text-black text-base font-normal font-['Raleway'] leading-normal">Have a question? Please contact aaaa at aaaa@hmcc.net</span></div>
            </div>
        </div> */}
    </Layout>
);

export const Head = () => <Seo title="404: Not Found" />;

export default EventPage;
