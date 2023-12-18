import React from "react";
import Card from "../../shared/card";

const SermonCard = ({ img, date, title, speaker, passage, series }) => {
  //    const attributes = (

  //    )
  const formattedDate = new Date(date).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return <Card img={img} date={formattedDate} title={title} />;
};

export default SermonCard;
