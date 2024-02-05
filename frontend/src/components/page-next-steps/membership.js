import * as React from "react";
import { SecondaryButtonLink } from "../Button";

const Membership = () => (
  <div className="max-w-container w-full py-5 md:py-15 flex justify-center items-center">
    <div className="w-full md:border-2 md:border-solid md:border-Neutral-600 py-5 md:py-15 flex text-center px-4 md:px-8 md:rounded-2xl justify-center">
      <div className="max-w-[50rem] flex flex-col gap-y-5 w-full">
        <div>
          <div className="subheading">Membership</div>
          <h2>WANT TO CALL HMCC YOUR HOME? CONSIDER BECOMING A MEMBER!</h2>
        </div>
        <p className="mb-0">
          Sign up for a membership class to learn more about HMCC and what it
          means to be a member with our elders and church leaders.
        </p>
        <div className="flex justify-center">
          <SecondaryButtonLink to="/next-steps/membership" hasArrow={true}>
            Sign Up For Membership
          </SecondaryButtonLink>
        </div>
      </div>
    </div>
  </div>
);

export default Membership;
