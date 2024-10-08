import * as React from "react";
import { SecondaryButtonLink } from "../Button";

const Baptism = () => (
  <div className="max-w-container w-full py-5 md:py-15 flex justify-center items-center">
    <div className="w-full border-2 border-solid border-Neutral-600 py-20 md:py-[4.5rem] flex text-center px-6 md:px-8 rounded-2xl justify-center">
      <div className="max-w-[42.5rem] flex flex-col gap-y-5 w-full">
        <div>
          <div className="subheading">Baptism</div>
          <h2>WHY SHOULD I GET BAPTIZED?</h2>
        </div>
        <p className="mb-0 text-base md:text-lg">
          Baptism is an outward commitment that you belong with Jesus. It is
          similar to that of a wedding ring, which symbolizes your commitment to
          your partner. If you are a professing Christian, come learn more about
          what baptism means and see if it&apos;s the next step for you!
        </p>
        <div className="flex justify-center">
          <SecondaryButtonLink to="/next-steps/baptism" hasArrow={true}>
            Learn More
          </SecondaryButtonLink>
        </div>
      </div>
    </div>
  </div>
);

export default Baptism;
