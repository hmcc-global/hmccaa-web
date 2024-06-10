import * as React from "react";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import {
  SecondaryButtonLink,
  PrimaryButtonLink,
} from "../../components/Button";
import { lifeStage } from "../../css/lifeStages.module.css";
import Link from "../../components/Link";

const imageClassName =
  "bg-Shades-100 border-solid border-4  w-[260px] lg:w-[297px] relative z-10";
const lifeStages = [
  {
    image: (
      <StaticImage
        src="../../images/covenant-life-stage.png"
        alt="Covenant - Married Couples Life Stage"
        className={`border-Accent-900 ${imageClassName}`}
      />
    ),
    background: "bg-Accent-900",
    heading: "COVENANT (Married Couples)",
    name: "Covenant",
    group: "Married Couples",
    description: (
      <div>
        <p>
          Ruth Bell Graham said that a good marriage is the union of two good
          forgivers. If you are married, you probably understand what she meant,
          because building a strong marriage doesn’t come easy. Whether it’s in
          the area of forgiveness, communication, finances, or sexual intimacy,
          there’s always room for growth in our marriages.
        </p>
        <p>
          Through Covenant, our married couples ministry, we want to see couples
          build strong, Christ-centered marriages which God can use to bless and
          impact the lives and world around them.
        </p>
        <p>
          For more information or questions, please contact{" "}
          <Link href="mailto:covenant@annarbot.hmcc.net">
            covenant@annarbor.hmcc.net
          </Link>
        </p>
      </div>
    ),
  },
  {
    image: (
      <StaticImage
        src="../../images/focus-life-stage.png"
        alt="Focus - Single Adults Life Stage"
        className={`border-Accent-700 ${imageClassName}`}
      />
    ),
    background: "bg-Accent-700",
    heading: "FOCUS (Single Adults)",
    name: "Covenant",
    group: "Single Adults",
    description: (
      <div>
        <p>
          Single adult life is generally considered a transitional period when
          many search for significance in their careers, relationships, and
          spiritual lives. We believe that this journey is best experienced
          within a vibrant, Christ-centered community.
        </p>
        <p>
          Focus is the single adults’ ministry of HMCC – a place where we can
          grow in our faiths, share our life stories and interests, serve the
          community, and have fun!
        </p>
        <p>
          If you would like to learn more about our community, email{" "}
          <Link href="mailto:focus@annarbor.hmcc.net">
            focus@annarbor.hmcc.net
          </Link>
        </p>
      </div>
    ),
  },
  {
    image: (
      <StaticImage
        src="../../images/impact-life-stage.png"
        alt="Impact - Grad Students Life Stage"
        className={`border-Accent-300 ${imageClassName}`}
      />
    ),
    background: "bg-Accent-300",
    heading: "IMPACT (Grad Students)",
    name: "Impact",
    group: "Graduate Students",
    description: (
      <div>
        <p>
          Impact is HMCC’s ministry to graduate students on the University of
          Michigan campus and Ann Arbor area. Together, we hope to grow into
          people who will use our education and gifts to impact our classrooms,
          labs, and eventually our careers. To that end, our grad student
          ministry focuses on community, spiritual growth, and evangelism.
        </p>
        <p>
          For more information contact{" "}
          <Link href="mailto:impact@annarbor.hmcc.net">
            impact@annarbor.hmcc.net
          </Link>
        </p>
      </div>
    ),
  },
  {
    image: (
      <StaticImage
        src="../../images/access-life-stage.png"
        alt="Access - Undergraduate Students Life Stage"
        className={`border-Error-300 ${imageClassName}`}
      />
    ),
    background: "bg-Error-300",
    heading: "ACCESS (Undergraduate Students)",
    name: "Access",
    group: "Undergraduates",
    description: (
      <>
        <div>
          <p>
            College is one of the most pivotal chapters of life – it is a time
            unlike any other to uncover God’s purposes for your life and for the
            world. We believe that college students have amazing potential to be
            the world leaders of tomorrow as they encounter the power of God and
            experience life transformation today. That’s why we invest in
            college students through Life group, a community where students can
            grow in faith and develop as people.
          </p>
          <p>
            Want to know more about our Undergraduate ministry? Contact{" "}
            <Link href="mailto:access@annarbor.hmcc.net">
              access@annarbor.hmcc.net
            </Link>
          </p>
          <p className="italic">
            Access, an MSA registered student organization, is the student
            branch of Harvest Mission Community Church.
          </p>
        </div>
        <div className="flex">
          <SecondaryButtonLink to={""} hasArrow={true}>
            ACCESS WEBSITE
          </SecondaryButtonLink>
        </div>
      </>
    ),
  },
  {
    image: (
      <StaticImage
        src="../../images/global-access-life-stage.png"
        alt="Global Access Life Stage"
        className={`border-Success-500 ${imageClassName}`}
      />
    ),
    background: "bg-Success-500 px-1 lg:px-0",
    heading: "GLOBAL ACCESS (International Students)",
    name: "Global Access",
    group: "International Students",
    description: (
      <div>
        <p>
          With the influx of students from all across the world at the
          University of Michigan, our Global Access ministry responds to the
          overwhelming need to reach out to the international community. In line
          with the overall vision of the church, we seek to share the gospel
          with students from all over the world, disciple them to be
          Christ-followers, and see them return to their home countries to be
          effective witnesses. Global Access allows HMCC to expand our network,
          as many students return to their countries and maintain relationships
          globally.
        </p>
        <p>
          Our international life group serves as a “home away from home” for
          many international students who seek family-like friendships in Ann
          Arbor. Many students come from countries where Christianity is
          irrelevant. Therefore, it is our desire to present and implant the
          Gospel in the context of our unique biblical community. Through Global
          Access, we hope that international students from anywhere in the world
          can come and share life together.
        </p>
        <p>
          For more information about Global Access, contact{" "}
          <Link href="mailto:globalaccess@annarbor.hmcc.net">
            globalaccess@annarbor.hmcc.net.
          </Link>
        </p>
      </div>
    ),
  },
  {
    image: (
      <StaticImage
        src="../../images/latitude-velocity-life-stage.png"
        alt="Latitude & Velocity - Youth Life Stage"
        className={`border-Accent-500 ${imageClassName}`}
      />
    ),
    background: "bg-Accent-500",
    heading: "LATITUDE & VELOCITY (Youth - HS/JHS)",
    name: "Latitude/Velocity",
    group: "Youth",
    description: (
      <div>
        <p>
          Latitude began in 2002 with a handful of high school students from Ann
          Arbor. Since then, it has grown to include students from as far as
          Ypsilanti, Saline, Northville, and Novi. Soon after, we saw the birth
          of Velocity, HMCC’s middle school student ministry.
        </p>
        <p>
          We emphasize growth in relationship with Christ, friendship, service,
          communication and leadership. Our hope is to see our youth be a light
          to one another, their peers, their families, and to go on to transform
          their generation and community for God’s kingdom.
        </p>
        <p>
          For more information about our youth ministry, contact{" "}
          <Link href="mailto:youth@annarbor.hmcc.net">
            youth@annarbor.hmcc.net
          </Link>
        </p>
      </div>
    ),
  },
  {
    image: (
      <StaticImage
        src="../../images/building-blocks-life-stage.png"
        alt="Building Blocks - Children Life Stage"
        className={`border-Accent-1000 ${imageClassName}`}
      />
    ),
    background: "bg-Accent-1000",
    heading: "BUILDING BLOCKS (Children)",
    name: "Building Blocks",
    group: "Kids",
    description: (
      <div>
        <p>
          Building Blocks is our ministry for children from 6 months old to 5th
          grade. Our mission is to lay a biblical foundation to lead children to
          Christ and to prepare them to share their faith. We believe you can
          never be too young to start and grow a personal relationship with
          Jesus Christ. Our commitment is to partner with the parents (the
          spiritual leaders of the home) for the spiritual growth of their
          children, and to teach God’s truth through relevant Bible lessons and
          age-appropriate activities at our weekly children’s church offered
          during the Sunday Celebration Services.
        </p>
        <p>
          Due to COVID-19, our teaching sessions have been over Zoom on Sunday
          mornings where we continue to teach God’s word to the children. Zoom
          worship and teaching times begin at 9:30AM EST.
        </p>
        <p>
          For more information about Building Blocks, contact{" "}
          <Link href="mailto:buildingblocks@annarbor.hmcc.net">
            buildingblocks@annarbor.hmcc.net
          </Link>
        </p>
      </div>
    ),
  },
];

const LifeStagesPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  return (
    <Layout>
      <div className="px-2 min-[375px]:px-4 flex flex-col w-full items-center pt-[1.375rem] lg:pt-10 gap-y-[2.1875rem] lg:gap-y-[3.75rem] pb-[4.8125rem] lg:pb-[8.1875rem]">
        <Breadcrumb crumbs={crumbs} crumbSeparator=" > " />
        <div className="max-w-container w-full flex flex-col items-center lg:gap-y-20">
          <div className="flex flex-col gap-y-9 lg:gap-y-15 text-center max-w-[61.25rem]">
            <h1 className="uppercase text-2xl lg:text-4xl font-bold leading-tighter mb-0">
              Life Stages
            </h1>
            <p className="mb-0 pt-[1.125rem] pb-6 lg:py-0">
              Whether you’re coming for school or just moved to Michigan for
              family or career, or any other reasons, we probably have a group
              for you! Scroll down to see the different LIFE Stages. We would
              love to connect with you so please don’t hesitate to reach out!
            </p>
          </div>
          <div className="flex flex-col gap-y-10 items-center pt-[1.875rem] pb-[3.8125rem] lg:py-0">
            {lifeStages.map(
              (
                { image, heading, description, name, group, background },
                index
              ) => (
                <div
                  key={`life-stage-${index + 1}`}
                  className="flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row lg:gap-x-20 items-center"
                >
                  <div
                    className={`relative max-w-[290px] lg:max-w-none${
                      index % 2 === 1 ? " lg:order-2" : ""
                    }`}
                  >
                    <div className="flex flex-col">
                      {image}
                      <div className="text-Shades-0 font-bold min-w-[280px] lg:min-w-[320px] pl-[1.3125rem] lg:pl-6 uppercase">
                        <div
                          className={`${background} text-2xl leading-tighter pl-[1.0625rem] lg:pb-[5px] lg:pr-[1.875rem]`}
                        >
                          {name}
                        </div>
                        <div className="flex lg:block lg:max-w-[299px] text-xl -rotate-90 absolute -right-32 lg:-right-[8.4375rem] bottom-32 lg:bottom-[8.4375rem]  w-full leading-[1.25] lg:leading-normal">
                          <div
                            className={`${background} text-center min-w-[261px] lg:min-w-0`}
                          >
                            {group}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-5 lg:gap-y-4 lg:max-w-[66.10169%]">
                    <h2 className="text-Primary-500 text-xl lg:text-3xl leading-tighter lg:font-bold text-center lg:text-left">
                      {heading}
                    </h2>
                    <div className={lifeStage}>{description}</div>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="max-w-[62.5rem] flex flex-col items-center gap-y-9">
            <p className="mb-0 text-center font-medium">
              LIFE Stages are the overall larger groups of fellowship. For
              smaller groups of community where we grow and challenge one
              another more consistently, we meet in Life groups.
            </p>
            <div className="flex flex-col justify-center">
              <PrimaryButtonLink
                to={"../next-steps/lifegroups"}
                hasArrow={true}
              >
                Check Out A Life Group
              </PrimaryButtonLink>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Life Stages" />;

export default LifeStagesPage;
