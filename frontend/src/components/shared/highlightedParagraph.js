import * as React from "react"
import {highlightedParagraph} from "./highlightedParagraph.module.css";
export const HighlightedParagraph = ({children}) => (
  <div className={highlightedParagraph}>
    {children}
  </div>
);
