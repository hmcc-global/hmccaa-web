import * as React from "react"
import hmiImage from "../../../images/about-our-story-greeters.png"
import { HighlightedParagraph } from "../../shared/highlightedParagraph"

const OurStory = () => {
  return (
    <div className="flex items-start gap-14">
      <div className="basis-689/1180">
        <div className="flex flex-col items-start gap-3">
          <div className="subheading">Our Story</div>
          <h2 className="pb-5">
            Transform lives, Transform the world.
          </h2>
        </div>
        <HighlightedParagraph>
          <p>
            Harvest Mission Community Church began in 1996 with a group of eight
            people and a dream: <span>to be a 1st-century church in the 21st century.
            As we looked into the book of Acts, God gave us the vision to be a
            community of faith that raises bold disciples of Christ who will
            transform the world.</span>
          </p>
          <p>
            We planted our roots on the University of Michigan campus in Ann
            Arbor with a focus of reaching college students, because we believe
            that college is a pivotal time for people to discover their
            God-given destiny. Over the years, our ministry has expanded to
            encompass people from different walks of life—from infants and
            youth, to single adults and married couples, to international
            students and families.
          </p>
          <p>
            Although the composition of our church may continue to change, our
            mission will always remain the same. <span>We desire to see people’s lives
            transformed, redirected to Gods purposes, and set out to transform
            the world for the glory of God.</span>
          </p>
        </HighlightedParagraph>
      </div>

      <div>
        <img src={hmiImage} alt="Greeter" />
      </div>
    </div>
  )
}

export default OurStory
