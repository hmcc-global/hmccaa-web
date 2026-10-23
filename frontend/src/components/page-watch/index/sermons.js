import React, { useMemo, useRef } from "react";
import SermonCard from "./sermonCard";
import { GatsbyImage } from "gatsby-plugin-image";
import ComboBox from "../../shared/comboBox";
import {
  getSermonPageUrl,
  normalizeTrait,
  getUrlFromNormalizedSermonTraits,
  SermonTraits,
  SermonTraitMetadata,
} from "../../../page-generation/sermon-pages";
import { LoadContainer } from "../../../components/svgs/loader";

// Returns an array signifying the page numbers to display, eg.
//    (10, 50) would return [1, ..., 8, 9, 10, 11, 12, ..., 50]
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

const getPageUrl = (url, page) => `${url}${page === 1 ? "" : `/${page}`}/`;

// A plain left click updates the list in place; other clicks (new tab, modifier keys) and crawlers follow href
const ListingLink = ({ to, navigateListing, children, ...props }) => (
  <a
    href={`${to}#sermons-list-paged`}
    onClick={event => {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }
      event.preventDefault();
      navigateListing(to, "#sermons-list-paged");
    }}
    {...props}
  >
    {children}
  </a>
);

// Number line for page navigation on sermons page
const NumberLine = ({ page, currentPage, url, navigateListing }) => {
  if (page === null) {
    return (
      <span className="text-Accent-500 font-normal tracking-tight">· · ·</span>
    );
  } else if (parseInt(page, 10) === currentPage) {
    return <span className="font-bold text-Primary-700">{page}</span>;
  } else {
    return (
      <ListingLink
        className="text-Accent-500 text-xl font-normal no-underline"
        to={getPageUrl(url, parseInt(page, 10))}
        navigateListing={navigateListing}
      >
        {page}
      </ListingLink>
    );
  }
};

const NumberPaging = ({ currentPage, numPages, url, navigateListing }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;

  const pages = getPageNumbers(currentPage, numPages);

  return pages.length > 1 ? (
    <div className="bg-green-500 flex flex-col items-center pt-[0.875rem] lg:pt-5 w-full justify-center">
      <div className="flex text-xl text-Shades-100 font-normal justify-between gap-x-4 lg:gap-x-8">
        {!isFirst && (
          <ListingLink
            to={getPageUrl(url, currentPage - 1)}
            navigateListing={navigateListing}
            rel="prev"
            className="font-roboto text-Accent-500 no-underline"
          >
            &lt;
          </ListingLink>
        )}
        {pages.map((page, index) => (
          <NumberLine
            key={`page-number-${index}`}
            page={page}
            currentPage={currentPage}
            url={url}
            navigateListing={navigateListing}
          />
        ))}
        {!isLast && (
          <ListingLink
            to={getPageUrl(url, currentPage + 1)}
            navigateListing={navigateListing}
            rel="next"
            className="font-roboto text-Accent-500 no-underline"
          >
            &gt;
          </ListingLink>
        )}
      </div>
    </div>
  ) : (
    ""
  );
};

// Placeholder while a client-only route hydrates: keeps the layout, shows the loader
const pendingListing = {
  traits: Object.values(SermonTraits).map(field => ({ field, traits: [] })),
  normalizedTraits: [],
  nodes: [],
  currentPage: 1,
  numPages: 1,
};

// Building the Sermons List
const Sermons = ({ listing, navigateListing }) => {
  const isPending = listing === undefined;
  const {
    url,
    currentPage,
    numPages,
    traits,
    nodes,
    normalizedTraits: currentlySelectedTraits,
  } = listing ?? pendingListing;
  let refs = useRef([]);

  refs.current = useMemo(() => {
    const list = [];
    for (let _ in traits) {
      list.push({ current: undefined });
    }
    return list;
  }, [traits]);

  // Show the listing for the new Drop Down Selection
  const handleChange = () => {
    const selections = refs?.current
      .filter(element => element.current)
      .map(element => element?.current.querySelector("input"));

    const traits = Array.from(selections)
      .map(element => element.dataset.url)
      .map(element => (element === "" ? null : element));
    navigateListing(getUrlFromNormalizedSermonTraits(traits), "#sermonsList");
  };

  let getBackgroundImg = (Background, SeriesName) => {
    let data = Background?.file?.childImageSharp?.gatsbyImageData;
    if (data) {
      return <GatsbyImage image={data} alt={SeriesName} />;
    }
    let url = Background?.url;
    if (url) {
      return (
        <img src={`${process.env.STRAPI_API_URL}${url}`} alt={SeriesName} />
      );
    }
    console.warn(
      `[DEBUG][sermon-series] Missing background image for series "${SeriesName}"`
    );
    return <div className="py-5 w-full"></div>;
  };

  return (
    <div className="max-w-container items-center w-full pt-[0.9375rem] pb-[3.125rem] lg:pt-[5.3125rem] lg:pb-[9.75rem] flex flex-col gap-y-8 lg:gap-y-10 relative">
      <LoadContainer loading={isPending} />
      <div className="flex flex-col items-center">
        <div className="subheading">Previous Sermons</div>
        <h2>Watch Again</h2>
      </div>
      {/* Keyed by filter: each ComboBox keeps its selection and option list in its own state */}
      <div
        key={`filters:${url}`}
        id="sermons-filter"
        className={`grid grid-cols-2 gap-y-3  lg:max-w-none xs:max-w-[23.5rem] lg:flex w-full justify-center gap-x-4 lg:gap-x-5  ${
          isPending ? "invisible" : ""
        }`}
      >
        {traits.map((traitInfo, idx) => (
          <ComboBox
            key={idx}
            label={SermonTraitMetadata.get(traitInfo.field).dropdownLabel}
            options={traitInfo.traits
              .sort(SermonTraitMetadata.get(traitInfo.field).sortingFn)
              .map(trait => ({
                label: trait.replace(/_/g, " "), // Replace underscores with spaces for display
                value: normalizeTrait(trait), // Keep normalized value for URLs
              }))}
            handleChange={handleChange}
            currentlySelected={currentlySelectedTraits[idx]}
            ref={refs.current[idx]}
          />
        ))}
      </div>
      <div
        id="sermons-list-paged"
        className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-5 lg:gap-y-8  py-[2px] lg:py-5"
      >
        {nodes.map(
          ({
            Title,
            DatePreached,
            Series: { Name: SeriesName, Background },
            Preacher: { Prefix, Name: PreacherName },
            BiblePassage,
            strapiId,
          }) => (
            <SermonCard
              key={strapiId}
              title={Title}
              date={DatePreached}
              img={getBackgroundImg(Background, SeriesName)}
              speaker={`${Prefix || ""} ${PreacherName}`}
              passage={BiblePassage}
              series={SeriesName}
              href={getSermonPageUrl(strapiId)}
            />
          )
        )}
      </div>
      <NumberPaging
        currentPage={currentPage}
        numPages={numPages}
        url={url}
        navigateListing={navigateListing}
      />
    </div>
  );
};

export default Sermons;
