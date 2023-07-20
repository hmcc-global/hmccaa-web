import * as React from "react";
import LifeStageImg1 from "../../images/LifeStageImg1.png"
import LifeStageImg2 from "../../images/LifeStageImg2.png"
import LifeStageImg3 from "../../images/LifeStageImg3.png"
import LifeStageImg4 from "../../images/LifeStageImg4.png"
import LifeStageImg5 from "../../images/LifeStageImg5.png"

const LifeStages = () => (
    <div className="container text-center pt-36 pb-36">
        <div className="subheading">life stages</div>
        <h2>there&apos;s a place for everyone</h2>
        <div className="flex pb-14 pt-14 place-content-center">
            <div>
                <img src={LifeStageImg1}/>
                <img src={LifeStageImg2}/>
            </div>
            <div>
                <img src={LifeStageImg3}/>
                <img src={LifeStageImg4}/>
                <img src={LifeStageImg5}/>
            </div>
        </div>
        <p className="font-bold text-base">
            please email abc@hmccaa.com to get connected!
        </p>
    </div>
);

export default LifeStages