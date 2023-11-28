import * as React from "react";
import { SecondaryButtonLink } from "../Button";
import gc94 from "../../images/gc94.svg"

const GetConnectedText = () => (
        <div style={{ textAlign: "center" }} className="w-full flex-col justify-center">
          <div className="subheading">Get Connected</div>
          <h2>
            There is a place for you at HMCC.
          </h2>
          <p className="pt-21">
            New to Michigan? Coming for school? Looking for community?
            Whether you believe in God or not, we welcome you!
            We have fellowship for all different life stages, 
            from youth to students to working adulst or married couples!
          </p>
          <div className="flex justify-center">
            <SecondaryButtonLink hasArrow={true}>Learn More</SecondaryButtonLink>
          </div>
        </div>
);

const GetConnectedCircle = () => (
  <div style={{ display: "flex", flexDirection: "column", position: "relative" }} className="h-full flex-col">
    <img
      alt="Images of LIFE Groups arranged in a circle"
      src={gc94}
    />
    <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -75%)" }}>
      <GetConnectedText />
    </div>
  </div>
);


export default GetConnectedCircle;
