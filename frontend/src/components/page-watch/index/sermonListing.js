import { useMemo, useSyncExternalStore } from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  ITEMS_PER_PAGE,
  SermonTraits,
  getSermonTraits,
  getUrlFromNormalizedSermonTraits,
  normalizeTrait,
  parseSermonListingUrl,
} from "../../../page-generation/sermon-pages";

const traitFields = Object.values(SermonTraits);

const noopSubscribe = () => () => {};

// False while hydrating server-rendered HTML, true for every client render after that
const useIsClientRender = () =>
  useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );

function getListing(sermons, pathname) {
  const parsed = parseSermonListingUrl(pathname);
  if (parsed === null) {
    return null;
  }
  const { normalizedTraits, page } = parsed;

  const filtered = sermons.filter(({ normalized }) =>
    normalizedTraits.every(
      (selected, i) => selected === null || normalized[i].includes(selected)
    )
  );
  const numPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  if (filtered.length === 0 || page > numPages) {
    return null;
  }

  // Dropdowns only offer values that the filtered sermons have
  const traits = traitFields.map((field, i) => ({
    field,
    traits: [
      ...new Set(filtered.flatMap(({ traits }) => traits[i]).filter(Boolean)),
    ],
  }));

  return {
    url: getUrlFromNormalizedSermonTraits(normalizedTraits),
    normalizedTraits,
    traits,
    currentPage: page,
    numPages,
    nodes: filtered
      .slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
      .map(({ node }) => node),
  };
}

// The sermon list for the current URL: filtered by the /watch/<label>/<value> segments and paginated by the
// trailing /N. Returns null if the URL matches no sermons (show a 404), or undefined while a client-only
// route is hydrating, since its server-rendered HTML can't know the filter.
export function useSermonListing(location, clientOnly) {
  const { allStrapiSermon, allStrapiSermonSeries } = useStaticQuery(graphql`
    query SermonListingQuery {
      allStrapiSermon(sort: { DatePreached: DESC }) {
        nodes {
          strapiId
          Title
          DatePreached
          ServiceType
          BiblePassage {
            Book
            ChapterVerse
          }
          Series {
            id
          }
          Preacher {
            Name
            Prefix
          }
          SermonTopics {
            Topic
          }
        }
      }
      # Fetched once per series instead of once per sermon to keep the data small
      allStrapiSermonSeries {
        nodes {
          id
          Name
          Background {
            url
            file {
              childImageSharp {
                # Real card width (grid: 2 cols, 3 cols from lg, 380px max); without it the browser assumes
                # the image is as wide as the upload and fetches the largest file
                gatsbyImageData(
                  sizes: "(min-width: 1180px) 380px, (min-width: 1024px) 33vw, 50vw"
                )
              }
            }
          }
        }
      }
    }
  `);

  const sermons = useMemo(() => {
    const seriesById = new Map(
      allStrapiSermonSeries.nodes.map(series => [series.id, series])
    );
    return allStrapiSermon.nodes.flatMap(node => {
      const sermon = { ...node, Series: seriesById.get(node.Series?.id) };
      let traits;
      try {
        traits = getSermonTraits(sermon);
      } catch (e) {
        // Same sermons that gatsby-node skips
        return [];
      }
      return [
        {
          node: sermon,
          traits,
          normalized: traits.map(values => values.map(normalizeTrait)),
        },
      ];
    });
  }, [allStrapiSermon, allStrapiSermonSeries]);

  const isClientRender = useIsClientRender();
  const pathname = isClientRender || !clientOnly ? location.pathname : null;

  return useMemo(
    () => (pathname === null ? undefined : getListing(sermons, pathname)),
    [sermons, pathname]
  );
}
