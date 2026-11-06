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
  return (
    <Link to={href} className="no-underline text-Shades-100 font-normal">
      <div
        className={`flex flex-col items-center mx-auto rounded-sm shadow-md-lg overflow-hidden ${containerCss} h-full`}
      >
        <div className="relative pb-[63.16%] w-full">
          <div className="absolute inset-0">{img}</div>
        </div>
        <div className="flex flex-col gap-2 items-start px-2 w-full md:px-10 pt-8 pb-5">
          <p className="mb-0 text-[0.625rem] leading-[0.9375rem] text-Primary-500 font-bold tracking-[0.0375rem] md:text-base md:leading-[1.3125rem] md:tracking-[0.0525rem]">
            {graphQLDate || date}
          </p>
          <h3 className="text-lg leading-[1.25] font-normal text-black md:leading-[1.2] md:text-3xl">
            {title}
          </h3>
          {children}
        </div>
      </div>
    </Link>
  );
};

export default Card;
