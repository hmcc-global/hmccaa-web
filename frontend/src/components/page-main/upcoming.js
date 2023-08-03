import * as React from "react";
import { SecondaryButtonLink } from "../Button";
import upcomingEventsImg from "../../images/upcomingEventsImg.png";

const UpcomingEvents = () => (
  <div className="flex gap-x-sm py-31 px-32">
    <div>
      <img src={upcomingEventsImg} alt="UpcomingEventsImg" />
    </div>
    <div className="w-2/4">
      <div className="subheading">upcoming events</div>
      <h2>
        Here<span>&#39;</span>s what<span>&#39;</span>s happening next.
      </h2>
      <p className="pt-5">
        Events are ways we gather as a church body to better love and care for
        those across different life stages. Don’t miss out on the opportunities
        to have fun and get to know others!
      </p>
      <div className="flex">
        <SecondaryButtonLink hasArrow={true}>More Events</SecondaryButtonLink>
      </div>
    </div>
  </div>
);

export default UpcomingEvents;
