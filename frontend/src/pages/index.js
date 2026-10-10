import * as React from "react";
import { ButtonLink } from "../components/Button";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import WelcomeMain from "../components/page-main/welcomeMain";
import UpcomingEvents from "../components/page-main/upcoming";
import GetConnectedCircle from "../components/page-main/getconnected";
import GetInvolved from "../components/page-main/getinvolved";
import NotificationBar from "../components/shared/notificationBar";

const IndexPage = () => (
  <Layout>
    <div className="w-full">
      <NotificationBar
        forceShow={true}
        linkTo="/announcement"
        linkText="Link to page"
      />
      <div className="relative text-center 1.5xl:text-left text-Shades-0 bg-Primary-700">
        <div className="mx-auto">
          <div className="w-full mx-auto relative overflow-hidden">
            <div className=" pb-[25rem] md:pb-[60%] 1.5xl:pb-[52%] 2.5xl:pb-[35%] [&>.gatsby-image-wrapper]:absolute home-image-wrapper">
              <StaticImage
                className="w-full mb-0 inset-0"
                layout="fullWidth"
                alt="Sunday Celebration"
                src="../images/home-landing.jpg"
                imgStyle={{
                  objectFit: undefined,
                }}
              />
            </div>
          </div>
          <h1 className="uppercase font-bebas absolute mb-0 top-1/2 -translate-y-[4.6875rem]  line-clamp-2 md:text-6xl text-3xl w-full font-semibold leading-tight tracking-[0.04em] 1.5xl:pl-20">
            <span className="block">Transform lives,</span>
            <span className="block">Transform the world.</span>
          </h1>
        </div>
        <div className="w-full bg-Primary-700/[0.8] flex justify-center px-4 absolute bottom-0">
          <div className="flex md:flex-row flex-col md:py-12 py-6  md:gap-10 gap-4">
            <h2 className="flex-1 mb-0 lg:pr-4 md:text-3xl text-2xl md:text-left text-center font-semibold leading-tight -tracking-[0.02em] text-Shades-0 md:whitespace-nowrap ">
              JOIN US THIS SUNDAY @ 10 AM
            </h2>
            <div className="lg:flex lg:justify-center">
              <ButtonLink
                to={"/new"}
                hasArrow={true}
                customClassName={{
                  buttonArrow: "fill-Accent-50",
                }}
                className="text-Shades-0 border-Accent-500 border-solid border-2 md:text-lg text-base hover:bg-Accent-500"
              >
                Plan Your Visit
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="content-padding-full">
      <WelcomeMain />
      <GetConnectedCircle />
      <GetInvolved />
      <UpcomingEvents />
    </div>
  </Layout>
);

export const Head = () => <Seo title="Harvest Mission Community Church" />;

export default IndexPage;
