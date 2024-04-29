import * as React from "react";
import { Link, navigate } from "gatsby";
import SermonCard from "./sermonCard";
import { StaticImage } from "gatsby-plugin-image";
import ComboBox from "../../shared/comboBox";

const MAX_PAGINATION = 7;
// Building the Pagination for the Sermons
const NumberPaging = ({ page, currentPage }) => {
  if (/.../.test(page) || parseInt(page, 10) === currentPage) {
    return /.../.test(page) ? (
      <span>{page}</span>
    ) : (
      <span className="font-normal">{page}</span>
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

// Building the Sermons List
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
  // Build an array for what pages number to show with ellipsis if needed
  if (numPages > MAX_PAGINATION) {
    const maxLeft = 4;
    const maxRight = numPages - 2;
    if (currentPage < maxLeft) {
      if (isFirst) {
        for (let index = currentPage + 1; index < maxLeft; index++) {
          pages.push(index.toString());
        }
      } else if (currentPage === 2) {
        const previous = currentPage - 1;
        const next = currentPage + 1;
        pages.unshift(previous);
        pages.push(next);
      } else {
        for (let index = currentPage - 1; index > 0; index--) {
          pages.unshift(index.toString());
        }
      }

      pages.push("...");
      pages.push(numPages.toString());
    } else if (currentPage < maxRight) {
      const next = currentPage + 1;
      const previous = currentPage - 1;
      pages.unshift(previous.toString());
      pages.unshift("...");
      pages.unshift("1");
      pages.push(next);
      pages.push("..");
      pages.push(numPages.toString());
    } else {
      const rightEnd = numPages - 1;
      if (maxRight === currentPage) {
        for (let index = maxRight + 1; index <= numPages; index++) {
          pages.push(index.toString());
        }
      } else if (rightEnd === currentPage) {
        const previous = currentPage - 1;
        pages.unshift(previous.toString());
        pages.push(numPages);
      } else {
        for (let index = currentPage - 1; index >= maxRight; index--) {
          pages.unshift(index.toString());
        }
      }
      pages.unshift("...");
      pages.unshift("1");
    }
  } else {
    for (let index = 0; index < MAX_PAGINATION && index < numPages; index++) {
      const page = (index + 1).toString();
      if (page < currentPage) {
        pages.unshift(page);
      } else if (page > currentPage) {
        pages.push(page);
      }
    }
  }
  // Navigate to new page based upon Drop Down Selection
  const handleChange = () => {
    const selections = document
      .getElementById("sermons-filter")
      .querySelectorAll(".combo-box-container input");

    const values = Array.from(selections)
      .map(element => element.dataset.url)
      .reduce(
        (accumulator, current) =>
          current ? `${accumulator}/${current}` : accumulator,
        ""
      );
    (values || filterValue) && navigate(`/watch${values}`);
  };

  return (
    <div className="max-w-container items-center w-full pt-[0.9375rem] pb-[3.125rem] lg:pt-[5.3125rem] lg:pb-[9.75rem] flex flex-col gap-y-8 lg:gap-y-10">
      <div className="flex flex-col items-center">
        <div className="subheading">Previous Sermons</div>
        <h2>Watch Again</h2>
      </div>
      <div
        id="sermons-filter"
        className="grid grid-cols-2 gap-y-3  max-w-[17rem] lg:max-w-none xs:max-w-[23.5rem] lg:flex w-full justify-center gap-x-4 lg:gap-x-5  "
      >
        <ComboBox
          label="Speaker"
          options={speakers}
          handleChange={handleChange}
          filterValue={filterValue}
        />
        <ComboBox
          label="Series"
          options={series}
          handleChange={handleChange}
          filterValue={filterValue}
        />
        <ComboBox
          label="Books"
          options={books}
          handleChange={handleChange}
          filterValue={filterValue}
        />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-5 lg:gap-y-8  py-[2px] lg:py-5">
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
      <div className="flex flex-col items-center pt-[0.875rem] lg:pt-5">
        <div className="flex text-xl lg:text-3xl text-Shades-100 font-normal justify-between max-w-[22.8125rem] gap-x-10">
          {!isFirst ? (
            <Link
              to={previous}
              rel="prev"
              className="font-roboto text-Accent-500 no-underline"
            >
              &lt;
            </Link>
          ) : (
            <span className="font-roboto opacity-0 text-Shades-0">&lt;</span>
          )}
          {pages.map((page, index) => (
            <NumberPaging
              key={`page-number-${index}`}
              page={page}
              currentPage={currentPage}
            />
          ))}
          {!isLast ? (
            <Link
              to={next}
              rel="next"
              className="font-roboto text-Accent-500 no-underline"
            >
              &gt;
            </Link>
          ) : (
            <span className="font-roboto opacity-0 text-Shades-0">&lt;</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sermons;
