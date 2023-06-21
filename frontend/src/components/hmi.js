import * as React from "react"
import image from "../images/image214.png"
import { Link } from "gatsby"
import "../css/hmi.css";

const HarvestMissionInternational = () => (
  <div className="flex">
    <div className="pl-5 order-2">
      <div>
        <img src={image} alt="HMI Project" />
      </div>
      <div>
        <div className="bg-Primary-900 relative">
          <div className="triangle triangle-left">&nbsp;</div>
          <div className="triangle triangle-right">&nbsp;</div>
          <div className="hmi-global-mission">
            <h3 className="hmi-h3">Our Global Mission</h3>
            <p className="hmi-mission-statement">
              <span>Multiplying churches</span> in
              campuses and cities{" "}
              <span>
                to transform the next generation
              </span>{" "}
              among the nations.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="hmi-statement-container order-1">
      <div className="hmi-subheading">Our Partners</div>
      <h2 className="hmi-h2">Harvest Mission International (HMI)</h2>
      <div className="hmi-statement">
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
        <div className="flex">
          <Link className="button" to="javascript:void(0);">
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
