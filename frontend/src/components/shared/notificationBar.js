import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import RichText from "./richText";
import Link from "../Link";

const NotificationBar = ({
  forceShow = false,
  linkTo,
  linkText,
  customContent,
}) => {
  const data = useStaticQuery(graphql`
    query notificationBarQuery {
      strapiNotificationBar {
        ShowNotificationBar
        Text
      }
    }
  `).strapiNotificationBar;

  const shouldShow =
    forceShow ||
    Boolean(linkTo && linkText) ||
    Boolean(customContent) ||
    data?.ShowNotificationBar === true;

  if (!shouldShow) {
    return null;
  }

  const renderContent = () => {
    if (customContent) {
      return customContent;
    }
    if (linkTo && linkText) {
      return (
        <div>
          <p>
            <Link
              to={linkTo}
              className="text-Accent-500 underline font-bold whitespace-nowrap inline-block"
            >
              {linkText}
            </Link>
          </p>
        </div>
      );
    }
    if (data?.Text) {
      return <RichText data={data?.Text} addPaddingBelowParagraph={false} />;
    }
    return (
      <div>
        <p>
          <Link
            to="/announcement"
            className="text-Accent-500 underline font-bold whitespace-nowrap inline-block"
          >
            Link to page
          </Link>
        </p>
      </div>
    );
  };

  return (
    <div className="bg-Accent-50 text-[#2f3300] font-medium text-base text-left py-3 flex justify-center">
      <div className="flex items-center gap-2 sm:gap-3 lg:max-w-none px-2 [@media(min-width:425px)]:px-8 [@media(min-width:550px)]:px-24 sm:px-16 lg:px-4 text-left">
        <div className="shrink-0 flex items-center">
          <StaticImage
            src="../../images/icons/bell.png"
            alt="bell icon"
            className="w-6 h-6"
          />
        </div>
        <div className="inline lg:flex lg:gap-4 notification-text-container">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;
