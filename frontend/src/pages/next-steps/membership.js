import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import {
  PrimaryButtonLink,
  SecondaryButtonLink,
} from "../../components/Button";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";

const MembershipPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  return (
    <Layout>
      <div className="pt-[1.375rem] lg:pt-10 pb-[4.8125rem] lg:pb-[8.1875rem] content-padding-full gap-y-9 lg:gap-y-15 min-h-screen">
        <Breadcrumb crumbs={crumbs} crumbSeparator=" > " />
        <div className="max-w-container w-full flex flex-col gap-y-12 lg:gap-y-15 items-center">
          <h1 className="text-2xl lg:text-4xl font-semibold lg:font-bold leading-tighter mb-0 uppercase">
            Membership
          </h1>
          <div className="gap-y-5 gap-x-15 flex flex-col lg:flex-row items-center lg:items-start">
            <div className="image-container lg:order-1">
              <StaticImage
                alt="New Members"
                src="../../images/new-members.png"
              />
            </div>
            <div className="content-container flex flex-col gap-y-5 lg:gap-y-10">
              <div className="text-base lg:text-lg">
                <p>
                  As believers in Jesus Christ, we are members of his spiritual
                  body and we see that demonstrated with a commitment to the
                  local church.
                </p>
                <p>
                  A healthy local church is committed to Christ and to each
                  other through accountability, encouragement, support and love.
                  We see that actively lived out through attendance, giving,
                  prayer, and service.
                </p>
                <p className="mb-0">
                  If you&apos;re interested in becoming a member at HMCC, please
                  click the link below.
                </p>
              </div>
              <div className="flex">
                <PrimaryButtonLink href="/" hasArrow={true}>
                  Become a Member
                </PrimaryButtonLink>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-container w-full gap-y-5 flex flex-col lg:items-start border-2 border-solid border-Neutral-600 rounded-2xl px-[0.875rem] lg:px-[1.8125rem] pt-[1.1875rem] pb-[1.625rem] lg:pt-[1.875rem] lg:pb-[1.6875rem]">
          <div className="max-w-[68.1875rem] w-full flex flex-col lg:flex-row gap-y-3 lg:gap-y-8 text-center gap-x-8 justify-between">
            <p className="text-base lg:text-lg mb-0 lg:max-w-[39.189375rem]">
              HMCC Distinctives are the specific secondary Biblical beliefs that
              HMCC holds. We know that those who join our church come from many
              different faith backgrounds and traditions, and are in an ongoing
              process of learning, discipleship, spiritual formation, and
              sanctification. We do not expect that everyone will agree on all
              of these distinctives, but we do want our members to be aware of
              them and to expect that they will be taught and implemented in our
              church.
            </p>
            <div className="flex justify-center items-center">
              <div>
                <SecondaryButtonLink
                  href="https://docs.google.com/document/d/1NXPvLM2kn_cAGqbsc60_xUZZEspcf2AkEJ_azu_18rY/edit?usp=sharing"
                  hasArrow={true}
                  customClassName={{
                    textContainer: "-indent-[8.5rem] sm:indent-0",
                  }}
                >
                  Read More on HMCC Distinctives
                </SecondaryButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Membership" />;

export default MembershipPage;
