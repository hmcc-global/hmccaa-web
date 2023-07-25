import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { PrimaryButtonLink, SecondaryButtonLink} from "../components/Button";
import { container,titleContainer } from "../css/404.module.css";
import { HighlightedParagraph } from "../components/shared/highlightedParagraph";
import ErrorImage from "../images/404placeholder.png";

const NotFoundPage = () => (
  <Layout>
    <div className={container}>
      <div className="flex pb-20 mb-80">
        <div className="basis-1/3 pr-8 pt-10 pb-20 order-1">
          <h1 className="mb-20">404: Error</h1>
          <div>
            <img className="object-contain h-70 w-150" src={ErrorImage} alt="404 Error" />
          </div>
        </div>
        <div className="pl-2.5 pr-8 pt-12 order-2 mt-20 ml-14">
          <oops>OOPS!</oops>
          <h4 className="pb-20">WE COULDN'T FIND THAT PAGE</h4>
          <div className="font-medium pb-6">Try going back or clicking one of the links below:</div>
          <div className="pb-3">
            <a
              key={`browseLink-sundayCelebrationInfo`}
              href={"/"}
            >
              <link1>Sunday Celebration Info</link1>
            </a>
          </div>
          <div className="pb-3">
            <a
              key={`browseLink-lifegroupSignup`}
              href={"/"}
            >
              <link1>Life Group Sign Up</link1>
            </a>
          </div>
          <div className="pb-3">
            <a
              key={`browseLink-upcomingEvents`}
              href={"/"}
            >
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
