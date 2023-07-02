import * as React from "react"
import arrowImage from "../images/chevron-right.png"
import {
    container,
    titleContainer,
    middleContainer,
    arrow,
    subHead,
    box,
} from "../css/belief.module.css"

const Belief = () => (
    <div className = {container}>
        <div className = {titleContainer}>
            <div className="subheading">Our Beliefs</div>
            <h2>What We Believe</h2>
        </div>
        <div className = {middleContainer}>
            {/* left side */}
                <div className= {box}>
                    <div className = {subHead}>
                        <img className = {arrow} src = {arrowImage}  alt = "RightArrow"/>                     
                        <h3>The Bible</h3>
                    </div>
                    <p>We believe the Bible, both the Old and New Testaments, is the only inspired, infallible, and 
                        authoritative Word of God. It is the supreme source of truth for Christian faith and living.</p>
                </div>
                
                <div className = {box}>
                    <div className = {subHead}>
                        <img className = {arrow} src = {arrowImage}  alt = "RightArrow"/>                     
                        <h3>God</h3>
                    </div>
                    <p>We believe in one God, Creator of all things, infinitely perfect and eternally existing in three 
                        persons: Father, Son, and Holy Spirit.</p>
                </div>
                <div className = {box}>
                    <div className = {subHead}>
                        <img className = {arrow} src = {arrowImage}  alt = "RightArrow"/>                     
                        <h3>Jesus</h3>
                    </div>
                    <p>We believe that Jesus Christ is true (fully) God and true (fully) man, having been conceived of the 
                        Holy Spirit and born of the virgin Mary. He died on the cross, the complete and final sacrifice for 
                        our sins according to the Scriptures. He arose bodily from the dead, and ascended into heaven where, at God’s 
                        right hand, He intercedes for His people and rules as Lord over all.</p>
                </div>
                <div className = {box}>
                <div className = {subHead}>
                        <img className = {arrow} src = {arrowImage}  alt = "RightArrow"/>                     
                        <h3>Holy Spirit</h3>
                    </div>
                    <p>We believe that the ministry of the Holy Spirit is to glorify the Lord Jesus Christ, and during this age to 
                        convict the world of sin. He also regenerates the believing sinner, indwelling, guiding, instructing, and 
                        empowering us for godly living and sacrifice.</p>
                </div>
                <div className = {box} class="break-inside-avoid-column">
                    <div className = {subHead}>
                        <img className = {arrow} src = {arrowImage}  alt = "RightArrow"/>                     
                        <h3>Man</h3>
                    </div>
                    <p>We believe that the man was created in the image of God, but fell into sin and is therefore destined for eternal 
                        death. Only through regeneration by the Holy Spirit can salvation and spiritual life be obtained.</p>
                </div>

            {/* right side */}
                <div className = {box}>
                    <div className = {subHead}>
                        <img className = {arrow} src = {arrowImage}  alt = "RightArrow"/>                     
                        <h3>Salvation</h3>
                    </div>
                    <p>We believe that the shed blood of Jesus Christ and His resurrection provide the only grounds for justification and 
                        salvation for all who believe, and only those who receive Jesus Christ by faith are born of the Holy Spirit and thus 
                        become children of God.</p>
                </div>
                <div className = {box}>
                    <div className = {subHead}>
                        <img className = {arrow} src = {arrowImage}  alt = "RightArrow"/>                     
                        <h3>Future Events</h3>
                    </div>
                    <p>We believe in the visible, personal, glorious, imminent return of Jesus Christ, His bodily resurrection of the dead, 
                        the judgment of the just and the unjust, and the fulfillment of Christ’s Kingdom in the new heavens and the new earth. 
                        Then shall the eager expectation of creation be fulfilled and the whole earth shall proclaim the glory of God who makes 
                        all things new.</p>
                </div>
                <div className = {box}>
                    <div className = {subHead}>
                        <img className = {arrow} src = {arrowImage}  alt = "RightArrow"/>                     
                        <h3>Church</h3>
                    </div>
                    <p>We believe that the true Church is composed of all such persons who through saving faith in Jesus Christ have been 
                        regenerated by the Holy Spirit and are united together in the body of Christ. We believe that Jesus Christ is the 
                        Head of the Church, and that every local church has the right under Christ to decide and govern its own affairs.</p>
                </div>
                <div className = {box}>
                    <div className = {subHead}>
                        <img className = {arrow} src = {arrowImage}  alt = "RightArrow"/>                     
                        <h3>Ordinances</h3>
                    </div>
                    <p>We believe that water baptism and the Lord’s Supper are ordinances to be observed by the Church during the present age. 
                        They are, however, not to be regarded as means of salvation.</p>
                </div>
        </div>
        
    
    </div>
)
export default Belief