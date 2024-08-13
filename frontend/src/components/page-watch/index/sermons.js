import React, { useRef } from "react";
import { Link, navigate } from "gatsby";
import SermonCard from "./sermonCard";
import { GatsbyImage } from "gatsby-plugin-image";
import ComboBox from "../../shared/comboBox";
import {
  normalizeTrait,
  getNormalizedSermonTraitsFromUrl,
  getUrlFromNormalizedSermonTraits,
} from "../../../page-generation/sermon-pages";

const MAX_PAGINATION = 7;
// Building the Pagination for the Sermons
const Number = ({ page, currentPage, url }) => {
  if (/.../.test(page) || parseInt(page, 10) === currentPage) {
    return /.../.test(page) ? (
      <span className="text-Accent-500 font-normal">{page}</span>
    ) : (
      <span className="font-bold text-Primary-700">{page}</span>
    );
  } else {
    return (
      <Link
        className="text-Accent-500 text-xl font-normal no-underline"
        to={`${url}${page === "1" ? "" : `/${page}`}#sermonsList`}
      >
        {page}
      </Link>
    );
  }
};

// TODO: fix everything here
// when 4 pages it goes 3214
// there's a .. and a ...
// generally just needs some refactoring
const NumberPaging = ({ currentPage, numPages, url }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const previous = url + (currentPage === 2 ? "" : `/${currentPage - 1}`);
  const next = url + `/${currentPage + 1}`;
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
        pages.unshift(previous.toString());
        pages.push(next.toString());
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
      pages.push(next.toString());
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
        pages.push(numPages.toString());
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

  return pages.length > 1 ? (
    <div className="flex flex-col items-center pt-[0.875rem] lg:pt-5">
      <div className="flex text-xl text-Shades-100 font-normal justify-between max-w-[22.8125rem] gap-x-10">
        {!isFirst ? (
          <Link
            to={`${previous}#sermonsList`}
            rel="prev"
            className="font-roboto text-Accent-500 no-underline"
          >
            &lt;
          </Link>
        ) : (
          <span className="font-roboto opacity-0 text-Shades-0">&lt;</span>
        )}
        {pages.map((page, index) => (
          <Number
            key={`page-number-${index}`}
            page={page}
            currentPage={currentPage}
            url={url}
          />
        ))}
        {!isLast ? (
          <Link
            to={`${next}#sermonList`}
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
  ) : (
    ""
  );
};

// Building the Sermons List
const Sermons = ({
  sermons: { nodes },
  pageContext: { url, currentPage, numPages, traits },
}) => {
  const currentlySelectedTraits = getNormalizedSermonTraitsFromUrl(url);
  let refs = useRef([]);
  for (let _ in traits) {
    refs.current.push({current:undefined});
  }

  // Navigate to new page based upon Drop Down Selection
  const handleChange = () => {
    const selections = document
      .getElementById("sermons-filter")
      .querySelectorAll(".combo-box-container input");

    const traits = Array.from(selections)
      .map(element => element.dataset.url)
      .map(element => (element === "" ? null : element));
    console.log("handleChange", traits);
    const url = getUrlFromNormalizedSermonTraits(traits);
    console.log(url);
    navigate(`${url}#sermonsList`);
  };

  console.log(nodes, "***", currentPage, numPages, url, traits);

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
        {traits.map((traits, idx) => (
          <ComboBox
            key={idx}
            label={traits.dropdownLabel}
            options={traits.traits.map(trait => ({
              label: trait,
              value: normalizeTrait(trait),
            }))}
            handleChange={handleChange}
            currentlySelected={currentlySelectedTraits[idx]}
            ref={refs.current[idx]}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-5 lg:gap-y-8  py-[2px] lg:py-5">
        {nodes.map(
          (
            {
              Title,
              DatePreached,
              Series: { Name: SeriesName, Background },
              Preacher: { Prefix, Name: PreacherName },
              BiblePassage,
              strapi_id,
            },
            i
          ) => (
            <SermonCard
              key={i}
              title={Title}
              date={DatePreached}
              img={
                Background?.localFile?.childImageSharp?.gatsbyImageData ? (
                  <GatsbyImage
                    image={
                      Background?.localFile?.childImageSharp?.gatsbyImageData
                    }
                    alt={SeriesName}
                  />
                ) : (
                  <div className="py-5 w-full"></div>
                )
              }
              speaker={`${Prefix || ""} ${PreacherName}`}
              passage={BiblePassage}
              series={SeriesName}
              href={`/watch/sermons/${strapi_id}`}
            />
          )
        )}
      </div>
      <NumberPaging currentPage={currentPage} numPages={numPages} url={url} />
    </div>
  );
};

export default Sermons;
