import * as React from "react";
import { SecondaryButtonLink } from "../Button";

const Baptism = () => (
  <div className="max-w-container w-full py-5 md:py-15 flex justify-center items-center">
    <div className="w-full md:border-2 md:border-solid md:border-Neutral-600 py-5 md:py-15 flex text-center px-4 md:px-8 md:rounded-2xl justify-center">
      <div className="max-w-[50rem] flex flex-col gap-y-5 w-full">
        <div>
          <div className="subheading">Baptism</div>
          <h2>WHY SHOULD I GET BAPTIZED?</h2>
        </div>
        <p className="mb-0">
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
