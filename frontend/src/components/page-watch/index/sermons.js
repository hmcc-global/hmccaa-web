import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SermonCard from "./sermonCard";
import { StaticImage } from "gatsby-plugin-image";

const Sermons = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allStrapiSermon {
        nodes {
          Title
          VideoLink
          DatePreached
          Series {
            Name
            id
          }
          Preacher {
            Name
            Prefix
          }
        }
      }
    }
  `);
  return (
   <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 py-36 max-w-container px-4">
      {data.allStrapiSermon.nodes.map((sermon, i) => (
        <div key={i}>
          <SermonCard
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
        </div>
      ))}
    </div>
  );
};
export default Sermons;
