import * as React from "react";
import { Link, navigate } from "gatsby";
import SermonCard from "./sermonCard";
import { StaticImage } from "gatsby-plugin-image";

const NumberPaging = ({ page, currentPage }) => {
  if (/.../.test(page) || parseInt(page, 10) === currentPage) {
    return /.../.test(page) ? (
      <span>{page}</span>
    ) : (
      <span className="font-black">{page}</span>
    );
  } else {
    return (
      <Link
        className="text-Shades-100 no-underline"
        to={`/watch/${page === "1" ? "" : page}`}
      >
        {page}
      </Link>
    );
  }
};

const Sermons = ({
  sermons: { nodes },
  pageContext: {
    currentPage,
    numPages,
    speakers,
    series,
    books,
    filterValue = null,
  },
}) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const previous =
    currentPage - 1 === 1
      ? `/watch/${filterValue ? filterValue + "/" : ""}`
      : `/watch/${filterValue ? filterValue + "/" : ""}${currentPage - 1}`;
  const next = `/watch/${filterValue ? filterValue + "/" : ""}${
    currentPage + 1
  }`;
  const pages = [currentPage.toString()];
  if (numPages > 6) {
    if (isFirst) {
      for (let index = currentPage + 1; index < 4; index++) {
        pages.push(index.toString());
      }
      pages.push("...");
      pages.push(numPages.toString());
    } else {
      pages.unshift((currentPage - 1).toString());
      if (isLast) {
        pages.unshift((currentPage - 2).toString());
        pages.unshift("...");
      } else {
        pages.push((currentPage + 1).toString());
        if (!pages.includes("1")) {
          pages.unshift("...");
        }
        if (!pages.includes(numPages.toString())) {
          if (currentPage + 2 < numPages) {
            pages.push("...");
          }
          pages.push(numPages.toString());
        }
      }
    }
  } else {
    for (let index = 0; index < 6 && index < numPages; index++) {
      const page = (index + 1).toString();
      if (page < currentPage) {
        pages.unshift(page);
      } else if (page > currentPage) {
        pages.push(page);
      }
    }
  }
  const handleChange = () => {
    const selections = document
      .getElementById("sermons-filter")
      .querySelectorAll("select");
    const values = Array.from(selections)
      .map(element => element.value)
      .reduce(
        (accumulator, current) =>
          current ? `${accumulator}/${current}` : accumulator,
        ""
      );

    values && navigate(`/watch${values}`);
  };

  const selectValues = filterValue?.split("/");
  return (
    <div>
      <div className="flex flex-col items-center">
        <div id="sermons-filter" className="flex w-full justify-center gap-4">
          <span>Filters</span>
          <select
            className="border-Shades-100 border-[1px]"
            onChange={handleChange}
          >
            <option key="speaker-0" value="">
              Speaker
            </option>
            {speakers.map(
              ({ label, value }, index) =>
                (selectValues && selectValues.includes(value) && (
                  <option
                    key={`speaker-${index + 1}`}
                    value={value}
                    selected={true}
                  >
                    {label}
                  </option>
                )) || (
                  <option key={`speaker-${index + 1}`} value={value}>
                    {label}
                  </option>
                )
            )}
          </select>
          <select
            className="border-Shades-100 border-[1px]"
            onChange={handleChange}
          >
            <option key="series-0" value="">
              Series
            </option>
            {series.map(
              ({ label, value }, index) =>
                (selectValues && selectValues.includes(value) && (
                  <option
                    key={`series-${index + 1}`}
                    value={value}
                    selected={true}
                  >
                    {label}
                  </option>
                )) || (
                  <option key={`series-${index + 1}`} value={value}>
                    {label}
                  </option>
                )
            )}
          </select>
          <select
            className="border-Shades-100 border-[1px]"
            onChange={handleChange}
          >
            <option key="book-0" value="">
              Book
            </option>
            {books.map(
              ({ label, value }, index) =>
                (selectValues && selectValues.includes(value) && (
                  <option
                    key={`book-${index + 1}`}
                    value={value}
                    selected={true}
                  >
                    {label}
                  </option>
                )) || (
                  <option key={`book-${index + 1}`} value={value}>
                    {label}
                  </option>
                )
            )}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 py-36 max-w-container px-4">
        {nodes.map((sermon, i) => (
          <SermonCard
            key={i}
            title={sermon.Title}
            date={sermon.DatePreached}
            img={
              <StaticImage
                src="../../../images/Sermon-Ad-Selah-April.png"
                alt="Selah"
              />
            }
            speaker={sermon.Preacher.Prefix + " " + sermon.Preacher.Name}
            passage={sermon.Title}
            series={sermon.Series.Name}
          />
        ))}
      </div>
      <div className="flex flex-col items-center">
        <div className="flex text-3xl text-Shades-100 font-normal justify-between max-w-[22.8125rem] w-full">
          {!isFirst ? (
            <Link
              to={previous}
              rel="prev"
              className="font-roboto text-Accent-500 no-underline"
            >
              &lt;
            </Link>
          ) : (
            <span className="font-roboto">&nbsp;</span>
          )}
          {pages.map((page, index) => (
            <NumberPaging
              key={`page-number-${index}`}
              page={page}
              currentPage={currentPage}
            />
          ))}
          {!isLast && (
            <Link
              to={next}
              rel="next"
              className="font-roboto text-Accent-500 no-underline"
            >
              &gt;
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sermons;
