import * as React from "react";

const Heading = () => (
  <div className="max-w-[61.25rem] w-full flex flex-col items-center gap-y-[3.75rem]">
    <h1 className="font-bold leading-tighter text-4xl uppercase mb-0">
      Our Team
    </h1>
    <div>
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
  <div className="w-full flex flex-col items-start gap-y-3">
    <h2 className="text-3xl font-bold">{title}</h2>
    <div>{children}</div>
  </div>
);

export { Heading, TeamHeading };
