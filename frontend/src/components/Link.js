import * as React from "react";
import { Link as GatsbyLink} from "gatsby";

// specifying to as a prop will render gatsby's link component
// if an href is specified native anchor is used for external links
const Link = ({ href, to, children, ...rest }) => {
  // external link
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" {...rest}>
        {children}
      </a>
    );
  // internal link
  } else if (to) {
    return (
      <GatsbyLink to={to} {...rest}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <div {...rest}>
      {children}
    </div>
  );
};

export default Link;
