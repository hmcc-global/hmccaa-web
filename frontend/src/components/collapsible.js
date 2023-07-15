import * as React from "react"
import arrowImageRight from "../images/chevron-right.png"
import { useState } from "react"
import arrowImageDown from "../images/chevron-down.png"
import { arrow, subHead, box } from "../css/belief.module.css"

export const Collapsible = ({ sectionHead, sectionBody }) => {
  const [reveal, setReveal] = useState(false)
  const [buttonClicked, setButtonClicked] = useState(false)
  const toggle = () => {
    setReveal(!reveal)
    setButtonClicked(!buttonClicked)
  }
  const arrImage = buttonClicked ? (
    <img className={arrow} src={arrowImageDown} alt="DownArrow" />
  ) : (
    <img className={arrow} src={arrowImageRight} alt="RightArrow" />
  )
  return (
    <div className={box}>
      <div onClick={toggle} className={subHead}>
        <button>{arrImage}</button>
        <h3>
          <button>{sectionHead}</button>
        </h3>
      </div>
      <div className={`"toggle" ${reveal ? "" : "invisible"}`}>
        <p>{sectionBody}</p>
      </div>
    </div>
  )
}
