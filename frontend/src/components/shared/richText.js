import React from "react";
import Link from "../Link";

const formatText = ({ text, code, bold, italic, underline, strikethrough }) => {
  if (text === "") {
    return "";
  }
  const style = `whitespace-pre-wrap ${bold ? "font-bold" : ""}  ${
    italic ? "italic" : ""
  } ${underline ? "underline" : ""} ${strikethrough ? "line-through" : ""}`;
  const span = <span className={style}>{text}</span>;
  return code ? <code>{span}</code> : span;
};

const formatLink = ({ url, children }) => {
  return (
    <Link
      href={url}
      className="text-Accent-500 underline font-bold whitespace-nowrap inline"
    >
      {formatParagraph(children)}
    </Link>
  );
};

const formatParagraph = children => {
  return children.map(child => {
    switch (child.type) {
      case "link":
        return formatLink(child);
      case "text":
      default:
        return formatText(child);
    }
  });
};

const formatOrderedList = children => {
  return (
    <ol className="list-decimal list-inside">
      {children.map((child, idx) => (
        <li key={idx}>{formatParagraph(child.children)}</li>
      ))}
    </ol>
  );
};

const formatUnorderedList = children => {
  return (
    <ul className="list-disc list-inside">
      {children.map((child, idx) => (
        <li key={idx}>{formatParagraph(child.children)}</li>
      ))}
    </ul>
  );
};

const formatHeading = (level, children) => {
  const text = formatParagraph(children);
  const headingStyle = "text-center";
  switch (level) {
    case 1:
      return <h2 className={headingStyle}>{text}</h2>;
    case 2:
      return <h2 className={headingStyle}>{text}</h2>;
    case 3:
      return <h3 className={headingStyle}>{text}</h3>;
    case 4:
      return <h4 className={headingStyle}>{text}</h4>;
    case 5:
      return <h5 className={headingStyle}>{text}</h5>;
    case 6:
      return <h6 className={headingStyle}>{text}</h6>;
    default:
      return text;
  }
};

const formatNode = ({ type, format, level, image, children }) => {
  switch (type) {
    case "image":
      return (
        <img
          src={image.url}
          alt={image.alternativeText}
          className="flex justify-center items-center content-image lg:w-1/3"
        />
      );
    case "heading":
      return formatHeading(level, children);
    case "quote":
      return (
        <blockquote className="block ms-4 me-4 my-1">
          {formatParagraph(children)}
        </blockquote>
      );
    case "code":
      return (
        <pre>
          <code>{children[0].text}</code>
        </pre>
      );
    case "list":
      switch (format) {
        case "ordered":
          return formatOrderedList(children);
        case "unordered":
          return formatUnorderedList(children);
        default: // Treat unknown format case as regular paragraph
          break;
      }
    case "paragraph":
    default: // Treat default case as regular paragraph
      return <div>{formatParagraph(children)}</div>;
  }
};

const RichText = ({ data, addPaddingToParagraphs = false }) => {
  if (!Array.isArray(data)) {
    return "";
  }

  return (
    <div>
      {data.map((node, idx) => (
        <div key={idx} className={addPaddingToParagraphs ? "my-3" : ""}>
          {formatNode(node)}
        </div>
      ))}
    </div>
  );
};

export default RichText;
