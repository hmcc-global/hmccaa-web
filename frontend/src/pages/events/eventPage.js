import * as React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import { PrimaryButtonLink } from "../../components/Button";
import Seo from "../../components/seo";



const NotFoundPage = () => (
    <Layout>
        <div className="flex flex-col lg:flex-row gap-y-5 gap-x-32 pt-[15px] pb-8 lg:py-14">

            <div className="w-sm h-sm text-center lg:text-left">
                <h2 className="pt-8 pb-4">Campus Missions Week</h2>
                <div className="flex justify-center lg:justify-start">
                    <PrimaryButtonLink hasArrow={true} to={"../../next-steps/lifegroups"}>
                        Sign Up
                    </PrimaryButtonLink>
                </div>
                <img
                    className="object-contain w-full sm:px-8 px-24 sm:pt-4"
                    src={"../images/LifeGroupImg.png"}
                    alt="404 Error"
                />
                {/* <div className="w-80">
                    <span style="text-black text-xl font-semibold font-['Raleway'] leading-normal">Contact<br /></span>
                    <span style="text-black text-base font-normal font-['Ubuntu'] leading-normal tracking-wide"><br />
                    </span>
                    <span style="text-black text-sm font-normal font-['Raleway'] leading-tight">Have a question? Please contact aaaa at aaaa@hmcc.net</span>
                </div> */}
            </div>
        </div>
    </Layout>
);

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;
