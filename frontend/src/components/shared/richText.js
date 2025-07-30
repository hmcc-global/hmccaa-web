import React from "react";
import Link from "../Link";
import { Collapsible } from "../collapsible";

const formatText = (
  { text, code, bold, italic, underline, strikethrough },
  idx
) => {
  if (text === "") {
    return "";
  }
  const style = `whitespace-pre-wrap break-all ${bold ? "font-bold" : ""}  ${
    italic ? "italic" : ""
  } ${underline ? "underline" : ""} ${
    strikethrough ? "line-through" : ""
  }`.trim();
  const span = (
    <span className={style} key={`${text}${idx}`}>
      {text}
    </span>
  );
  return code ? <code key={`${text}${idx}`}>{span}</code> : span;
};

const formatLink = ({ url, children }, idx) => {
  return (
    <Link
      key={`${url}${idx}`}
      href={url}
      className="text-Accent-500 underline font-bold whitespace-nowrap inline-block"
    >
      {formatParagraphHelper(children)}
    </Link>
  );
};

const formatParagraph = (children, addPaddingBelowParagraph = true) => {
  const BEG = "<collapsible-question>";
  const MID = "</collapsible-question><collapsible-answer>";
  const END = "</collapsible-answer>";

  if (
    children.length > 0 &&
    children[0].text?.startsWith(BEG) &&
    children[children.length - 1].text?.endsWith(END)
  ) {
    let midIndex = children.findIndex(child => child.text?.includes(MID));
    let midIndexIndex = children[midIndex].text.indexOf(MID);
    if (midIndex != -1) {
      let question = structuredClone(children.slice(0, midIndex + 1));
      question[midIndex].text = question[midIndex].text.slice(0, midIndexIndex);
      question[0].text = question[0].text.slice(BEG.length);
      let answer = children.slice(midIndex);
      answer[answer.length - 1].text = answer[answer.length - 1].text.slice(
        0,
        answer[answer.length - 1].text.length - END.length
      );
      answer[0].text = answer[0].text.slice(midIndexIndex + MID.length);
      console.log("[RichText] Found Collapsible:", question, answer);
      return (
        <div className="pb-[1.3125rem] lg:pb-3">
          <Collapsible
            sectionHead={formatParagraphHelper(question)}
            sectionBody={formatParagraphHelper(answer)}
            overrideCss={{
              chevron: "md:w-10",
            }}
          />
        </div>
      );
    } else {
      console.log(
        "[RichText] Found collapsible but encountered error; formatting as text. Text:",
        children
      );
    }
  }

  return (
    <div
      className={`text-left ${
        addPaddingBelowParagraph ? "pb-[1.3125rem] lg:pb-7" : ""
      }`}
    >
      {formatParagraphHelper(children)}
    </div>
  );
};

const formatParagraphHelper = children => {
  return children.map((child, idx) => {
    switch (child.type) {
      case "link":
        return formatLink(child, idx);
      case "text":
      default:
        return formatText(child, idx);
    }
  });
};

const formatOrderedList = children => {
  return (
    <ol className="list-decimal list-inside">
      {children.map((child, idx) => (
        <li key={idx}>{formatParagraphHelper(child.children)}</li>
      ))}
    </ol>
  );
};

const formatUnorderedList = children => {
  return (
    <ul className="list-disc list-inside">
      {children.map((child, idx) => (
        <li key={idx}>{formatParagraphHelper(child.children)}</li>
      ))}
    </ul>
  );
};

const formatHeading = (level, children) => {
  const text = formatParagraphHelper(children);
  const headingStyle = "text-left";
  switch (level) {
    case 1:
      return <h2 className={headingStyle}>{text}</h2>;
    case 2:
      return <h3 className={headingStyle}>{text}</h3>;
    case 3:
      return <h4 className={headingStyle}>{text}</h4>;
    case 4:
      return <h5 className={headingStyle}>{text}</h5>;
    case 5:
      return <h6 className={headingStyle}>{text}</h6>;
    case 6:
      return <div className={` .h7 ${headingStyle}`}>{text}</div>;
    default:
      return text;
  }
};

const formatNode = (
  { type, format, level, image, children },
  addPaddingBelowParagraph = true
) => {
  switch (type) {
    case "image":
      return (
        <div>
          <img
            src={image.url}
            alt={image.alternativeText}
            className="items-start lg:items-center content-image lg:w-1/3"
          />
        </div>
      );
    case "heading":
      return formatHeading(level, children);
    case "quote":
      return (
        <blockquote className="block ms-4 me-4 my-1">
          {formatParagraphHelper(children)}
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
      return formatParagraph(children, addPaddingBelowParagraph);
    default: // Treat default case as regular paragraph
      return formatParagraph(children, addPaddingBelowParagraph);
  }
};

const RichText = ({ data, addPaddingBelowParagraph = true }) => {
  if (!Array.isArray(data)) {
    return "";
  }

  return (
    <>
      {data.map((node, idx) => (
        <React.Fragment key={idx}>
          {formatNode(node, addPaddingBelowParagraph)}
        </React.Fragment>
      ))}
    </>
  );
};

export default RichText;
