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
    question: "What do you have for my kids?",
    answer: [
      "Check your kids in at the basement where they can enjoy creative worship and fun Bible lessons.",
      "Building Blocks is available during our Sunday service for kids from 6 months to 5th grade. We have an amazing team of servant leaders who are background checked and trained to teach their respective classes.",
    ],
  },
  {
    id: 4,
    question: "Where do I go when I arrive?",
    answer: [
      "From E. Huron St: Look for the blue HMCC signs as you approach the building. Take the pathway on the right side of the building and enter through the large blue door. Our hospitality team will be there to welcome you and help you find a seat.",
      "From E. Ann St: Walk up the stairs next to the blue HMCC banner on the fence and enter through the door on the left side of the building. Our hospitality team will be happy to welcome you and show you where to sit.",
    ],
  },
];
const CommonQuestions = () => {
  return (
    <div className="flex flex-col items-center md:items-start md:grid md:grid-cols-49 gap-y-10 max-w-[61.25rem] w-full">
      <div className="max-w-[33.75rem] md:max-w-none md:col-start-1 md:col-span-22">
        <StaticImage
          src="../../images/transformation-center-building.jpg"
          width={440}
          alt="Transformation Center"
        />
      </div>
      <div className="flex flex-col gap-y-10 md:gap-y-8 collapsible-items md:col-start-26 md:col-span-24">
        <h2 className="text-left px-4 text-2xl md:text-3xl lg:text-center">
          Common Questions
        </h2>
        {commonQuestions.map(({ id, question, answer }) => (
          <Collapsible
            key={id}
            sectionHead={question}
            sectionBlock={answer}
            overrideCss={{
              chevron: "md:w-10",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CommonQuestions;
