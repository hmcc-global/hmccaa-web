import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { PrimaryButtonLink } from "../components/Button";
import { formatEventTimeAsObject } from "../components/page-events/event-processing-util";
import { GatsbyImage } from "gatsby-plugin-image";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import { CalendarIcon, ClockIcon, PinIcon } from "../components/svgs";
import Link from "../components/Link";

export const Head = ({
  pageContext: {
    event: { title, description },
  },
}) => <Seo title={`Events | ${title}`} description={description} />;

const EventPage = ({ pageContext }) => {
  const {
    event,
    time,
    breadcrumb: { crumbs },
  } = pageContext;

  console.log(event);

  const { date: formattedDate, time: formattedTime } =
    formatEventTimeAsObject(time);
  return (
    <Layout>
      <div className="pt-[1.375rem] lg:pt-10 pb-[4.8125rem] lg:pb-[8.1875rem] content-padding-full gap-y-5 lg:gap-y-15 min-h-screen extend-breadcrumbs">
        <Breadcrumb
          crumbs={crumbs}
          crumbSeparator=" > "
          crumbLabel={event.title}
        />
        <div className="max-w-extend-container w-full flex flex-col gap-y-3 lg:gap-y-15 items-center justify-start gap-x-32">
          <h1 className="text-left lg:text-left text-2xl lg:text-4xl font-semibold lg:font-bold leading-tighter mb-0 uppercase">
            {event.title}
          </h1>

          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 lg:gap-8 pt-[0.9375rem] lg:pt-0">
            <div className="flex flex-col gap-y-5 lg:gap-y-15">
              <div className="flex flex-col items-start lg:gap-9 text-black text-base lg:text-xl font-medium leading-normal">
                <div className="flex items-center gap-1 lg:gap-2 py-[0.3125rem] lg:py-0">
                  <CalendarIcon className="w-5 h-5 lg:w-8 lg:h-8" />
                  <div>{formattedDate}</div>
                </div>
                <div className="flex flex-col lg:gap-y-3">
                  {formattedTime && (
                    <div className="flex items-center gap-1 lg:gap-2">
                      <ClockIcon className="w-5 h-5 lg:w-8 lg:h-8" />
                      <div>{formattedTime}</div>
                    </div>
                  )}
                  <div className="flex items-center gap-1 lg:gap-2">
                    <PinIcon className="w-5 h-5 lg:w-8 lg:h-8" />
                    <div>
                      {event.googleMapsLink ? (
                        <Link href={event.googleMapsLink}>
                          {event.location}
                        </Link>
                      ) : (
                        event.location
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {event.signUpLink && (
                <div className="flex justify-center lg:justify-start">
                  <PrimaryButtonLink hasArrow={true} to={event.signUpLink.link}>
                    {event.signUpLink.text}
                  </PrimaryButtonLink>
                </div>
              )}
            </div>

            <div className="text-center lg:order-1 lg:w-[59.184%]">
              {event.img?.file?.childImageSharp?.gatsbyImageData ? (
                <GatsbyImage
                  image={event.img?.file?.childImageSharp?.gatsbyImageData}
                  alt={event.imgAlt}
                />
              ) : (
                <div className="py-5 w-full"></div>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full gap-y-10 pt-2 lg:pt-0">
            <div className="flex flex-col gap-y-6">
              <h3 className="text-black text-xl lg:text-2xl font-semibold leading-tighter">
                Details
              </h3>
              <article className="text-black text-base font-normal leading-normal">
                {event.description
                  .filter(line => line !== "")
                  .map((line, i, currentArray) =>
                    event?.displayIsStreamed ? (
                      <p key={i}>{line}</p>
                    ) : i < currentArray.length - 1 ? (
                      <p key={i}>{line}</p>
                    ) : (
                      <p key={i} className="mb-0">
                        {line}
                      </p>
                    )
                  )}

                {event.displayIsStreamed && (
                  <span className="text-black text-base font-normal leading-normal">
                    We will also live stream this event at the link below.{" "}
                    <PrimaryButtonLink
                      href="https://www.youtube.com/hmccannarbor/live"
                      hasArrow={false}
                    >
                      Stream
                    </PrimaryButtonLink>
                  </span>
                )}
              </article>
            </div>
            <div className="flex flex-col gap-y-6">
              <h3 className="text-black text-xl lg:text-2xl font-semibold leading-tighter">
                Contact
              </h3>
              <p className="text-black text-base font-normal leading-normal mb-0">
                Have a question? Please contact{" "}
                <Link href={`mailto:${event.contact}`}>{event.contact}</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventPage;
