import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {container,
        imageContainer,
        image,
        statementContainer,
        statement,
        paragraph} from "../../css/sundayCelebration.module.css"


const sundayCelebration = () => (
  <div className={container}>
    <div className={imageContainer}>
        <StaticImage src="../../images/connect-greeters.png" alt="Greeters" className={image}/>
    </div>
    <div className={statementContainer}>
      <div className={statement}>
        <div className="subheading">SUNDAY CELEBRATION</div>
          <h2 className="pb-5">COME CELEBRATE WITH US!</h2>
          <div className={paragraph}>
            <p>Sunday Celebration is HMCC’s weekend gathering where we come together 
               to worship God and celebrate His work in our lives. All are welcome!</p>
          </div>
      </div>
    </div>
</div> 
);

export default sundayCelebration;