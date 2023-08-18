import * as React from "react";
import {Circle} from "../svgs/index";
import { PrimaryButtonLink } from "../Button";

 const fiveEInfo =[
    {
        word: "Evangelism",
        text1Bold: "We value ",
        text1: "God's desire for all people to have a personal and life-transforming relationship with Jesus Christ.",
        text2: ", we believe that every Christian is called to invest in the process of sharing the Gospel to those in their sphere of influence, their community, and to the nations.",
        text2Bold: "Therefore",
        color: "#C07560"
    },
    {
        word: "Exaltation",
        text1Bold: "We value ",
        text1: "passionately worshiping God in and above all things.",
        text2: ", we believe in wholeheartedly giving our best in every aspect of our lives, both public and private, in order to exemplify the worthiness of God.",
        text2Bold: "Therefore",
        color: "#B29762"
    },
    {
        word: "Edification",
        text1Bold: "We value ",
        text1: "biblical community that encourages a deeper relationship with God and with one another.",
        text2: ", we believe in creating an environment that fosters authenticity, accountability, and opportunities to minister to one another.",
        text2Bold: "Therefore",
        color: "#B1A970"
    },
    {
        word: "Education",
        text1Bold: "We value ",
        text1: "cultivating disciples who know God intimately and reflect Christ’s character.",
        text2: ", we believe that God’s Word and its practical life application are foundational for our spiritual growth and journey with God.",
        text2Bold: "Therefore",
        color: "#65759F"
    },
    {
        word: "Extension",
        text1Bold: "We value ",
        text1: "building up a healthy, dynamic, and vibrant church.",
        text2: ", we believe in equipping and training people for ministry so that they can impact the campus and city and influence the nations in such a way that the world cannot ignore.",
        text2Bold: "Therefore",
        color: "#6D8165"
    }
];

const FiveEs = () => (
    <div>
        <h1 className="text-center text-[24px] font-semibold">
            HMCC has defined the five values of biblical community found in Acts 2:42-47 as follows:
        </h1>
        <div className="flex gap-x-[44px] mx-[135px] pb-[100px]">
            {fiveEInfo.map((item, i, index) => (
            <span key={`fiveEInfo-${index}`} className="flex flex-col text-center items-center">
                <Circle color={item.color}/>
                <div className="pt-[20px] pb-[12px] text-[24px] font-semibold">
                   {item.word} 
                </div>
                <div className="flex flex-col gap-y-7">
                    <div className="text-[14px]"><span className="font-bold">{item.text1Bold}</span>{item.text1}</div>
                    <div className="text-[14px]"><span className="font-bold">{item.text2Bold}</span>{item.text2}</div>
                    <div className="text-[11px]">
                        {i == 0 &&(<p>(&#8220;...added to their number daily those who were being saved.&#8220; <span className="whitespace-nowrap">- <span className="font-bold">Acts 2:47b</span></span>)</p>)}   
                        {i == 1 && (<p>(&#8220;They devoted themselves to … breaking of bread and prayers … praising God …&#8220; <span className="whitespace-nowrap">- <span className="font-bold">Acts 2:46-47</span></span>)</p>)}    
                        {i == 2 && (<p>(&#8220;...devoted to the fellowship...all the believers were together...they ate together.&#8220; - <span className="font-bold whitespace-nowrap">Acts 2:42-44</span>)</p>)}
                        {i == 3 && (<p>(&#8220;They devoted themselves to the apostles&#39; teaching.&#8220; <span className="whitespace-nowrap">- <span className="font-bold">Acts 2:42</span></span>)</p>)}
                        {i == 4 && (<p>(&#8220;They gave to anyone as he had need.&#8220; <span className="whitespace-nowrap">- <span className="font-bold">Acts 2:45</span></span>)</p>)}
                    </div>
                </div>
                                
                
            </span>
        ))}
        </div>
        <div className="flex justify-center font-bold pb-[48px]"><PrimaryButtonLink hasArrow = {true}>check out a life group</PrimaryButtonLink>
        
</div>
    <div className="text-center mx-[310px] pb-[378px]">
        <p>
        Most of our LIFE groups for students and young adults happen on <span className="font-bold">Tuesdays</span> and <span className="font-bold">Wednesdays</span>.
        </p>
        <p>
        For married couples, we typically have groups on Wednesdays, Fridays, or Sundays but may vary frequently each year. Please sign up to get more up-to-date information!
        </p>
    </div>
       
    </div>
);

export default FiveEs;