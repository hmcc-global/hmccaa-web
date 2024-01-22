import * as React from "react";
import { LaptopIcon, MailIcon } from "../svgs";
import { PrimaryButtonLink, SecondaryButtonLink } from "../Button";

const HowToGiveSection = () => (
  <div className="flex pt-[19px] pb-[41px] md:py-20 flex-col items-center m-auto max-w-[640px] text-center gap-5 md:gap-[60px]">
    <div className="flex flex-col items-center pt-5 md:pt-0">
      <div className="subheading">Ways To Give</div>
      <h2 className="mb-5">Two Simple Ways to Give</h2>
      <p className="mb-0">
        When giving, please always use your legal name and provide the same
        email address consistently
      </p>
    </div>
    <div className="flex flex-col md:flex-row md:justify-center gap-y-10  pt-5 md:pt-0">
      <div className="flex flex-col items-center max-w-[280px] md:p-2.5 gap-2 md:gap-5">
        <div className="md:m-2.5 w-[5rem] h-[5rem] md:w-25 md:h-25 flex items-center">
          <LaptopIcon />
        </div>
        <div className="text-Primary-500 font-semibold text-2xl leading-tighter md:leading-normal md:text-3xl uppercase ">
          Give Online
        </div>
        <p className="text-[11px] mb-0 md:text-left py-1 md:py-0 font-medium md:font-normal">
          *There is a processing fee for online transactions (2.2% + $0.30 for
          credit and debit card transactions. $0.25 for bank account ACH
          deductions).
        </p>
        <PrimaryButtonLink
          href="https://hmcc-aa.churchcenter.com/giving"
          hasArrow={true}
        >
          Give Now
        </PrimaryButtonLink>
      </div>
      <div className="flex flex-col items-center max-w-[280px] md:p-2.5 gap-y-2 md:gap-y-0">
        <div className="md:m-2.5 w-[5rem] h-[5rem] md:w-25 md:h-25 flex items-center">
          <MailIcon />
        </div>
        <div className="text-Primary-500 font-semibold text-2xl leading-tighter md:leading-normal md:text-3xl uppercase mb-1 md:mt-5 md:mb-3">
          Give By Mail
        </div>
        <p className="mb-3 md:mb-5 text-base md:text-lg">
          Harvest Mission
          <br />
          Community Church
          <br />
          928 E Ann St.
          <br />
          Ann Arbor, MI 48104
        </p>
        <p className="text-[11px] text-left mb-0  font-medium md:font-normal">
          *Giving by mail may take an additional 1-2 weeks to process mailed
          checks.
        </p>
      </div>
    </div>
    <div className="max-w-[620px] text-base md:text-lg tracking-medium-wide md:tracking-normal  pt-5 md:pt-0">
      <p>
        Personal information is kept confidential, used only for tax receipt
        purposes, and is only accessible by the Stewardship Team. If you have
        any questions, please email{" "}
        <b className="text-lg">stewardship@hmcc.net</b>
      </p>
      <p className="mb-0">
        HMCC is a registered 501(c)(3) nonprofit organization in the United
        States. Year-end giving reports will be issued every January.
      </p>
    </div>
    <SecondaryButtonLink href="https://hmcc-aa.churchcenter.com/giving/profile">
      View Donor Profile
    </SecondaryButtonLink>
  </div>
);

export default HowToGiveSection;
