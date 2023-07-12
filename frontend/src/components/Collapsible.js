import * as React from "react";
import arrowImage from "../images/chevron-right.png";
import { useState } from "react";
import arrowImage2 from "../images/chevron-down.png";

import {
    arrow,
    subHead,
    box,
} from "../css/belief.module.css"


export const Collapsible = (props) => {
    const [reveal, setReveal] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);

    const toggle = () => {
        setReveal(!reveal);
        setButtonClicked(!buttonClicked);
    };
    const arrImage = buttonClicked? (<img className = {arrow} src = {arrowImage2}  alt = "DownArrow"/>):(<img className = {arrow} src = {arrowImage}  alt = "RightArrow"/>)
    return (
        <div className={box}>
            <div className={subHead}>
                <button onClick={toggle}>{arrImage}</button>
                <h3>{props.prop2}</h3>
            </div>
            {reveal && (
                <div className="toggle">
                    <p>{props.prop}</p>
                </div>
            )
            }
        </div>
    );
};

