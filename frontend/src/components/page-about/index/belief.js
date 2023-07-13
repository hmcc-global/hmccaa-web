import * as React from "react"
import { Collapsible } from "../../collapsible"
import {
    container,
    titleContainer,
    middleContainer,
} from "../../../css/belief.module.css"

const LeftBeliefs = [
    {sectionHead: "The Bible", sectionBody: "We believe the Bible, both the Old and New Testaments, is the only inspired, infallible, and authoritative Word of God. It is the supreme source of truth for Christian faith and living."},
    {sectionHead: "God", sectionBody: "We believe the Bible, both the Old and New Testaments, is the only inspired, infallible, and authoritative Word of God. It is the supreme source of truth for Christian faith and living."},
    {sectionHead: "Jesus", sectionBody: "We believe the Bible, both the Old and New Testaments, is the only inspired, infallible, and authoritative Word of God. It is the supreme source of truth for Christian faith and living."},
    {sectionHead: "Holy Spirit", sectionBody: "We believe the Bible, both the Old and New Testaments, is the only inspired, infallible, and authoritative Word of God. It is the supreme source of truth for Christian faith and living."},
    {sectionHead: "Man", sectionBody: "We believe the Bible, both the Old and New Testaments, is the only inspired, infallible, and authoritative Word of God. It is the supreme source of truth for Christian faith and living."},
]

const RightBeliefs = [
    {sectionHead: "Salvation", sectionBody: "We believe the Bible, both the Old and New Testaments, is the only inspired, infallible, and authoritative Word of God. It is the supreme source of truth for Christian faith and living."},
    {sectionHead: "Future Events", sectionBody: "We believe the Bible, both the Old and New Testaments, is the only inspired, infallible, and authoritative Word of God. It is the supreme source of truth for Christian faith and living."},
    {sectionHead: "Church", sectionBody: "We believe the Bible, both the Old and New Testaments, is the only inspired, infallible, and authoritative Word of God. It is the supreme source of truth for Christian faith and living."},
    {sectionHead: "Ordinances", sectionBody: "We believe the Bible, both the Old and New Testaments, is the only inspired, infallible, and authoritative Word of God. It is the supreme source of truth for Christian faith and living."},
]

const Belief = () => (
    <div className = {container}>
        <div className = {titleContainer}>
            <div className="subheading">Our Beliefs</div>
            <h2>What We Believe</h2>
        </div>
        <div className = {middleContainer}>
            {/* left side */}
            <div>
                {LeftBeliefs.map((LeftBeliefs, index) =>
                    <Collapsible key={index} sectionHead={LeftBeliefs.sectionHead} sectionBody={LeftBeliefs.sectionBody}/>
                )}
            </div>
            {/* right side */}
            <div>
                {RightBeliefs.map((RightBeliefs, index) =>
                    <Collapsible key={index} sectionHead={RightBeliefs.sectionHead} sectionBody={RightBeliefs.sectionBody}/>
                )}
            </div>
        </div>
    </div>
)
export default Belief