import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { PrimaryButtonLink, SecondaryButtonLink } from "../components/Button";
import { container, titleContainer } from "../css/404.module.css";
import ErrorImage from "../images/404placeholder.png";

const NotFoundPage = () => (
  <Layout>
    <div className={container}>
      <div className="justify-center flex pb-4 lg:pb-20 md:pb-20 sm:pb-20 mb-80 xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col">
        <div className="basis-1/3 pt-10 pb-0 lg:pb-10 md:pb-10 sm:pb-10 order-1 xl:mr-20 lg:mr-20 md:mr-20 sm:mr-20">
          <h1 className="relative text-left px-8">404: Error</h1>
          <img className="object-contain w-full xl:px-8 lg:px-8 md:px-8 sm:px-8 px-24" src={ErrorImage} alt="404 Error" />
        </div>
        <div className="pl-2.5 px-8 pt-4 lg:pt-12 order-2 mt-0 lg:mt-20 md:mt-20 sm:mt-20 mx-14 text-center lg:text-left md:text-left sm:text-left">
          <div className="xl:font-extrabold font-bold text-4xl lg:text-8xl md:text-8xl sm:text-8xl lg:tracking-widest md-tracking-widest sm:tracking-widest leading-tighter">OOPS!</div>
          <div className="font-bold text-xl lg:text-3.5xl md:text-3.5xl sm:text-3.5xl leading-tighter text-Shades-100 uppercase pb-20">WE COULDN'T FIND THAT PAGE</div>
          <div className="font-medium pb-6">Try going back or clicking one of the links below:</div>
          <div className="pb-3">
            <a key={`browseLink-sundayCelebrationInfo`} href={"/"}>
              <span>Sunday Celebration Info</span>
            </a>
          </div>
          <div className="pb-3">
            <a key={`browseLink-lifegroupSignup`} href={"/"}>
              <span>Life Group Sign Up</span>
            </a>
          </div>
          <div className="pb-3">
            <a key={`browseLink-upcomingEvents`} href={"/"}>
              <span>Upcoming Events</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;
