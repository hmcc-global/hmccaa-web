import React from "react";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import Seo, { PageDescriptions } from "../../components/seo";
import { Heading } from "../../components/page-about/team/heading";
import EldersSection from "../../components/page-about/team/eldersSection";
import DeaconsSection from "../../components/page-about/team/deaconsSection";
import Questions from "../../components/gotQuestions";

const OurTeamPage = ({
  data: { strapiOurTeamPage },
  pageContext: {
    breadcrumb: { crumbs },
  },
}) => {
  const { Elders, deacons } = strapiOurTeamPage;
  return (
    <Layout>
      <div className="px-4 flex flex-col w-full items-center pt-[1.375rem] lg:pt-10 gap-y-[2.1875rem] lg:gap-y-[3.75rem]">
        <Breadcrumb crumbs={crumbs} crumbSeparator=" > " />
        <div className="max-w-container w-full flex flex-col items-center gap-y-[3.75rem] lg:gap-y-[6.25rem]">
          <Heading />
          <EldersSection elders={Elders} />
          <DeaconsSection deacons={deacons} />
        </div>
        <Questions />
      </div>
    </Layout>
  );
};

export const Head = () => (
  <Seo title="Our Team" description={PageDescriptions["about-our-team"]} />
);

export default OurTeamPage;

export const pageQuery = graphql`
  query OurTeamQuery {
    strapiOurTeamPage {
      Elders {
        Background
        Role
        TeamMember {
          DisplayName
          Email
          Headshot {
            file {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          focus_areas {
            FocusArea
          }
        }
      }
      deacons {
        DisplayName
        Email
        focus_areas {
          FocusArea
        }
        Headshot {
          file {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
