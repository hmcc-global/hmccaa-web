import * as React from "react";
import { SecondaryButtonLink } from "../Button";
import { StaticImage } from "gatsby-plugin-image";

const UpcomingEvents = () => (
  <div className="flex flex-col lg:flex-row gap-y-5 items-center lg:items-start content-image">
    <div className="image-container">
      <StaticImage
        src="../../images/upcomingEventsImg.jpg"
        width={540}
        alt="UpcomingEventsImg"
      />
    </div>
    <div className="w-full text-left content-container">
      <div className="subheading">upcoming events in Ann Arbor</div>
      <h2>
        Here<span>&#39;</span>s what<span>&#39;</span>s happening next.
      </h2>
      <p className="pt-5 text-base lg:text-lg">
        Events are ways we gather as a church body to better love and care for
        those across different life stages. Don’t miss out on the opportunities
        to have fun and get to know others!
      </p>
      <div className="lg:flex lg:justify-start">
        <SecondaryButtonLink to="/events" hasArrow={true}>
          More Events
        </SecondaryButtonLink>
      </div>
    </div>
  </div>
);

export default UpcomingEvents;
