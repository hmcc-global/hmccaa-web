import * as React from "react";
import Card from "../shared/card";
import { StaticImage } from "gatsby-plugin-image";
import { formatEventDateAsObject } from "./event-processing-util";

const MAX_DESCRIPTION_LEN = 102;

const EventCard = ({ eventID, title, time, location, img, description }) => {
  if (description.length > MAX_DESCRIPTION_LEN) {
    description =
      description.substring(0, MAX_DESCRIPTION_LEN).trimEnd() + "...";
  }
  const { date: dates, time: times } = formatEventDateAsObject(
    time,
    true,
    false
  );
  const attributes = (
    <div className="py-1 flex flex-col gap-1">
      {times && (
        <div className="flex items-center gap-1">
          <StaticImage
            className="mb-0"
            src="../../images/icons/clock-icon.png"
            alt="Map"
            width={20}
          />
          <p className="mb-0 text-black text-[0.625rem] leading-[0.9375rem] tracking-[0.0375rem] md:text-lg md:leading-[1.3125rem] md:tracking-[0.0525rem]">
            {times}
          </p>
        </div>
      )}
      <div className="flex items-center gap-1">
        <StaticImage
          className="mb-0"
          src="../../images/icons/map-pin-icon.png"
          alt="Map"
          width={20}
        />
        <p className="mb-0 text-black text-[0.625rem] leading-[0.9375rem] tracking-[0.0375rem] md:text-lg md:leading-[1.3125rem] md:tracking-[0.0525rem]">
          {location}
        </p>
      </div>
      <p className="hidden mb-0 text-[0.625rem] leading-[0.9375rem] text-black tracking-[0.0375rem] md:block md:text-lg md:leading-[1.3125rem] md:tracking-[0.0525rem] py-4">
        {description}
      </p>
    </div>
  );

  return (
    <Card title={title} date={dates} img={img} href={`/events/${eventID}`}>
      {attributes}
    </Card>
  );
};

export default EventCard;
