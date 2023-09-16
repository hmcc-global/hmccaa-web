import * as React from "react";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const HmiPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  return (
    <Layout>
      <div className="px-4 flex flex-col w-full items-center pt-[1.375rem] lg:pt-10 gap-y-[2.1875rem] lg:gap-y-[3.75rem] pb-[7.3125rem]">
        <Breadcrumb crumbs={crumbs} crumbSeparator=" > " />
        <div className="max-w-container w-full flex flex-col items-center gap-y-8 lg:gap-y-[6.25rem]">
          <div className="flex flex-col gap-y-9 lg:gap-y-15">
            <h1 className="uppercase text-center text-2xl lg:text-4xl font-bold leading-tighter mb-0">
              Harvest Mission International (HMI)
            </h1>
            <div className="flex flex-col lg:flex-row gap-y-[1.25rem] lg:gap-y-0 lg:gap-x-30 lg:items-center pt-[0.9375rem] pb-6 lg:py-0">
              <div className="lg:order-2 lg:max-w-[49.152542%]">
                <StaticImage
                  src="../../images/hmi-hands-all-in.jpeg"
                  alt="Hands All In"
                />
              </div>
              <div className="lg:order-1 lg:max-w-[40.67797%]  text-center lg:text-left">
                <p className="mb-6 lg:mb-[1.3125rem]">
                  As Christ has called us to &apos;make disciples of all
                  nations&apos; (Matthew 28:19), we value the importance of the
                  local church making an impact in its surrounding community for
                  the Gospel of Jesus Christ. Similar to the early church seen
                  in the Book of Acts, we believe in doing missions through
                  planting churches. It is our desire to establish and raise up
                  visible local bodies of Christ&apos;s followers who are
                  witnesses to their own communities.
                </p>
                <p className="mb-0">
                  Specifically, we seek to target cities with viable college
                  campuses, as students are the future leaders of our world. As
                  a church reaches a campus, we believe that it will begin to
                  impact the community, the city, and ultimately, the nations.
                  Currently HMI is involved in short-term projects both locally
                  and internationally. Starting in Ann Arbor, HMI now has church
                  plants in Austin, Jakarta, Indonesia, Hong Kong, and Detroit.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-[1.25rem] lg:gap-y-3  text-center lg:text-left">
            <h2 className="uppercase text-xl lg:text-3xl leading-tighter">Projects</h2>
            <p className="mb-0 text-base lg:text-lg">
              As an extension of HMCC&apos;s ministries, Harvest Mission
              International (HMI) is committed to participating in short-term
              missions projects during the spring and summer. By sending out
              teams to serve in a cross-cultural missions environment, it is our
              hope that kingdom workers will be trained to serve the body of
              Christ and to commit to life-long involvement in world missions.
              As team members learn to selflessly serve and support local
              churches, they have the opportunity to witness how God is working
              in other parts of the world.
            </p>
          </div>
          <div className="flex flex-col gap-y-[1.25rem] lg:gap-y-3 pt-[0.9375rem]  text-center lg:text-left">
            <h2 className="uppercase text-xl lg:text-3xl leading-tighter">
              Supported Workers
            </h2>
            <p className="mb-0 text-base lg:text-lg">
              Partnership is critical as we strive to reach the nations with the
              Gospel message. We know that missions cannot be done by a sole
              missionary, but that it is our privilege to participate in God&apos;s
              work around the world through our prayers and financial support.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Harvest Mission International (HMI)" />;

export default HmiPage;
