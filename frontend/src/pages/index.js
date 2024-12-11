import * as React from "react";
import { PrimaryButtonLink } from "../components/Button";
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
      <div className="relative text-center text-Shades-0">
        <StaticImage
          className="w-full h-full mb-0"
          src="../images/image245.png"
        />
        <h1 className="absolute mb-0 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 line-clamp-2 xl:text-[3.75rem] lg:text-[3.125rem] md:text-[2.5rem] sm:text-[2rem] w-full text-[1.5rem] font-bold leading-tight">
          Transforming lives, <br /> Transforming the world.
        </h1>
      </div>
      <div className="w-full bg-Neutral-200 justify-center flex px-4">
        <div className="flex md:flex-row flex-col justify-center items-center py-[50px] max-w-container w-full lg:gap-30 md:gap-10 gap-4">
          <h2 className="flex-1 mb-0 lg:pr-4 xl:text-[3.75rem] lg:text-[3rem] md:text-[2.75rem] sm:text-[2.5rem] text-[2rem] md:text-right text-center font-bold leading-tight tracking-[3.6px]">
            JOIN US THIS <br /> SUNDAY!
          </h2>
          <div className="flex-1 flex flex-col items-center md:items-start lg:pl-4">
            <div className="font-bold">Sunday Celebration Time</div>
            <div className="font-bold text-3xl mb-2">10:00 AM ET</div>
            <div className="flex sm:justify-start justify-center text-center ">
              <PrimaryButtonLink to={"/new"} hasArrow={true}>
                Plan Your Visit
              </PrimaryButtonLink>
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
