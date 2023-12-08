import React from "react";
import Layout from "../../../components/layout";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import {
  BookIcon,
  CalendarIcon,
  SeriesIcon,
  UserIcon,
} from "../../../components/svgs";
import { StaticImage } from "gatsby-plugin-image";
const sermon = {
  title: "Psalm 113",
  date: "August 13, 2023",
  speaker: "Pastor Pete Dahlem",
  passage: "Psalm 133",
  series: "Selah",
  description: "Sermon on Psalm 133",
};
const SermonPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const { title, date, speaker, passage, series, description } = sermon;
  return (
    <Layout>
      <div className="px-4 w-full flex items-center flex-col">
        <div className="max-w-container w-full flex flex-col py-[1.375rem] lg:pt-10 lg:pb-[22.8125rem] gap-y-[2.1875rem] lg:gap-y-[3.75rem] items-center">
          <div className="w-full pl-[2px] lg:pl-0">
            <Breadcrumb crumbs={crumbs} crumbSeparator=" > " />
          </div>
          <div className="flex flex-col gap-y-[0.75rem] lg:gap-y-[3.75rem] items-center max-w-[61.25rem] w-full pb-[3.98625rem] lg:pb-0">
            <h1 className="text-2xl lg:text-4xl leading-tighter font-semibold lg:font-bold mb-0">
              {title}
            </h1>
            <div className="flex flex-col lg:flex-row lg:gap-x-10 items-center pt-[0.9375rem] lg:pt-0 gap-y-5 lg:gap-y-0">
              <div className="flex flex-col gap-y-1 lg:gap-y-10 text-base lg:text-xl font-medium w-full lg:w-auto">
                <div className="flex gap-x-2">
                  <CalendarIcon />
                  <div>{date}</div>
                </div>
                <div className="flex flex-col gap-y-1 lg:gap-y-3">
                  <div className="flex gap-x-2">
                    <UserIcon />
                    <div>{speaker}</div>
                  </div>
                  <div className="flex gap-x-2">
                    <BookIcon />
                    <div>{passage}</div>
                  </div>
                  <div className="flex gap-x-2">
                    <SeriesIcon />
                    <div>{series}</div>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-[45rem]">
                <div className="relative">
                  <StaticImage
                    alt="Psalm 133"
                    src="../../../images/Sermon-Ad-Selah-April.png"
                    className="max-w-[45rem]"
                  />
                  <div className="flex justify-center absolute left-0 bottom-0 w-full">
                    <div className="flex-1">
                      <div className="subpixel-antialiased font-medium tabular-nums h-full leading-[1.7] max-w-full min-w-[12.5rem] relative overflow-hidden">
                        <audio
                          controls
                          preload="metadata"
                          className="block w-full"
                        >
                          <source
                            src="https://annarbor.hmcc.net/wp-content/uploads/sermons/S20230813.mp3"
                            type="audio/mp3"
                          />
                        </audio>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full pl-[5px] pt-2 lg:pt-0 max-w-[45rem] lg:max-w-none">
              <h3 className="text-xl lg:text-2xl font-semibold leading-tighter mb-[1.563rem] lg:mb-[1.576rem]">
                Details
              </h3>
              <p className="mb-0 text-base lg:text-lg">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SermonPage;
