import * as React from "react";
import Layout from "../components/layout";
import { PrimaryButtonLink } from "../components/Button";
import locationPinIcon from "../images/icons/locationPin.svg";
import calendarIcon from "../images/icons/calendar.svg";
import clockIcon from "../images/icons/clock-black.svg";
import { formatDateAndTime } from "../components/page-events/event-processing-util";

const EventPage = ({ pageContext }) => {
  const formatContact = (contact) => {
    if (contact === undefined) {
      return "annarbor@hmcc.net";
    }

    return `${contact.Name} at ${contact.Email}`;
  }

  const { event, time } = pageContext;

  const { formattedDate, formattedTime } = formatDateAndTime(time.start);

  const contact = formatContact(event.contact);

  console.log(event.description);

  return (
    <Layout>
      <div className="flex flex-col justify-start items-center gap-y-8 lg:gap-y-14 pt-8 gap-x-32 lg:pt-14 py-28">
        <h2 className="text-center mt-2 lg:text-left text-xl lg:text-3xl font-semibold">
          {event.title}
        </h2>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-14 lg:gap-8">
          <div>
            <div className="flex flex-col items-start gap-5 lg:gap-9">
              <div className="flex items-center gap-1 lg:gap-2">
                <div className="w-5 h-5 lg:w-6 lg:h-6 relative">
                  <img src={calendarIcon} alt="Calendar icon" />
                </div>
                <div className="text-black text-md md:text-xl font-medium leading-tight lg:leading-loose">
                  {formattedDate}
                </div>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <div className="w-5 h-5 lg:w-6 lg:h-6 relative">
                  <img src={clockIcon} alt="Clock icon" />
                </div>
                <div className="text-black text-md md:text-xl font-medium leading-tight lg:leading-loose">
                  {formattedTime}
                </div>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <div className="w-5 h-5 lg:w-6 lg:h-6 relative">
                  <img src={locationPinIcon} alt="Location pin icon" />
                </div>
                <div className="text-black text-md md:text-xl font-medium leading-tight lg:leading-loose">
                  {event.location}
                </div>
              </div>
            </div>

            {/* ADD CODE BACK IN ONCE LINKS ARE ADDED TO GRAPHQL: 
            <div className="flex justify-center pt-6 lg:justify-start lg:pt-10">
              <PrimaryButtonLink
                hasArrow={true}
                to={"https://annarbor.hmcc.net/"}
              >
                Sign Up
              </PrimaryButtonLink>
            </div> */}
          </div>

          <div className="text-center pt-4 lg:order-1 ml-5">
            <img src={`http://127.0.0.1:1337${event.imgUrl}`} alt={event.imgAlt} />
          </div>
        </div>

        <div className="flex flex-col w-full items-start gap-y-8 pb-5">
          <div>
            <span className="text-black text-2xl font-semibold leading-7">
              Details
            </span>
            {event.description.map((line, i) => <span key={i} className="text-black text-base font-normal leading-normal">
              <br />
              {line}
            </span>)}
            {event.displayIsStreamed && <span className="text-black text-base font-normal leading-normal">
              We will also live stream this event at the link below. <PrimaryButtonLink href="https://www.youtube.com/hmccannarbor/live" hasArrow={false}>Stream</PrimaryButtonLink> 
            </span>}
          </div>
          <div>
            <span className="text-black text-2xl font-semibold leading-7">
              Contact
            </span>
            <span className="text-black text-base font-normal leading-normal tracking-wide">
              <br />
            </span>
            <span className="text-black text-base font-normal leading-normal">
              Have a question? Please contact {contact}
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventPage;
