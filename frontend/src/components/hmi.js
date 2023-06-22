import * as React from "react"
import image from "../images/image214.png"
import { Link } from "gatsby"
import {
  container,
  globalMissionContainer,
  globalMissionContext,
  globalMission,
  statementContainer,
  subheading,
  statement,
  buttonContainer,
} from "../css/hmi.module.css"

const HarvestMissionInternational = () => (
  <div className={container}>
    <div className={globalMissionContainer}>
      <div>
        <img src={image} alt="HMI Project" />
      </div>
      <div>
        <div className={globalMissionContext}>
          <div className="triangle triangle-left">&nbsp;</div>
          <div className="triangle triangle-right">&nbsp;</div>
          <div className={globalMission}>
            <h3>Our Global Mission</h3>
            <p>
              <span>Multiplying churches</span> in campuses and cities{" "}
              <span>to transform the next generation</span> among the nations.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className={statementContainer}>
      <div className={subheading}>Our Partners</div>
      <h2>Harvest Mission International (HMI)</h2>
      <div className={statement}>
        <p>
          As Christ has called us to{" "}
          <span>‘make disciples of all nations’</span> (Matthew 28:19), we value
          the importance of the local church making an impact in its surrounding
          community for the Gospel of Jesus Christ. Similar to the early church
          seen in the Book of Acts, we believe in doing{" "}
          <span>missions through planting churches</span>.
        </p>
        <p>
          {" "}
          It is our desire to establish and raise up visible local bodies of
          Christ’s followers who are witnesses to their own communities.
          Specifically, we seek to target{" "}
          <span>cities with viable college campuses</span>, as students are the
          future leaders of our world. As a church reaches a campus, we believe
          that it will begin to impact the community, the city, and ultimately,
          the nations.
        </p>
        <p>
          Currently HMI is involved in short-term projects both locally and
          internationally. Starting in <span>Ann Arbor</span>, HMI now has
          church plants in{" "}
          <span>Austin, Jakarta, Indonesia, Hong Kong, and Detroit</span>.
        </p>
        <div className={buttonContainer}>
          <Link className="button" to="#">
            <span className="pr-2">More Info</span>{" "}
            <span className="arrow-container">
              <div className="arrow-angle top-arrow-angle"></div>
              <span className="arrow-line">&nbsp;</span>
              <div className="arrow-angle bottom-arrow-angle"></div>
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default HarvestMissionInternational
