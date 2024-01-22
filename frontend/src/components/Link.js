import * as React from "react";
import { Link as GatsbyLink} from "gatsby";

// specifying to as a prop will render gatsby's link component
// if an href is specified native anchor is used for external links
const Link = ({ href, to, children, ...props }) => {
  // external link
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    );
  }

  // note: to may not be defined, make link redirect to home
  if (!to) {
    to = "/";
  }

  // fall back on internal link
  return (
    <GatsbyLink to={to} {...props}>
      {children}
    </GatsbyLink>
  );
};

export default Link;
