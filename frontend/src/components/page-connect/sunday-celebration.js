import * as React from "react"
import imgGreeters from "../../images/connect-greeters.png"
import { StaticImage } from "gatsby-plugin-image"
import {
  statementContainer,
  globalMissionContainer,
  globalMission,
} from "../../css/partners.module.css"
import {container} from "../../css/belief.module.css"
import { statement } from "../../css/sundayCelebration.module.css";


const sundayCelebration = () => (
  <div className={container}>
    <div className={globalMissionContainer}>
      <div className="pb-[20px]">
        <StaticImage src="../../images/connect-greeters.png" alt="Greeters"/>
      </div>
      <div className={globalMission}><h3>Greeters (host team welcoming)</h3></div>
    </div>
    <div className={statementContainer}>
      <div className="subheading">SUNDAY CELEBRATION</div>
        <h2>COME CELEBRATE WITH US!</h2>
        <div className={statement}>
          <p>Sunday Celebration is HMCC’s weekend gathering where we come together to worship God and celebrate His work in our lives. All are welcome!</p>
        </div>
    </div>
</div> 
);

export default sundayCelebration;