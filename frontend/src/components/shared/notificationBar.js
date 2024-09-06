import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
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

  console.log(data);

  return data?.ShowNotificationBar === true ? (
    <div className="bg-Accent-50 text-[#2f3300] font-medium text-xl text-center py-[0.9375rem] flex justify-center">
      <div className="sm:flex sm:gap-4 lg:items-center lg:max-w-none px-2 [@media(min-width:425px)]:px-8 [@media(min-width:550px)]:px-24 sm:px-16 lg:px-4 text-center sm:text-left lg:text-center">
        <div className="inline">
          <StaticImage
            src="../../images/icons/bell.png"
            alt="bell icon"
            className="w-[1.875rem]"
          />
        </div>
        <div className="inline lg:flex lg:gap-4 notification-text-container">
          <RichText data={data?.Text} />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default NotificationBar;
