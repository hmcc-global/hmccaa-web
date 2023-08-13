import * as React from "react";
import { Link } from "gatsby";


export const PageLink = ({ children }) => (
    <div>
      {children.map((item, i, index) => (
        <span key={`children-${index}`}>
            <a 
            key={`children-${index}`}
            href={item.route}
            className="px-[3px] text-Primary-1000 no-underline"
            >{item.title}</a>
  
          {/* if not in list, add greater than symbol*/}
          {i + 1 !== children.length && (
            <span className="px-[3px]  text-Primary-1000">&gt;</span>
          )}
        </span>
      ))}
    </div>
  );
