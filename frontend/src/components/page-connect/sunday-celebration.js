import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { HighlightedParagraph } from "../shared/highlightedParagraph";


const sundayCelebration = () => (
  <div className="px-4 pt-[0.9375rem] pb-[3.125rem] lg:py-[3.75rem] flex flex-col items-center lg:items-start justify-center lg:flex-row lg:gap-[60px]">
    <div className="flex-shrink-0 lg:order-2 pb-5 lg:pb-0">
        <StaticImage src="../../images/connect-greeters.png" alt="Greeters" className="mb-0"/>
      </div>
    <div className="text-center lg:basis-[49.32%] lg:order-1 lg:items-center lg:text-left">
      <div className="flex flex-col gap-3">
        <div className="subheading">SUNDAY CELEBRATION</div>
          <h2 className="pb-5">COME CELEBRATE WITH US!</h2>
          <HighlightedParagraph>
            <p>Sunday Celebration is HMCC’s weekend gathering where we come together to worship God and celebrate His work in our lives. All are welcome!</p>
          </HighlightedParagraph>
      </div>
    </div>
</div> 
);

export default sundayCelebration;