import * as React from "react";
import { BecomeSvg, ConnectSvg, JoinSvg } from "../svgs";
import Link from "../Link";

const steps = [
  {
    id: 1,
    image: <ConnectSvg />,
    text: "Connect With Us",
    details: "Unsure where to begin? Fill out this short questionnaire!",
    href: "/connect",
  },
  {
    id: 1,
    image: <JoinSvg />,
    text: "Join a Life Group",
    details: "This is where our community comes to life. Come and see!",
    href: "/",
  },
  {
    id: 1,
    image: <BecomeSvg />,
    text: "Become A Member",
    details: "Looking for a church home? Find out more!",
    href: "/",
  },
];
const GetInvolved = () => (
  <div className="py-10 flex max-w-container w-full justify-center">
    <div className="border-2 border-solid border-Neutral-600 rounded-2xl py-5 md:py-20 flex justify-center items-center w-full px-4 md:px-8">
      <div className="w-full max-w-[61.25rem] flex flex-col gap-y-5 md:gap-y-10">
        <div className="text-center">
          <div className="subheading">Get Involved</div>
          <h2>Take It Step by Step</h2>
        </div>
        <div className="flex gap-x-10 justify-between flex-col md:flex-row items-center">
          {steps.map(({ id, image, text, details, href }) => (
            <div
              className="flex flex-col items-center gap-y-5 text-center md:w-[31%] py-5 md:pt-9 md:pb-[2.1875rem]"
              key={`step-${id}`}
            >
              <div>{image}</div>
              <div className="flex flex-col gap-y-3 items-center">
                <div className="text-3xl leading-tighter font-semibold uppercase text-Primary-500 max-w-[175px]  break-normal">
                  {text}
                </div>
                <p className="mb-0">{details}</p>
              </div>
              <div className="flex justify-center">
                <Link
                  to={`${href}`}
                  className="flex py-3 px-5 flex-col text-Accent-500 font-bold tracking-medium-wide underline"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default GetInvolved;
