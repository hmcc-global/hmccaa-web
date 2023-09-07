import * as React from "react";
import { PrimaryButtonLink } from "../components/Button";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import WelcomeMain from "../components/page-main/welcomeMain";
import UpcomingEvents from "../components/page-main/upcoming";

const IndexPage = () => (
  <Layout>
    <div className="w-full">
      <div className="relative text-center text-Shades-0">
        <StaticImage
          className="w-full h-full mb-0"
          src="../images/image245.png"
        />
        <h1 className="absolute mb-0 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 line-clamp-2 xl:text-[60px] lg:text-[50px] md:text-[40px] sm:text-[35px] w-full text-[25px] font-bold leading-tight">
          Transform lives, <br /> Transform the world.
        </h1>
      </div>
      <div className="w-full bg-Neutral-200 justify-center flex px-4">
        <div className="flex md:flex-row flex-col justify-between items-center py-[50px] max-w-container w-full gap-4">
          <h2 className="mb-0 xl:text-[60px] lg:text-[55px] md:text-[50px] sm:text-[45px] text-[40px] sm:text-left text-center font-bold leading-tight tracking-[3.6px]">
            JOIN US THIS <br /> SUNDAY!
          </h2>
          <div className="flex flex-col items-center md:items-start">
            <div className="font-bold">SERVICE TIMES</div>
            <div className="font-bold text-3xl mb-2">10:00 AM ET</div>
            <div className="flex sm:justify-start justify-center text-center ">
              <PrimaryButtonLink to={"/connect"} hasArrow={true}>
                Plan Your Visit
              </PrimaryButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <WelcomeMain />
    <UpcomingEvents />
  </Layout>
);

export const Head = () => <Seo title="Harvest Mission Community Church" />;

export default IndexPage;
