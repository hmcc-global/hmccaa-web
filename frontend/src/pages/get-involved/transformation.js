import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { PrimaryButtonLink } from "../../components/Button";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";

const transformationList = [
  {
    id: 1,
    image: (
      <StaticImage
        alt="Alive Disciplehip Class"
        src="../../images/alive-discipleship.png"
      />
    ),
    title: "ALIVE Discipleship",
    description: [
      "Jesus invites us repeatedly through the scriptures to “follow me”, but what does it look like to live and grow as a disciple of Jesus? This calling to discipleship is at the same time simple enough that anyone can follow Jesus, but deep enough that we can continue learning for a lifetime.",
      "This class will guide us through the principles and practices that are foundational to a life of discipleship.",
    ],
  },
  {
    id: 2,
    title: "Apologetics: Love Has Reasons",
    image: (
      <StaticImage alt="Apologetics Class" src="../../images/apologetics.png" />
    ),
    description: [
      "Is Christianity the real deal? In this course we’ll interact with and address the uncertainties shared by others and ourselves. So often we can’t find God—not because he is too high or far away, but because he is so low, and so close.",
    ],
  },
  {
    id: 3,
    title: "Freedom Classes",
    image: (
      <StaticImage alt="Freedom Class" src="../../images/freedom-class.png" />
    ),
    description: [
      "We all have areas in our lives that affect our spiritual growth and hinder us from fully surrendering our lives to God.",
      "This class will help us dig deeper into those areas and learn to overcome so that we can live the abundant, powerful life of freedom that God has promised us. ",
      "(NOTE: There will be a limited number of spots available to participate in Freedom Class)",
    ],
  },
  {
    id: 4,
    title: "Great Commission",
    image: (
      <StaticImage
        alt="Great Commission Class"
        src="../../images/great-commission.png"
      />
    ),
    description: [
      "As followers of Christ, we are called to “make disciples of all nations” (Matthew 28:19), but fear and uncertainty regarding how to practically do that often gets in the way.",
      "Through this training, we will utilize scripture and other practical tools to help us obey Jesus’s commands and guide people to discover who God is. Whether you have the desire to reach your family, friends, coworkers, campus, city, or world, this training will challenge and equip you!",
    ],
  },
].reduce((rows, key, index, list) => {
  const startIndex = Math.ceil(list.length / 2);

  return (
    (index % startIndex === 0 && index < 6
      ? rows.push({ id: rows.length + 1, items: [key] })
      : rows[rows.length - 1].items.push(key)) && rows
  );
}, []);

const TransformationPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  return (
    <Layout>
      <div className="pt-[1.375rem] lg:pt-10 pb-[4.8125rem] lg:pb-[8.1875rem] content-padding-full gap-y-9 lg:gap-y-15 min-h-screen">
        <Breadcrumb crumbs={crumbs} crumbSeparator=" > " />
        <div className="max-w-container w-full flex flex-col gap-y-9 lg:gap-y-15 items-center">
          <h1 className="text-2xl font-semibold lg:font-bold uppercase lg:text-4xl leading-tighter mb-0">
            Transformation Classes
          </h1>
          <div className="gap-y-5 gap-x-15 flex flex-col lg:flex-row items-center lg:items-start pt-4 lg:pt-0">
            <div className="image-container lg:order-1">
              <StaticImage
                alt="Transformation Classes"
                src="../../images/transformation-classes-page.png"
              />
            </div>
            <div className="content-container flex flex-col gap-y-5 lg:gap-y-10">
              <div className="text-base lg:text-lg">
                <p>
                  At HMCC we love to see people radically experience God and be
                  equipped to share the Gospel to the nations. To do that, we
                  believe it is crucial that we do not grow stagnant in our
                  faith, but that we are continually learning and being
                  challenged.
                </p>
                <p>
                  Romans 12:2 reminds us: “Do not conform to the pattern of this
                  world, but be transformed by the renewing of your mind. Then
                  you will be able to test and approve what God&apos;s will
                  is—his good, pleasing and perfect will”
                </p>
                <p className="mb-0">
                  Transformation classes are offered through the year to help
                  challenge, encourage, and equip our members to know God more
                  deeply and live out His calling for their lives.
                </p>
              </div>
              <div className="flex">
                <PrimaryButtonLink to="/events" hasArrow={true}>
                  Events Page
                </PrimaryButtonLink>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-container w-full grid grid-cols-2 gap-x-4 lg:gap-x-5">
          {transformationList.map(({ id: listId, items }) => (
            <div
              className="flex flex-col gap-y-15 lg:grid lg:grid-cols-2 lg:gap-x-5"
              key={`list-${listId}`}
            >
              {items.map(({ id, image, title, description }) => (
                <div
                  className="flex flex-col gap-y-5 lg:w-auto"
                  key={`transformation-class-${id}`}
                >
                  <div>{image}</div>
                  <div className="flex flex-col gap-y-3">
                    <div className="text-lg lg:text-xl font-bold">{title}</div>
                    <div className="text-base font-medium tracking-medium-wide">
                      {description.map((text, index) => {
                        const isLast = index + 1 === description.length;
                        return isLast ? (
                          <p key={`p-${index + 1}`} className="mb-0">
                            {text}
                          </p>
                        ) : (
                          <p key={`p-${index + 1}`}>{text}</p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Transformation Classes" />;

export default TransformationPage;
