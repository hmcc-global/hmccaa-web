import * as React from "react";
import LifeStageImg1 from "../../images/LifeStageImg1.png";
import LifeStageImg2 from "../../images/LifeStageImg2.png";
import LifeStageImg3 from "../../images/LifeStageImg3.png";
import LifeStageImg4 from "../../images/LifeStageImg4.png";
import LifeStageImg5 from "../../images/LifeStageImg5.png";
import {
  mainContainer,
  column,
  row,
  textTitle,
  textBody,
  subContainer,
} from "../../css/lifeStages.module.css";

const LifeStages = () => (
  // w-med h-med
  <div className="pt-36 pb-36 w-med">
    <div className="text-center">
      <h3 className="subheading">life stages</h3>
      <h2>there&apos;s a place for everyone</h2>
    </div>
    
    <div className={mainContainer}>
      {/* <div className="my-20"> */}
      {/* className="object-scale-down" */}
      <div className="my-20">
        <div className={subContainer}>
          <img className="object-scale-down w-44" src={LifeStageImg1} /> 
          <div className="textbox text-right">
              <h3 className={textTitle}>A PLACE FOR SINGLE ADULTS</h3>
              <h4 className={textBody}>New to the area? Just graduated? Our single 
              adult group is for anyone out of school and not yet married. </h4>
          </div>
        </div>

        <div className={subContainer}>
          {/* <img className="object-scale-down w-44" src={LifeStageImg2} /> */}
          <div className="textbox text-right">
            <h3 className={textTitle}>A PLACE FOR UNDERGRADS</h3>
            <h4 className={textBody}>A student at U of M? Eastern? Other schools for 
              undergrad studies? Our undergrad ministry is what sparked 
              the start of HMCC. We would love to connect more with you!</h4>
          </div>
        </div>
      </div>
      <div>
        <div className={subContainer}>
          <div className="textBox text-left">
            <h3 className={textTitle}>A PLACE FOR FAMILIES</h3>
            <h4 className={textBody}>Newly married? Have newborns? Kids? 
              We have families from different life stages 
              you can connect with!</h4>
          </div>
          <img className="object-scale-down w-44" src={LifeStageImg3} />

        </div>
        <div className={subContainer}>
          <div className="textBox text-left">
            <h3 className={textTitle}>A PLACE FOR GRAD STUDENTS</h3>
            <h4 className={textBody}>In grad school? Taking extra courses? 
              This is a place you can connect with those 
              pursuing higher education.</h4>
          </div>
          <img className="object-scale-down w-44" src={LifeStageImg4} />
        </div>
        <div className={subContainer}>
          <div className="textBox text-left">
            <h3 className={textTitle}>A PLACE FOR INTERNATIONAL STUDENTS</h3>
            <h4 className={textBody}>Flew in from overseas to school in the US? 
              We have students from China, HK, Indonesia, Malaysia, Japan, 
              and many more!</h4>
          </div>
          <img className="object-scale-down w-44" src={LifeStageImg5} />
        </div>
      </div>
      
    </div>
    <p className="font-bold text-base text-center">
      please email abc@hmccaa.com to get connected!
    </p>
  </div>
);

export default LifeStages;
