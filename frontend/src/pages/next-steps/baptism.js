import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import { PrimaryButtonLink } from "../../components/Button";
import { StaticImage } from "gatsby-plugin-image";
import "../../css/button-compnent.css";

const BaptismPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  return (
    <Layout>
      <div className="pt-[1.375rem] lg:pt-10 pb-[4.8125rem] lg:pb-[8.1875rem] content-padding-full gap-y-5 lg:gap-y-15 min-h-screen">
        <Breadcrumb crumbs={crumbs} crumbSeparator=" > " />
        <div className="max-w-container w-full flex flex-col gap-y-12 lg:gap-y-15 items-center">
          <h1 className="text-2xl lg:text-4xl font-semibold lg:font-bold leading-tighter mb-0 uppercase">
            Baptism
          </h1>
          <div className="gap-y-5 gap-x-15 flex flex-col lg:flex-row items-center lg:items-start">
            <div className="image-container lg:order-1">
              <StaticImage alt="Baptism" src="../../images/baptism.png" />
            </div>
            <div className="content-container flex flex-col gap-y-5 lg:gap-y-10">
              <div className="text-base lg:text-lg">
                <p>
                  At HMCC, we believe that baptism is an important step in the
                  Christian faith as an outward expression of our inward faith.
                </p>
                <p>
                  Baptism represents a union with Jesus in his death and
                  resurrection, which is only possible through saving faith in
                  him. It is a response to the saving work of Christ and an
                  inward faith in the life of believer, but not a means of
                  salvation. Baptism allows the believer to publicly declare
                  their commitment to follow Jesus and to celebrate that with
                  their church community.
                </p>
                <p className="mb-0">
                  If you are interested in learning more about baptism or
                  becoming baptized, please sign up with the link below.
                </p>
              </div>
              <div className="flex btn-container-wide justify-center lg:justify-start">
                <PrimaryButtonLink to="/" hasArrow={true}>
                  Sign Up for Baptism Class
                </PrimaryButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Baptism" />;

export default BaptismPage;
