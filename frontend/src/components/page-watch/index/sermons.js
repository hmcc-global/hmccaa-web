import React, { useRef } from "react";
import { Link, navigate } from "gatsby";
import SermonCard from "./sermonCard";
import { GatsbyImage } from "gatsby-plugin-image";
import ComboBox from "../../shared/comboBox";
import {
  getSermonPageUrl,
  normalizeTrait,
  getNormalizedSermonTraitsFromUrl,
  getUrlFromNormalizedSermonTraits,
  SermonTraitMetadata,
} from "../../../page-generation/sermon-pages";
import { LoadContainer, showLoader } from "../../../components/svgs/loader";

// Returns an array signifying the page numbers to display, eg.
//    (10, 50) would return [1, 2, ..., 9, 10, 11, ..., 49, 50]
function getPageNumbers(currentPage, totalPages) {
  // Test cases:
  //    (3, 10) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  //    (5, 11) should return [1, 2, 3, 4, 5, 6, 7, ..., 11]
  //    (6, 11) should return [1, ..., 4, 5, 6, 7, 8, ..., 11]
  //    (7, 11) should return [1, ..., 5, 6, 7, 8, 9, 10, 11]
  let enumerate = (first, last) =>
    Array.from({ length: last - first + 1 }).map((_, i) => i + first);

  let pages = [];

  if (totalPages <= 10) {
    pages = enumerate(1, totalPages);
  } else if (currentPage <= 5) {
    pages = [...enumerate(1, 7), null, totalPages];
  } else if (currentPage + 4 >= totalPages) {
    pages = [1, null, ...enumerate(totalPages - 6, totalPages)];
  } else {
    pages = [
      1,
      null,
      ...enumerate(currentPage - 2, currentPage + 2),
      null,
      totalPages,
    ];
  }

  return pages.map(page => (page !== null ? page.toString() : page));
}

// Number line for page navigation on sermons page
const NumberLine = ({ page, currentPage, url }) => {
  if (page === null) {
    return (
      <span className="text-Accent-500 font-normal tracking-tight">· · ·</span>
    );
  } else if (parseInt(page, 10) === currentPage) {
    return <span className="font-bold text-Primary-700">{page}</span>;
  } else {
    return (
      <Link
        className="text-Accent-500 text-xl font-normal no-underline"
        to={`${url}${page === "1" ? "" : `/${page}`}#sermons-list-paged`}
      >
        {page}
      </Link>
    );
  }
};

const NumberPaging = ({ currentPage, numPages, url }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const previousPage = url + (currentPage === 2 ? "" : `/${currentPage - 1}`);
  const nextPage = `${url}/${currentPage + 1}`;

  const pages = getPageNumbers(currentPage, numPages);

  return pages.length > 1 ? (
    <div className="bg-green-500 flex flex-col items-center pt-[0.875rem] lg:pt-5 w-full justify-center">
      <div className="flex text-xl text-Shades-100 font-normal justify-between gap-x-4 lg:gap-x-8">
        {!isFirst && (
          <Link
            to={`${previousPage}#sermons-list-paged`}
            rel="prev"
            className="font-roboto text-Accent-500 no-underline"
          >
            &lt;
          </Link>
        )}
        {pages.map((page, index) => (
          <NumberLine
            key={`page-number-${index}`}
            page={page}
            currentPage={currentPage}
            url={url}
          />
        ))}
        {!isLast && (
          <Link
            to={`${nextPage}#sermons-list-paged`}
            rel="next"
            className="font-roboto text-Accent-500 no-underline"
          >
            &gt;
          </Link>
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
    refs.current.push({ current: undefined });
  }

  // Navigate to new page based upon Drop Down Selection
  const handleChange = () => {
    const selections = refs?.current
      .filter(element => element.current)
      .map(element => element?.current.querySelector("input"));

    const traits = Array.from(selections)
      .map(element => element.dataset.url)
      .map(element => (element === "" ? null : element));
    const url = getUrlFromNormalizedSermonTraits(traits);
    showLoader();
    navigate(`${url}#sermonsList`);
  };

  return (
    <div className="max-w-container items-center w-full pt-[0.9375rem] pb-[3.125rem] lg:pt-[5.3125rem] lg:pb-[9.75rem] flex flex-col gap-y-8 lg:gap-y-10 relative">
      <LoadContainer />
      <div className="flex flex-col items-center">
        <div className="subheading">Previous Sermons</div>
        <h2>Watch Again</h2>
      </div>
      <div
        id="sermons-filter"
        className="grid grid-cols-2 gap-y-3  max-w-[17rem] lg:max-w-none xs:max-w-[23.5rem] lg:flex w-full justify-center gap-x-4 lg:gap-x-5  "
      >
        {traits.map((traitInfo, idx) => (
          <ComboBox
            key={idx}
            label={SermonTraitMetadata.get(traitInfo.field).dropdownLabel}
            options={traitInfo.traits
              .sort(SermonTraitMetadata.get(traitInfo.field).sortingFn)
              .map(trait => ({
                label: trait,
                value: normalizeTrait(trait),
              }))}
            handleChange={handleChange}
            currentlySelected={currentlySelectedTraits[idx]}
            ref={refs.current[idx]}
          />
        ))}
      </div>
      <div
        id="sermons-list-paged"
        className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-5 lg:gap-y-8  py-[2px] lg:py-5"
      >
        {nodes.map(
          (
            {
              Title,
              DatePreached,
              Series: { Name: SeriesName, Background },
              Preacher: { Prefix, Name: PreacherName },
              BiblePassage,
              strapiId,
            },
            i
          ) => (
            <SermonCard
              key={i}
              title={Title}
              date={DatePreached}
              img={
                Background?.file?.childImageSharp?.gatsbyImageData ? (
                  <GatsbyImage
                    image={Background?.file?.childImageSharp?.gatsbyImageData}
                    alt={SeriesName}
                  />
                ) : (
                  <div className="py-5 w-full"></div>
                )
              }
              speaker={`${Prefix || ""} ${PreacherName}`}
              passage={BiblePassage}
              series={SeriesName}
              href={getSermonPageUrl(strapiId)}
            />
          )
        )}
      </div>
      <NumberPaging currentPage={currentPage} numPages={numPages} url={url} />
    </div>
  );
};

export default Sermons;
