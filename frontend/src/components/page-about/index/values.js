import * as React from "react";
import { Collapsible } from "../../collapsible";
import {
  container,
  titleContainer,
  middleContainer,
} from "../../../css/belief.module.css";
import { title } from "../../../css/values.module.css";

const saltValues = [
  {
    sectionHead: "S - Spirit-led ministry",
    sectionBody:
      "To be connected with God and anointed by His Spirit, in order to hear His direction and step out in faith to minister to His people with His power.",
  },
  {
    sectionHead: "L - Leadership development",
    sectionBody:
      "To develop people to their full potential and in Christ-like character in order to impact their spheres of influence and increase the spread of the Gospel to future generations.",
  },
  {
    sectionHead: "T - Transculturalism",
    sectionBody:
      "To make the decision to go through discomforts and difficulties, in order to develop understanding and delight in people from a different culture.",
  },
];

const commandValues = [
  {
    sectionHead: "C - Community",
    sectionBody:
      "To willingly come together as a diverse group of people to experience and live out the Gospel, in order to fulfill God's purposes.",
  },
  {
    sectionHead: "M - Ministry inside and outside",
    sectionBody:
      "To be a visible display and viable demonstration of God's Kingdom by stewarding our God-given spiritual gift(s), resources and experiences to build God's Church and transform the world.",
  },
  {
    sectionHead: "M - Missions through church planting",
    sectionBody:
      "To obey and fulfill the Great Commission through the local church, which God has established so that we can be witnesses and servants of His redemptive purpose.",
  },
  {
    sectionHead: "D - Discipleship",
    sectionBody:
      "To invite people to join us in the lifestyle of the Kingdom by imitating Christ, teaching people to obey Him, and imparting Biblical values.",
  },
];

const Values = () => (
  <div className={container}>
    <div className={titleContainer}>
      <div className="subheading">Our Values</div>
      <div className={title}>
        <h2>
          S<span>A</span>LT C<span>O</span>MM<span>AN</span>D
        </h2>
      </div>
    </div>
    <div className={middleContainer}>
      <div className="flex flex-col gap-y-10">
        {saltValues.map((values, index) => (
          <Collapsible
            key={index}
            sectionHead={values.sectionHead}
            sectionBody={values.sectionBody}
          />
        ))}
      </div>
      <div className="flex flex-col gap-y-10">
        {commandValues.map((values, index) => (
          <Collapsible
            key={index}
            sectionHead={values.sectionHead}
            sectionBody={values.sectionBody}
          />
        ))}
      </div>
    </div>
  </div>
);
export default Values;
