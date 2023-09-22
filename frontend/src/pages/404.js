import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { PrimaryButtonLink, SecondaryButtonLink} from "../components/Button";
import { container,titleContainer } from "../css/404.module.css";
import ErrorImage from "../images/404placeholder.png";

const NotFoundPage = () => (
  <Layout>
    <div className={container}>
      <div className="justify-center flex pb-20 mb-80 xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col">
        <div className="flex justify-center basis-1/3 pr-8 pt-10 pb-20 order-1">
          <h1 className="relative mb-20">404: Error</h1>
          <div>
            <img className="object-contain w-full h-full" src={ErrorImage} alt="404 Error" />
          </div>
        </div>
        <div className="bg-Primary-500 pl-2.5 pr-8 pt-12 order-2 mt-20 ml-14">
          <oops>OOPS!</oops>
          <h4 className="pb-20">WE COULDN'T FIND THAT PAGE</h4>
          <div className="font-medium pb-6">Try going back or clicking one of the links below:</div>
          <div className="pb-3">
            <a key={`browseLink-sundayCelebrationInfo`} href={"/"}>
              <link1>Sunday Celebration Info</link1>
            </a>
          </div>
          <div className="pb-3">
            <a key={`browseLink-lifegroupSignup`} href={"/"}>
              <link1>Life Group Sign Up</link1>
            </a>
          </div>
          <div className="pb-3">
            <a key={`browseLink-upcomingEvents`} href={"/"}>
              <link1>Upcoming Events</link1>
            </a>
          </div>
        </div>
      </div> 
    </div>
  </Layout>
);

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;
