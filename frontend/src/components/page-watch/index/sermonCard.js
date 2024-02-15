import React from "react";
import Card from "../../shared/card";

const SermonCard = ({ img, date, title, speaker, passage, series, href }) => {
  const attributes = (
    <div className="pt-1 md:pt-2">
      <p className="font-normal mb-0 text-sm md:text-lg flex flex-col">
        <span className="text-lg">Speaker: {speaker}</span>
        <span>Passage: {passage}</span>
        <span>Series: {series}</span>
      </p>
    </div>
  );
  const formattedDate = new Date(date).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Card
      img={img}
      date={formattedDate}
      title={title}
      containerCss="md:pb-[3.5625rem]"
      href={href}
    >
      {attributes}
    </Card>
  );
};

export default SermonCard;
