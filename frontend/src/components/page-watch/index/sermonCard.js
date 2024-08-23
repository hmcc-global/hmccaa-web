import React from "react";
import Card from "../../shared/card";
import { getBookName } from "../../../page-generation/strapi-bible";

const SermonCard = ({ img, date, title, speaker, passage, series, href }) => {
  passage = passage.map(
    ({ Book, ChapterVerse }) => `${getBookName(Book)} ${ChapterVerse}`
  );
  if (passage.length > 3) {
    passage = [...passage.slice(0, 3), "...."];
  }
  const attributes = (
    <div className="pt-1 md:pt-2">
      <p className="font-normal mb-0 text-sm lg:text-lg">
        Speaker: {speaker}
        <br />
        <span className="flex gap-x-1">
          <span>Passage{passage.length > 1 && "s"}:</span>
          <span>{passage.join(", ")}</span>
        </span>
        Series: {series}
      </p>
    </div>
  );

  return (
    <Card
      img={img}
      graphQLDate={date}
      title={title}
      containerCss="md:pb-[3.5625rem]"
      href={href}
    >
      {attributes}
    </Card>
  );
};

export default SermonCard;
