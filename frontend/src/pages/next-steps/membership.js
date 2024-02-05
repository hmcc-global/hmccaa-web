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
      <div className="pt-[1.375rem] md:pt-10 pb-[4.8125rem] md:pb-[8.1875rem] content-padding-full gap-y-5 md:gap-y-15 min-h-screen">
        <Breadcrumb crumbs={crumbs} crumbSeparator=" > " />
        <div className="max-w-container w-full flex flex-col gap-y-15 items-center">
          <h2 className="font-bold">Membership</h2>
          <div className="gap-y-5 gap-x-15 flex flex-col md:flex-row items-center md:items-start">
            <div className="image-container md:order-1">
              <StaticImage
                alt="New Members"
                src="../../images/new-members.png"
              />
            </div>
            <div className="content-container flex flex-col gap-y-10">
              <div>
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
                <PrimaryButtonLink to="/" hasArrow={true}>
                  Become a Member
                </PrimaryButtonLink>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-container w-full gap-y-5 flex flex-col items-center border-2 border-solid border-Neutral-600 rounded-2xl px-4 py-5 md:py-[2.375rem]">
          <div className="max-w-[62.5rem] w-full flex flex-col gap-y-5 text-center">
            <p className="mb-0">
              HMCC Distinctives are the specific secondary Biblical beliefs that
              HMCC holds. We know that those who join our church come from many
              different faith backgrounds and traditions, and are in an ongoing
              process of learning, discipleship, spiritual formation, and
              sanctification. We do not expect that everyone will agree on all
              of these distinctives, but we do want our members to be aware of
              them and to expect that they will be taught and implemented in our
              church.
            </p>
            <div className="w-full flex justify-center">
              <SecondaryButtonLink to="/" hasArrow={true}>
                Read More on HMCC Distinctives
              </SecondaryButtonLink>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Membership" />;

export default MembershipPage;
