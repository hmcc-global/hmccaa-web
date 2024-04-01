import * as React from "react";
import Link from "../components/Link";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { container } from "../css/404.module.css";
import ErrorImage from "../images/404placeholder.png";

const NotFoundPage = () => (
  <Layout>
    <div className={container}>
      <div className="justify-center flex pb-4 sm:pb-20 mb-80 sm:flex-row flex-col">
        <div className="basis-1/3 pt-10 pb-0 sm:pb-10 order-1 sm:mr-20">
          <h1 className="relative text-left px-8">404: Error</h1>
          <img
            className="object-contain w-full sm:px-8 px-24 sm:pt-4"
            src={ErrorImage}
            alt="404 Error"
          />
        </div>
        <div className="pl-2.5 px-8 pt-4 lg:pt-12 order-2 mt-0 sm:mt-20 mx-14 text-center sm:text-left">
          <div className="xl:font-extrabold font-bold text-4xl sm:text-8xl sm:tracking-widest leading-tighter">
            OOPS!
          </div>
          <div className="font-bold text-xl sm:text-3.5xl leading-tighter text-Shades-100 uppercase pb-20">
            WE COULDN&apos;T FIND THAT PAGE
          </div>
          <div className="font-medium pb-6">
            Try going back or clicking one of the links below:
          </div>
          <div className="pb-3">
            <Link
              to="/connect"
              className="text-Primary-300 font-extrabold text-start leading-normal underline decoration-0 hover:opacity-75 uppercase tracking-widest text-base"
            >
              Sunday Celebration Info
            </Link>
          </div>
          <div className="pb-3">
            <Link
              href="/next-steps/lifegroups"
              className="text-Primary-300 font-extrabold text-start leading-normal underline decoration-0 hover:opacity-75 uppercase tracking-widest text-base"
            >
              Life Group Sign Up
            </Link>
          </div>
          <div className="pb-3">
            <Link
              to="/events"
              className="text-Primary-300 font-extrabold text-start leading-normal underline decoration-0 hover:opacity-75 uppercase tracking-widest text-base"
            >
              Upcoming Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;
