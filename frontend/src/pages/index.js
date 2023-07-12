import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import homeImage from "../images/image245.png"
import {ButtonLink} from "../components/Button";

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="w-full">
      <div className="relative text-center text-Shades-0">
        <img className="w-full h-full mb-0" src={homeImage}/>
        <h1 className="absolute mb-0 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 line-clamp-2 xl:text-[60px] lg:text-[50px] md:text-[40px] sm:text-[35px] w-full text-[25px] font-bold leading-tight">Transform lives, <br/> Transform the world.</h1>
      </div>
      <div className="w-full bg-Neutral-200 justify-center flex px-4">
          <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col justify-between items-center py-[50px] max-w-container w-full gap-4">
            <h2 className="mb-0 xl:text-[60px] lg:text-[55px] md:text-[50px] sm:text-[45px] text-[40px] xl:text-left lg:text-left md:text-left sm:text-left text-center font-bold leading-tight tracking-[3.6px]">JOIN US THIS <br/> SUNDAY!</h2>
            <div className="flex flex-col items-center sm:items-center md:items-start lg:items-start xl:items-start">
              <div className="font-bold">SERVICE TIMES</div>
              <div className="font-bold text-3xl mb-2">10:00 AM ET</div>
              <div className="flex xl:justify-start lg:justify-start md:justify-start sm:justify-start justify-center text-center ">
                  <ButtonLink to={"/connect"} primary={false} hasArrow={true}>Plan Your Visit</ButtonLink>
              </div>
            </div>
          </div>
      </div>
    </div>
  </Layout>
);

export const Head = () => <Seo title="Harvest Mission Community Church" />;

export default IndexPage
