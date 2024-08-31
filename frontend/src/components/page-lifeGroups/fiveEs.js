import * as React from "react";
import { Circle } from "../svgs/index";
import { PrimaryButtonLink } from "../Button";

import parse from "html-react-parser";
import { textContainer } from "../../css/textContainer.module.css";

const fiveEInfo = [
  {
    word: "Evangelism",
    text: "<p><b>We value</b> God's desire for all people to have a personal and life-transforming relationship with Jesus Christ.</p><p><b>Therefore</b>, we believe that every Christian is called to invest in the process of sharing the Gospel to those in their sphere of influence, their community, and to the nations.</p>",
    color: "fill-[#C07560]",
    verse:
      ' (&#8220;...added to their number daily those who were being saved.&#8220; <span className="whitespace-nowrap"> - <b>Acts 2:47b</b></span>)',
  },
  {
    word: "Exaltation",
    text: "<p><b>We value</b> passionately worshiping God in and above all things.</p><p><b>Therefore,</b> we believe in wholeheartedly giving our best in every aspect of our lives, both public and private, in order to exemplify the worthiness of God.</p>",
    color: "fill-[#B29762]",
    verse:
      ' (&#8220;They devoted themselves to ... breaking of bread and  prayers ... praising God ...&#8220; <span className="whitespace-nowrap"> - <b>Acts 2:46-47</b></span>)',
  },
  {
    word: "Edification",
    text: "<p><b>We value</b> biblical community that encourages a deeper relationship with God and with one another.</p><p><b>Therefore,</b> we believe in creating an environment that fosters authenticity, accountability, and opportunities to minister to one another.</p>",
    color: "fill-[#B1A970]",
    verse:
      ' (&#8220;...devoted to the fellowship...all the believers were together...they ate together.&#8220; <span className="whitespace-nowrap"> - <b>Acts 2:42-44</b></span>)',
  },
  {
    word: "Education",
    text: "<p><b>We value</b> cultivating disciples who know God intimately and reflect Christ’s character.</p><p><b>Therefore,</b> we believe that God’s Word and its practical life application are foundational for our spiritual growth and journey with God.</p>",
    color: "fill-[#65759F]",
    verse:
      ' (&#8220;They devoted themselves to the apostles&#39; teaching.&#8220; <span className="whitespace-nowrap"> - <b>Acts 2:47b</b></span>)',
  },
  {
    word: "Extension",
    text: "<p><b>We value</b> building up a healthy, dynamic, and vibrant church.</p><p><b>Therefore,</b> we believe in equipping and training people for ministry so that they can impact the campus and city and influence the nations in such a way that the world cannot ignore.</p>",
    color: "fill-[#6D8165]",
    verse:
      ' (&#8220;They gave to anyone as he had need.&#8220; <span className="whitespace-nowrap"> - <b>Acts 2:45</b></span>)',
  },
];

const FiveEs = () => {
  return (
    <div>
      <h3 className="text-center text-[1.5rem] font-semibold mb-10 leading-tighter">
        HMCC has defined the five values of biblical community found in Acts
        2:42-47 as follows:
      </h3>
      <div className="flex flex-col lg:flex-row gap-x-[2.75rem] lg:mx-[2px] pl-8 pr-4 lg:px-0">
        {fiveEInfo.map((item, i, index) => (
          <span
            key={`fiveEInfo-${index}`}
            className="flex flex-col text-center items-center"
          >
            <Circle color={item.color} />
            <div className="pt-5 pb-3 text-2xl font-bold lg:font-semibold leading-tighter">
              {item.word}
            </div>
            <div className="flex flex-col">
              <div
                className={`text-base tracking-medium-wide font-medium ${textContainer}`}
              >
                {parse(item.text)}
              </div>
              <div className="text-base lg:text-xs font-medium tracking-medium-wide lg:tracking-normal">
                <p className="mb-[2.375rem] lg:mb-0">{parse(item.verse)}</p>
              </div>
            </div>
          </span>
        ))}
      </div>
      <div
        className="flex flex-col justify-center items-center gap-5 pt-[5.25rem] lg:pt-[6.25rem] pb-5 lg:pb-12"
        id="lg-signups-anchor"
      >
        <PrimaryButtonLink
          href="https://docs.google.com/forms/d/e/1FAIpQLSeaS447hV0_fVkanehmEalMRkryJzb8Ahssuq4a5VxfElFSEQ/viewform"
          hasArrow={true}
        >
          LG SIGN UP: <span className="font-normal">UNDERGRAD STUDENTS</span>
        </PrimaryButtonLink>
        <PrimaryButtonLink
          href="https://docs.google.com/forms/d/e/1FAIpQLSeSKeuDEtmv9mQAmm603df8IW82Uq6g_kiIKp-QnsUdBNcZbQ/viewform"
          hasArrow={true}
        >
          LG SIGN UP: <span className="font-normal">ALL OTHER LIFE STAGES</span>
        </PrimaryButtonLink>
      </div>
      <div className="text-center lg:pb-50 max-w-[51.25rem] mx-auto font-medium lg:pt-0 lg:px-0 pt-7 pb-25 pr-2">
        <p className="mb-6 lg:mb-[1.3125rem]">
          Most of our Life groups for students and young adults happen on{" "}
          <b className="font-montserrat tracking-medium-wide">Tuesdays</b> and{" "}
          <b className="font-montserrat tracking-medium-wide">Wednesdays</b>.
        </p>
        <p className="mb-0">
          For married couples, we typically have groups on Wednesdays, Fridays,
          or Sundays but may vary frequently each year. Please sign up to get
          more up-to-date information!
        </p>
      </div>
    </div>
  );
};

export default FiveEs;
