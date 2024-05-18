import { Link } from "gatsby";
import * as React from "react";

const Card = ({
  img,
  date,
  title,
  children,
  containerCss,
  href = "#",
  graphQLDate,
}) => {
  function formatDateAndTime(isoDateString) {
    const date = new Date(isoDateString);

    // Extracting date components
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth() returns month from 0-11
    const day = date.getDate();

    // Extracting and converting time components to 12-hour format
    let hour = date.getHours();
    const minutes = date.getMinutes();
    const amPm = hour >= 12 ? "PM" : "AM";

    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'

    // Formatting date and time
    const formattedDate = `${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}-${year}`;
    const formattedTime = `${hour.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} ${amPm}`;

    return formattedDate + ", " + formattedTime;
  }

  const formattedDate = formatDateAndTime(date);

  return (
    <Link to={href} className="no-underline text-Shades-100 font-normal">
      <div
        className={`flex flex-col items-center gap-2 pb-5 mx-auto rounded-xl border border-solid border-b-Neutral-900 shadow-md overflow-hidden ${containerCss} h-full`}
      >
        {img}
        <div className="flex flex-col gap-1 items-start md:gap-3 px-2 w-full md:px-[1.8125rem]">
          <p className="mb-0 text-[0.625rem] leading-[0.9375rem] text-black font-medium tracking-[0.0375rem] md:text-base md:leading-[1.3125rem] md:tracking-[0.0525rem]">
            {graphQLDate || formattedDate}
          </p>
          <h3 className="text-lg leading-[1.25rem] font-semibold text-black md:leading-[1.8rem] md:text-2xl">
            {title}
          </h3>
          {children}
        </div>
      </div>
    </Link>
  );
};

export default Card;
