import React from "react";
import Card from "../../shared/card";

const SermonCard = ({ img, date, title, speaker, passage, series, href }) => {
  const attributes = (
    <div className="pt-1 md:pt-2">
      <p className="font-normal mb-0 text-sm lg:text-lg">
        Speaker: {speaker}
        <br />
        <span className="flex gap-x-1">
          <span>Passage:</span>
          <span>
            {passage
              .map(({ Book, ChapterVerse }) => ({
                Book: /\(\d+/.test(Book)
                  ? `${Book.substring(
                      Book.search(/\d+/),
                      Book.search(/\d+/) +
                        Book.substring(Book.search(/\d+/)).search(/\D/)
                    )} ${Book.substring(0, Book.search(/\(/) - 1)}`
                  : Book,
                ChapterVerse,
              }))
              .map(({ Book, ChapterVerse }) => `${Book} ${ChapterVerse}`)
              .join(", ")}
          </span>
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
