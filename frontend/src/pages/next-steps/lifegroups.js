import * as React from "react";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import { StaticImage } from "gatsby-plugin-image";
import { useRef } from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import TopLGSummary from "../../components/page-lifeGroups/topLGSummary";
import FiveEs from "../../components/page-lifeGroups/fiveEs";

const Images = () => {
  const ImagesArr = [
    <StaticImage
      src="../../images/lifegroup-1.png"
      alt="Lifegroup image 1"
      key="lg1"
    />,
    <StaticImage
      src="../../images/lifegroup-2.png"
      alt="Lifegroup image 2"
      key="lg2"
    />,
    <StaticImage
      src="../../images/lifegroup-3.png"
      alt="Lifegroup image 3"
      key="lg3"
    />,
    <StaticImage
      src="../../images/lifegroup-4.png"
      alt="Lifegroup image 4"
      key="lg4"
    />,
  ];

  return (
    <div className="flex lg:flex-row lg:flex-nowrap flex-wrap gap-6 pb-25 justify-center">
      {ImagesArr.map((item, index) => (
        <div key={index} className="max-w-[300px] self-center">
          {item}
        </div>
      ))}
    </div>
  );
};

const LifeGroupsPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  // fix button link stuff
  const lgSignupsRef = useRef(null);

  return (
    <Layout>
      <div className="px-1 [@media(min-width:375px)]:px-4 pt-[1.375rem] lg:pt-10 w-full ">
        <div className="w-full md:px-4 flex flex-col items-center">
          <div className="max-w-container w-full">
            <Breadcrumb crumbs={crumbs} crumbSeparator=" > " />
            <TopLGSummary lgSignupsRef={lgSignupsRef} />
            <Images />
            <FiveEs lgSignupsRef={lgSignupsRef} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Life Groups" />;

export default LifeGroupsPage;
