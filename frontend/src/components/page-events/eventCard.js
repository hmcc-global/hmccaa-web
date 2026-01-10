import * as React from "react";
import Card from "../shared/card";
import { StaticImage } from "gatsby-plugin-image";

const MAX_DESCRIPTION_LEN = 68;

const EventCard = ({ eventID, title, time, location, img, description }) => {
  if (description.length > MAX_DESCRIPTION_LEN) {
    description =
      description.substring(0, MAX_DESCRIPTION_LEN).trimEnd() + "...";
  }
  const attributes = (
    <div>
      <div className="flex items-center gap-1">
        <StaticImage
          className="mb-0"
          src="../../images/icons/map-pin-dark.svg"
          alt="Map"
        />
        <p className="mb-0 text-black text-[0.625rem] leading-[0.9375rem] font-medium tracking-[0.0375rem] md:text-base md:leading-[1.3125rem] md:tracking-[0.0525rem]">
          {location}
        </p>
      </div>
      <p className="hidden mb-0 text-[0.625rem] leading-[0.9375rem] text-black font-medium tracking-[0.0375rem] md:block md:text-base md:leading-[1.3125rem] md:tracking-[0.0525rem] md:pt-3">
        {description}
      </p>
    </div>
  );

  return (
    <Card
      title={title}
      date={time}
      img={img}
      containerCss="md:pb-[3.125rem]"
      href={`/events/${eventID}`}
    >
      {attributes}
    </Card>
  );
};

export default EventCard;
