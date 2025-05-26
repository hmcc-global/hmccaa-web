import * as React from "react";
import {
  wrapper,
  container,
  descriptionWrapper,
} from "../../css/rightNowMedia.module.css";
import { mediaWrapper } from "../../css/media.module.css";
import { SecondaryButtonLink } from "../Button";
const RightNowMedia = () => (
  <div className={wrapper}>
    <div className={container}>
      <div
        className={`${mediaWrapper} max-w-[30rem] lg:max-w-none item-container size-container`}
      >
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/vSiBD1lGHfA"
            title="RightNow Media Intro Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className={descriptionWrapper}>
        <div>
          <div className="subheading">RightNow Media</div>
          <h2>More Resources For You</h2>
        </div>
        <div className="text-base lg:text-lg">
          <p>
            HMCC has partnered with RightNow Media, often dubbed the “Netflix of
            Video Bible studies”, to offer all of our members free access to
            their virtual library.
          </p>
          <p className="mb-0">
            They have tens of thousands of videos of Bible studies, conference
            sessions, trainings, and even videos for children. Access to
            RightNow Media is free for anyone connected to HMCC.
          </p>
        </div>
        <div className="lg:flex lg:justify-start">
          <SecondaryButtonLink
            href="https://www.rightnowmedia.org/Account/Invite/HMCC"
            hasArrow={true}
            className="bg-Shades-0"
            customClassName={{
              textContainer: "ellipsis",
              button: "max-w-[16.875rem]",
            }}
          >
            Sign Up For A Free Account
          </SecondaryButtonLink>
        </div>
      </div>
    </div>
  </div>
);

export default RightNowMedia;
