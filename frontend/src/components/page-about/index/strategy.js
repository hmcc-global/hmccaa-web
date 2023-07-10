import * as React from "react";
import StrategyImage from "../../../images/image257.png";
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
      <h2>The 3G's: Gather, Grow, Go</h2>
    </div>
    <div className="relative">
      <div className={svgContainer}>
        <Arrows
          direction="north"
          size="lg"
          width="w-43"
          viewBox="0 0 172 200"
        />
        <div className="flex items-center gap-25">
          <Arrows direction="west" width="w-50" viewBox="0 0 200 172" />
          <Arrows direction="east" width="w-50" viewBox="0 0 200 172" />
        </div>
        <div className="flex flex-col items-center gap-10 w-26">
          <Arrows
            direction="north"
            size="sm"
            width="w-full"
            viewBox="0 0 104 121"
          />
          <Arrows direction="all" width="w-full" viewBox="0 0 106 162" />
        </div>
      </div>
      <div className={`${step} ${step3}`}>
        <div className={count}>3</div>
        <div>
          <h3>Go: Personal Mission & Team-Based Mission</h3>
          <div>
            We have been called to go out and make disciples, by sharing the
            Good News and testifying of the work God has done in our lives.
            <ul>
              <li>
                Personal Mission happens when an individual lives as the salt
                and light in our world, shares his/her faith with others and
                invites people into our community.
              </li>
              <li>
                Team-Based Mission happens when we partner together for God’s
                kingdom purposes through opportunities like missional
                initiatives, missions teams, and church plant teams.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`${step} ${step2}`}>
        <div className={count}>2</div>
        <div>
          <h3>Grow: Life-on-Life & Equipping</h3>
          <div>
            We believe it is crucial that we do not grow stagnant in our faith,
            but that we are continually learning and being challenged.
            <ul>
              <li>
                Life-on-Life involves intentional relationships like Life Change
                Groups (LCG) and discipleship, which allows us to sharpen each
                other as Christ-followers.
              </li>
              <li>
                Equipping entails purposeful investment in people to live a
                transformed life through opportunities such as Experiencing
                Classes, Freedom Class, ministry team service, and learning to
                study the Bible and pray.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`${step} ${step1}`}>
        <div className={count}>1</div>
        <div>
          <h3>Gather: Corporate Gatherings & Community Gatherings</h3>
          <div>
            We gather to foster a greater sense of unity and to continue to
            build up the church body.
            <ul>
              <li>
                Corporate Gatherings are what we do together as the local body
                of Christ, such as Sunday Celebration, retreats, and baptism
                services.
              </li>
              <li>
                Community Gatherings are what we do in biblical community,
                specifically LIFE Group.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div>
      <img src={StrategyImage} alt="3G's: Gather, Grow, Go" />
    </div>
  </div>
);

export default Strategy;
