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
    <div>
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
          />
          {sermon.Title} {sermon.VideoLink} {sermon.Series.Name}{" "}
          {sermon.Preacher.Prefix} {sermon.Preacher.Name} {sermon.DatePreached}
        </div>
      ))}
    </div>
  );
};
export default Sermons;
