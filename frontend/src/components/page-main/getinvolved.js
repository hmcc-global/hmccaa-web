import * as React from "react";
import { BecomeSvg, ConnectSvg, JoinSvg } from "../svgs";
import Link from "../Link";

const steps = [
  {
    id: 1,
    image: <ConnectSvg />,
    text: "Connect With Us",
    details: "Unsure where to begin? Fill out this short questionnaire!",
    href: "https://fs23.formsite.com/whitemn/dtuolqqeba/index.html",
    action: "Connect",
    external: true,
  },
  {
    id: 1,
    image: <JoinSvg />,
    text: "Join a Life Group",
    details: "This is where our community comes to life. Come and see!",
    href: "/next-steps/lifegroups",
    action: "Learn More",
    external: false,
  },
  {
    id: 1,
    image: <BecomeSvg />,
    text: "Become A Member",
    details: "Looking for a church home? Find out more!",
    href: "/next-steps/membership",
    action: "Learn More",
    external: false,
  },
];

const linkClassnames =
  "flex py-3 px-5 flex-col text-Accent-500 font-bold tracking-medium-wide underline uppercase";

const GetInvolved = () => (
  <div className="py-5 md:py-10 flex max-w-container w-full justify-center">
    <div className="border-2 border-solid border-Neutral-600 rounded-2xl pt-5 pb-[3.125rem] md:py-20 flex justify-center items-center w-full px-4 md:px-8">
      <div className="w-full max-w-[61.25rem] flex flex-col gap-y-10 items-center">
        <div className="text-center">
          <div className="subheading">Get Involved</div>
          <h2>Take It Step by Step</h2>
        </div>
        <div className="flex gap-y-10 md:gap-y-0 gap-x-8 justify-between flex-col md:flex-row items-center max-w-[12.5rem] md:max-w-none w-full">
          {steps.map(({ id, image, text, details, href, action, external }) => (
            <div
              className="flex flex-col items-center gap-y-5 text-center md:w-[30.613%] md:pt-9 md:pb-[2.1875rem]"
              key={`step-${id}`}
            >
              <div>{image}</div>
              <div className="flex flex-col gap-y-3 items-center">
                <div className="text-xl md:text-3xl leading-tighter font-semibold uppercase text-Primary-500 md:max-w-[11rem] break-normal w-full">
                  {text}
                </div>
                <p className="mb-0 md:max-w-[13.75rem] text-base md:text-lg">
                  {details}
                </p>
              </div>
              <div className="flex justify-center">
                {external ? (
                  <Link href={`${href}`} className={linkClassnames}>
                    {action}
                  </Link>
                ) : (
                  <Link to={`${href}`} className={linkClassnames}>
                    {action}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default GetInvolved;
