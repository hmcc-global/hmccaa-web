import * as React from "react";
import { SecondaryButtonLink } from "../Button";
import gc94 from "../../images/gc94.svg";

const GetConnectedText = () => (
  <div className="w-full flex-col justify-center text-center">
    <div className="subheading">Get Connected</div>
    <h2>There is a place for you at HMCC.</h2>
    <p className="pt-21">
      New to Michigan? Coming for school? Looking for community? Whether you
      believe in God or not, we welcome you! We have fellowship for all
      different life stages, from youth to students to working adulst or married
      couples!
    </p>
    <div className="flex justify-center">
      <SecondaryButtonLink hasArrow={true}>Learn More</SecondaryButtonLink>
    </div>
  </div>
);

const GetConnectedCircle = () => (
  <div className="h-full flex-col relative">
    <img alt="Images of LIFE Groups arranged in a circle" src={gc94} />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4">
      <GetConnectedText />
    </div>
  </div>
);

export default GetConnectedCircle;
