import * as React from "react";
import { ButtonLink, PrimaryButtonLink } from "../components/Button";
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
      <NotificationBar />
      <div className="relative text-center text-Shades-0 bg-Primary-700">
        <div className="mx-auto">
          <div className="max-w-[90rem] w-full mx-auto relative overflow-hidden">
            <div className="sm:pb-[25rem] pb-[38rem] md:pb-[64.723%]">
              <StaticImage
                className="w-full mb-0 absolute [@media(min-width:500px)]:left-0 top-0 min-w-[45rem] -left-1/2"
                src="../images/main-cover.png"
              />
            </div>
          </div>
          <h1 className="uppercase font-bebas absolute mb-0 top-1/2 -translate-y-[3.75rem]  line-clamp-2 md:text-5xl text-3xl w-full font-bold leading-tight tracking-[0.04em]">
            Transform lives, Transform the world.
          </h1>
        </div>
        <div className="w-full bg-Primary-700/[0.8] flex justify-center px-4 absolute bottom-0">
          <div className="flex md:flex-row flex-col md:py-12 py-6  md:gap-10 gap-4">
            <h2 className="flex-1 mb-0 lg:pr-4 md:text-3xl text-2xl md:text-left text-center font-semibold leading-tight -tracking-[0.02em] text-Shades-0 md:whitespace-nowrap ">
              JOIN US THIS SUNDAY @ 10 AM
            </h2>
            <div className="flex justify-center">
              <ButtonLink
                to={"/connect"}
                hasArrow={true}
                className="text-Shades-0 border-Accent-500 border-solid border-2 md:text-lg text-base"
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
