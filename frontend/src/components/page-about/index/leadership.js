import * as React from "react"
import {
  titleContainer,
  container,
  elderListContainer,
  elderCard,
  elderImg,
  elderName,
  buttonContainer,
} from "./leadership.module.css"
import ImgPeteDahlem from "../../../images/about-elders-pete-dahlem.png";
import ImgJoshYang from "../../../images/about-elders-josh-yang.png";
import ImgDaveYon from "../../../images/about-elders-dave-yon.png";
import ImgSeongPark from "../../../images/about-elders-seong-park.png";
import {ButtonLink} from "../../Button";

const LeadershipSection = () => (
  <div className={container}>
    <div className={titleContainer}>
      <div className="subheading">Our Leadership</div>
      <h2>Meet Our Elders</h2>
    </div>
    <div className={elderListContainer}>
      <div className={elderCard}>
        <img className={elderImg} src={ImgPeteDahlem} alt="Rev. Pete Dahlem" />
        <h3 className={elderName}>Rev. Pete Dahlem</h3>
        <div>Lead Pastor</div>
      </div>
      <div className={elderCard}>
        <img className={elderImg} src={ImgJoshYang} alt="Josh Yang" />
        <h3 className={elderName}>Josh Yang</h3>
        <div>Associate Pastor</div>
      </div>
      <div className={elderCard}>
        <img className={elderImg} src={ImgDaveYon} alt="Dave Yon" />
        <h3 className={elderName}>Dave Yon</h3>
        <div>Elder</div>
      </div>
      <div className={elderCard}>
        <img className={elderImg} src={ImgSeongPark} alt="Seong Park" />
        <h3 className={elderName}>Seong Park</h3>
        <div>Elder</div>
      </div>
    </div>
    <div className={buttonContainer}>
      <ButtonLink to={"/about/our-team"} hasArrow={true}>More About Our Elders and Deacons</ButtonLink>
    </div>
  </div>
);

export default LeadershipSection
