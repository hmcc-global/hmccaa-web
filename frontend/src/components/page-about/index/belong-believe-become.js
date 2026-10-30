import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Link from "../../Link";

// StaticImage needs literal props, so each image is declared here and picked by key
const images = {
  belong: (
    <StaticImage
      src="../../../images/about-belong.jpg"
      width={1024}
      alt="A Life Group sharing a meal together"
      className="!absolute inset-0 h-full w-full"
    />
  ),
  believe: (
    <StaticImage
      src="../../../images/about-believe.jpg"
      width={1024}
      alt="A baptism during a Sunday Celebration"
      className="!absolute inset-0 h-full w-full"
    />
  ),
  become: (
    <StaticImage
      src="../../../images/about-become.jpg"
      width={1024}
      alt="Church members serving together"
      className="!absolute inset-0 h-full w-full"
    />
  ),
};

const linkClassName = "font-bold text-Accent-700 underline";

const sections = [
  {
    key: "belong",
    heading: "Belong.",
    background: "bg-[#CCEDFE]",
    lead: "Belong in a biblical community of grace and truth.",
    body: (
      <>
        Our Life Groups exist to live out the gospel message together and help
        one another grow closer to Christ (see Matthew 9:9-13). Find out more
        about{" "}
        <Link to="/get-involved/lifegroups" className={linkClassName}>
          Life Group
        </Link>
        .
      </>
    ),
  },
  {
    key: "believe",
    heading: "Believe.",
    background: "bg-[#F8F4BD]",
    lead: "Believe in the gospel and commit to the church.",
    body: (
      <>
        When we place our faith in Jesus, we become part of the spiritual family
        of the church that gathers to worship, pray, and pursue our calling
        together (see Acts 2:41-47). Find out more about{" "}
        <Link to="/get-involved#membership" className={linkClassName}>
          Baptism, Membership, and our church gatherings
        </Link>
        .
      </>
    ),
  },
  {
    key: "become",
    heading: "Become.",
    background: "bg-[#FBC7DA]",
    lead: "Become a disciple who seeks Jesus, serves, and is sent to make disciples.",
    body: (
      <>
        Each of us is called to grow to maturity as a disciple of Jesus who
        lives in abiding relationship with him and joins in his ministry and
        mission to the world (see Acts 13:1-3). Find out more about{" "}
        <Link to="/get-involved#ministry-teams" className={linkClassName}>
          Discipleship, Ministry, and Missions
        </Link>
        .
      </>
    ),
  },
];

const BelongBelieveBecome = () => (
  <div className="section-band flex flex-col">
    {sections.map(({ key, heading, background, lead, body }, index) => {
      const isReversed = index % 2 === 1;
      return (
        <div
          key={key}
          className={`flex flex-col lg:min-h-[25rem] ${
            isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <div className="relative aspect-[3/2] lg:aspect-auto lg:w-5/12 flex items-center justify-center overflow-hidden">
            {images[key]}
            <h2 className="relative text-3xl lg:text-5xl font-bold normal-case text-Shades-0 leading-tighter">
              {heading}
            </h2>
          </div>
          <div
            className={`${background} lg:w-7/12 flex items-center justify-center ${
              isReversed
                ? "lg:justify-end lg:pr-12 xl:pr-16 lg:pl-10"
                : "lg:justify-start lg:pl-12 xl:pl-16 lg:pr-10"
            } px-6 py-10`}
          >
            <p className="max-w-[34rem] w-full pb-0 lg:pb-0 mb-0 text-lg lg:text-xl font-medium leading-normal text-Shades-100">
              <span className="font-bold">{lead}</span> {body}
            </p>
          </div>
        </div>
      );
    })}
  </div>
);

export default BelongBelieveBecome;
