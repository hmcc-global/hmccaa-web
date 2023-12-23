import * as React from "react";
import { Link as GatsbyLink} from "gatsby";

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
