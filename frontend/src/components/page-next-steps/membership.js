import * as React from "react";
import { SecondaryButtonLink } from "../Button";
import "../../css/button-compnent.css";

const Membership = () => (
  <div className="max-w-container w-full py-5 md:py-15 flex justify-center items-center">
    <div className="w-full border-2 border-solid border-Neutral-600 py-20 md:py-15 flex flex-col text-center px-2 [@media(min-width:375px)]:px-[0.875rem] md:px-8 rounded-2xl items-center">
      <div className="max-w-[50rem] flex flex-col gap-y-5 w-full">
        <div>
          <div className="subheading">Membership</div>
          <h2>WANT TO CALL HMCC YOUR HOME? CONSIDER BECOMING A MEMBER!</h2>
        </div>
        <p className="mb-0 text-base md:text-lg">
          Sign up for a membership class to learn more about HMCC and what it
          means to be a member with our elders and church leaders.
        </p>
        <div className="flex justify-center btn-container">
          <SecondaryButtonLink to="/next-steps/membership" hasArrow={true}>
            Learn More
          </SecondaryButtonLink>
        </div>
      </div>
    </div>
  </div>
);

export default Membership;
