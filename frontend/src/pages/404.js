import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { PrimaryButtonLink} from "../components/Button";
import { container } from "../css/404.module.css";

const NotFoundPage = () => (
  <Layout>
    <div className={container}>
      <div className="text-center pb-11.25">
        <h1>404: Not Found</h1>
        <div className="subheading">You just hit a route that doesn&#39;t exist... the sadness.</div>
      </div>
      <div className="flex">
        <PrimaryButtonLink to={"/"} hasArrow={true}>
          Home
        </PrimaryButtonLink>
      </div>
    </div>s
  </Layout>
);

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;
