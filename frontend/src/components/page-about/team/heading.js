import * as React from "react";

const Heading = () => (
  <div className="max-w-[61.25rem] w-full flex flex-col items-center gap-y-[2.25rem] lg:gap-y-[3.75rem]">
    <h1 className="font-semibold lg:font-bold leading-tighter text-2xl lg:text-4xl uppercase mb-0 tracking-normal">
      Our Team
    </h1>
    <div className="pt-[1.125rem] pb-6 lg:py-0 text-base lg:text-lg  text-center lg:text-left">
      <p>
        Something about Elders and Deacons. Lorem Ipsum... esus talks about
        living an abundant life. The vision of LIFE Group is: to experience the
        fullness of life in a Biblical community where the Gospel is radically
        lived out. LIFE Groups seek to accomplish this by sharing our lives with
        one another within various life stages.
      </p>
      <p className="mb-0">
        We desire to live out the 5 E’s (Evangelism, Education, Edification,
        Extension, Exaltation) of our values in a community context by studying
        the Bible, worshiping, serving and praying together.
      </p>
    </div>
  </div>
);

const TeamHeading = ({ title, children }) => (
  <div className="w-full flex flex-col items-center lg:items-start gap-y-5 lg:gap-y-3 text-center lg:text-left">
    <h2 className="text-xl font-semibold lg:text-3xl lg:font-bold">{title}</h2>
    <div className="text-base lg:text-lg">{children}</div>
  </div>
);

export { Heading, TeamHeading };
