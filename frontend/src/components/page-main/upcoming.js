import * as React from "react";
import { SecondaryButtonLink } from "../Button";
import { StaticImage } from "gatsby-plugin-image";

const UpcomingEvents = () => (
  <div className="flex flex-col lg:flex-row gap-y-5 gap-x-30 pt-5 pb-[3.0625rem] lg:py-31 px-4 lg:px-32 items-center lg:items-start">
    <div>
      <StaticImage
        src="../../images/upcomingEventsImg.png"
        alt="UpcomingEventsImg"
      />
    </div>
    <div className="w-full lg:w-2/4 text-center lg:text-left">
      <div className="subheading">upcoming events</div>
      <h2>
        Here<span>&#39;</span>s what<span>&#39;</span>s happening next.
      </h2>
      <p className="pt-5 mb- text-base lg:text-lg">
        Events are ways we gather as a church body to better love and care for
        those across different life stages. Don’t miss out on the opportunities
        to have fun and get to know others!
      </p>
      <div className="flex justify-center lg:justify-start">
        <SecondaryButtonLink hasArrow={true}>More Events</SecondaryButtonLink>
      </div>
    </div>
  </div>
);

export default UpcomingEvents;
