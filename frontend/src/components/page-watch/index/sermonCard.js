import React from "react";
import Card from "../../shared/card";

const SermonCard = ({ img, date, title, speaker, passage, series }) => {
  const attributes = (
    <div className="pt-1 md:pt-2">
      <p className="font-normal mb-0 text-sm lg:text-lg">
        Speaker: {speaker}
        <br />
        Passage: {passage}
        <br />
        Series: {series}
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
    >
      {attributes}
    </Card>
  );
};

export default SermonCard;
