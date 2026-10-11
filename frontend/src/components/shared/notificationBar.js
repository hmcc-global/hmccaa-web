import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import RichText from "./richText";

const NotificationBar = () => {
  const data = useStaticQuery(graphql`
    query notificationBarQuery {
      strapiNotificationBar {
        ShowNotificationBar
        Text
      }
    }
  `).strapiNotificationBar;

  return data?.ShowNotificationBar === true ? (
    <div className="bg-Accent-50 text-[#2f3300] font-medium text-xl text-left py-[0.9375rem] flex justify-center">
      <div className="sm:flex sm:gap-4 lg:items-center lg:max-w-none px-2 [@media(min-width:425px)]:px-8 [@media(min-width:550px)]:px-24 sm:px-16 lg:px-4 text-left">
        <div className="block px-4 sm:px-0 text-center sm:text-left lg:flex lg:gap-4 notification-text-container">
          <RichText data={data?.Text} addPaddingBelowParagraph={false} />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default NotificationBar;
