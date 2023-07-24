import * as React from "react";
import { SecondaryButtonLink } from "../../Button";

const Feedback = () => {
  return (
    <div className="bg-Neutral-200 lg:flex lg:justify-center lg:items-center py-[27px] lg:pt-[89px] lg:pb-[90px] px-4">
      <div className="flex flex-col  lg:grid bg-Shades-0 items-center border-solid border-2 max-w-[1178px] rounded-xl pt-[26px] pb-9 px-3.5 lg:pt-16 lg:pb-[60px] lg:pr-10 lg:pl-[45px] border-Neutral-700 gap-x-10">
        <div className="lg:max-w-[429px] w-full">
          <h2 className="font-bold normal-case pb-5 lg:pb-[27px]">
            Feedback Form for Pastors and Elders
          </h2>
        </div>
        <div className="lg:col-start-2 lg:row-start-1 lg:row-end-3 pb-5 lg:pb-0">
          <p>
            This form is for people connected to Harvest Mission Community
            Church of Ann Arbor to be able to submit questions, concerns,
            issues, or suggestions to the pastors and elders.
          </p>
          <p className="mb-0">
            Please note: the name and email questions are optional, but if forms
            are submitted anonymously, it may be more difficult to follow up on
            some types of concerns.
          </p>
        </div>
        <div>
          <div className="flex">
            <SecondaryButtonLink to={"/about/feedback"} hasArrow={true}>
              Feedback Form
            </SecondaryButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
