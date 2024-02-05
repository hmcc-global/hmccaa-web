import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Collapsible } from "../collapsible";

const commonQuestions = [
  {
    id: 1,
    question: "What do I wear?",
    answer: [
      "There is no formal dress code so come in whatever makes you feel most comfortable!",
    ],
  },
  {
    id: 2,
    question: "What is a typical service like?",
    answer: [
      "We typically open and end with musical worship, which is contemporary in style. Our preaching is Bible-based, focusing on books of the Bible and including time for prayer and personal reflection.",
    ],
  },
  {
    id: 3,
    question: "What do you have for my kids",
    answer: [
      "Check your kids in at the T-center basement where they can enjoy creative worship and fun Bible lessons.",
      "Building Blocks is available during our Sunday service for kids from 6 months to 5th grade. We have an amazing team of servant leaders who are background checked and trained to teach their respective classes.",
    ],
  },
  {
    id: 4,
    question: "Where do I go when I arrive?",
    answer: [
      "From E Huron St, you can see blue signs for HMCC. Walk to the right of the building and follow the sidewalk to enter through the blue door on your left. You will be greeted by our hospitality team who will guide you on where to sit.",
    ],
  },
];
const CommonQuestions = () => {
  return (
    <div className="flex flex-col gap-y-10 max-w-[61.25rem] w-full py-5 md:py-15">
      <h2 className="text-center">Common Questions</h2>
      <div className="flex gap-x-15 flex-col md:flex-row gap-y-5 items-center md:items-start">
        <div className="max-w-[27.5rem] md:w-[44.8979592%] md:max-w-none">
          <StaticImage
            src="../../images/transformation-center-building.png"
            alt="Transformation Center"
          />
        </div>
        <div className="flex flex-col md:w-[48.97959%] gap-y-8 collapsible-items">
          {commonQuestions.map(({ id, question, answer }) => (
            <Collapsible
              key={id}
              sectionHead={question}
              sectionBlock={answer}
              overrideCss={{
                chevron: "md:scale-125",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommonQuestions;
