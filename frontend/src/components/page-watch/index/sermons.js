import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Sermons = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allStrapiSermon {
        nodes {
          Title
          VideoLink
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
  `)
  return (
    <div>
      {data.allStrapiSermon.nodes.map((sermon, i) => (
        <div key={i}>
          {sermon.Title} {sermon.VideoLink} {sermon.Series.Name}{" "}
          {sermon.Preacher.Prefix} {sermon.Preacher.Name}
        </div>
      ))}
    </div>
  )
}
export default Sermons
