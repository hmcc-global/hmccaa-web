import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Banner from "../../components/shared/banner";

const LOREM_TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const AnnouncementPage = () => {
  return (
    <Layout hasSpacing={false} className="custom-page">
      <Banner bgImage="bg-[center_60%]">TEMPORARY HEADING</Banner>
      <div className="content-padding-full w-3 pt-[1.5375rem] pb-4 lg:pb-6 px-2 [@media(min-width:425px)]:px-8 [@media(min-width:550px)]:px-24 sm:px-16 lg:px-4 flex flex-col [&>*]:w-full custom-content">
        {[0, 1, 2, 3, 4].map(idx => (
          <div key={idx} className="text-left pb-[1.3125rem] lg:pb-7 last:pb-0">
            <p>{LOREM_TEXT}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Temporary Heading" />;

export default AnnouncementPage;
