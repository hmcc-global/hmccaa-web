import * as React from "react";
import { Link as GatsbyLink} from "gatsby";

const Link = ({ href, to, children }) => {
  // external link
  if (href) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  // internal link
  } else if (to) {
    return (
      <GatsbyLink to={to}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <div>{children}</div>
  );
};

export default Link;
