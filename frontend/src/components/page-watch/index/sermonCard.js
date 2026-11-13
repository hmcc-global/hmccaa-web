import React from "react";
import Card from "../../shared/card";
import { getBookName } from "../../../page-generation/strapi-bible";
import { formatEventDateAsString } from "../../page-events/event-processing-util";

const SermonCard = ({ img, date, title, speaker, passage, series, href }) => {
  passage = passage.map(
    ({ Book, ChapterVerse }) => `${getBookName(Book)} ${ChapterVerse}`
  );
  if (passage.length > 3) {
    passage = [...passage.slice(0, 3), "...."];
  }
  const attributes = (
    <div className="py-4 font-normal text:sm lg:text-lg">
      <p className="mb-0 flex gap-1">
        <span>Speaker:</span> <span className="font-bold">{speaker}</span>
      </p>
      <p className="mb-0 flex gap-x-1">
        <span>Passage{passage.length > 1 && "s"}:</span>
        <span className="font-bold">{passage.join(", ")}</span>
      </p>
      <p className="mb-0 flex gap-1">
        <span>Series:</span>
        <span className="font-bold"> {series}</span>
      </p>
    </div>
  );
  let [year, month, day] = date.split("-");
  return (
    <Card
      img={img}
      graphQLDate={formatEventDateAsString(
        { start: new Date(year, parseInt(month, 10) - 1, day) },
        false,
        false
      )}
      title={title}
      containerCss="md:pb-[3.5625rem]"
      href={href}
    >
      {attributes}
    </Card>
  );
};

export default SermonCard;
