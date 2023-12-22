import React from "react";
import Card from "../../shared/card";

const SermonCard = ({ img, date, title, speaker, passage, series }) => {
  const attributes = (
    <div className="pt-1 md:pt-2">
      <p className="leading-6 font-normal text-lg mb-0">
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
    <Card img={img} date={formattedDate} title={title}>
      {attributes}
    </Card>
  );
};

export default SermonCard;
