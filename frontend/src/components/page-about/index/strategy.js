import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import {
  titleContainer,
  step,
  step1,
  step2,
  step3,
  count,
  container,
  svgContainer,
} from "../../../css/strategy.module.css";
import { Arrows } from "../../svgs";

const Strategy = () => (
  <div className={container}>
    <div className={titleContainer}>
      <div className="subheading">Our Strategy</div>
      <h2>
        The <span className="text-Accent-700">3G</span>&apos;s: Gather, Grow, Go
      </h2>
    </div>
    <div className="px-4 lg:relative">
      <div className={svgContainer}>
        <Arrows
          direction="north"
          size="lg"
          width="w-[34.4%]"
          viewBox="0 0 172 200"
        />
        <div className="flex items-center gap-[20%]">
          <Arrows direction="west" width="w-[40%]" viewBox="0 0 200 172" />
          <Arrows direction="east" width="w-[40%]" viewBox="0 0 200 172" />
        </div>
        <div className="flex flex-col items-center gap-10 w-[20.8%]">
          <Arrows
            direction="north"
            size="sm"
            width="w-full"
            viewBox="0 0 104 121"
          />
          <Arrows direction="all" width="w-full" viewBox="0 0 106 162" />
        </div>
      </div>
      <div className="flex flex-col items-center lg:block">
        <div className={`${step} ${step3}`}>
          <div className="lg:relative lg:pl-[66px]">
            <div className="flex items-center pb-3 lg:pb-0 lg:block">
              <div className={count}>3</div>
              <h3>
                <span className="text-Accent-700">Go:</span> Personal Mission &
                Team-Based Mission
              </h3>
            </div>
            <div>
              Jesus calls us to continue his mission until every nation is
              reached. We live this out through relational evangelism to those
              around us and abroad in various ways:
              <ul>
                <li>Supported Missionaries</li>
                <li>Local Organization Partnerships</li>
                <li>Short-term Missions Teams</li>
                <li>Evangelism Training</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${step} ${step2}`}>
          <div className="lg:relative lg:pl-[66px]">
            <div className="flex items-center pb-3 lg:pb-0 lg:block">
              <div className={count}>2</div>
              <h3>
                <span className="text-Accent-700">Grow:</span> Life-on-Life &
                Equipping
              </h3>
            </div>
            <div>
              We believe that people grow to maturity in biblical community
              where the gospel is radically lived out.
              <ul>
                <li>
                  In Life groups, we practice our faith, study the Bible, pray
                  together, and build life-on-life discipleship relationships.
                </li>
                <li>
                  School of Transformation classes provide training and growth
                  opportunities that support the process of disciple-making
                  across our church.
                </li>
                <li>
                  Men&apos;s and Women&apos;s Ministries bring the church
                  together across life-stages to study how to live out our lives
                  for the Gospel.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${step} ${step1}`}>
          <div className="lg:relative lg:pl-[66px]">
            <div className="flex items-center lg:block">
              <div className={count}>1</div>
              <h3>
                <span className="text-Accent-700">Gather:</span> Corporate
                Gatherings & Community Gatherings
              </h3>
            </div>
            <div>
              We gather as the family of God to celebrate what God has done and
              is doing in our community, to preach and teach the word of God, to
              serve the Lord with our spiritual gifts, time, and energy, and to
              seek God in prayer for our church and the world around us. These
              gatherings include:
              <ul>
                <li>
                  Weekly Gatherings (Sunday Celebration, Prayer Gathering,
                  Encounter)
                </li>
                <li>Special Events (Retreats, Conferences)</li>
                <li>Ministry Teams</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <StaticImage
        src="../../../images/image257.png"
        alt="3G's: Gather, Grow, Go"
      />
    </div>
  </div>
);

export default Strategy;
