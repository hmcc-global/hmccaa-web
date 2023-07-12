import * as React from "react"
import {LaptopIcon, MailIcon} from "../svgs";
import {PrimaryButtonLink, SecondaryButtonLink} from "../Button";

const HowToGiveSection = () => (
  <div className="flex pb-20.5 flex-col items-center m-auto max-w-[640px] text-center gap-[60px]">
    <div className="flex flex-col items-center">
      <div className="subheading">Why We Give</div>
      <h2 className="mb-5">Two Simple Ways to Give</h2>
      <p className="mb-0">When giving, please always use your legal name and provide the same email address consistently</p>
    </div>
    <div className="flex justify-center">
      <div className="flex flex-col items-center max-w-[280px] p-2.5 gap-5">
        <div className="m-2.5 w-25 h-25 flex items-center"><LaptopIcon/></div>
        <div className="text-Primary-500 font-semibold text-3xl uppercase ">Give Online</div>
        <p className="text-[11px] mb-0 text-left">
          *There is a processing fee for online transactions (2.2% + $0.30 for credit and debit card transactions.
          $0.25 for bank account ACH deductions).
        </p>
        <PrimaryButtonLink hasArrow={true}>Give Now</PrimaryButtonLink>
      </div>
      <div className="flex flex-col items-center max-w-[280px] p-2.5">
        <div className="m-2.5 w-25 h-25 flex items-center"><MailIcon/></div>
        <div className="text-Primary-500 font-semibold text-3xl uppercase mt-5 mb-3">Give By Mail</div>
        <p className="mb-5">
          Harvest Mission<br/>
          Community Church<br/>
          928 E Ann St.<br/>
          Ann Arbor, MI 48104
        </p>
        <p className="text-[11px] text-left mb-0">
          *Giving by mail may take an additional 1-2 weeks to process mailed checks.
        </p>
      </div>
    </div>
    <div className="max-w-[620px]">
      <p>
        Personal information is kept confidential, used only for tax receipt purposes, and is only accessible by the
        Stewardship Team. If you have any questions, please email <b>stewardship@hmcc.net</b>
      </p>
      <p className="mb-0">
        HMCC is a registered 501(c)(3) nonprofit organization in the United States. Year-end giving reports will be
        issued every January.
      </p>
    </div>
    <SecondaryButtonLink>View Donor Profile</SecondaryButtonLink>
  </div>
);

export default HowToGiveSection
