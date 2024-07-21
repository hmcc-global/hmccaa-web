const util = require("./event-processing-util");

const STRAPI_RECURRING_TIME = "event-times.recurring-time";
const STRAPI_SINGLE_TIME = "event-times.single-time";
const MAX_RECURRING_EVENTS = 10;

function processEvents(e) {
  return e.map(event => {
    // Configure event description
    let description = (
      event.DescriptionOverride ||
      event.EventTemplate?.Description ||
      ""
    )
      .trim()
      .split("\n");
    if (event.DescriptionAddendum) {
      description.push(...event.DescriptionAddendum.trim().split("\n"));
    }

    // Configure event sign up link
    let signUpLinkTemp =
      event.SignUpLinkOverride || event.EventTemplate?.SignUpLink || null;
    let signUpLink = signUpLinkTemp
      ? { text: signUpLinkTemp.Text, link: signUpLinkTemp.Hyperlink }
      : null;

    return {
      id: event.id,
      title: event.NameOverride || event.EventTemplate?.Name || "",
      img: event.CoverImageOverride || event.EventTemplate?.CoverImage || null,
      imgUrl:
        event.CoverImageOverride?.url ||
        event.EventTemplate?.CoverImage.url ||
        "",
      imgAlt:
        event.CoverImageOverride?.alternativeText ||
        event.EventTemplate?.CoverImage.alternativeText ||
        "",
      location:
        event.LocationOverride?.LocationName ||
        event.EventTemplate?.Location.LocationName ||
        "",
      googleMapsLink:
        event?.LocationOverride?.GoogleMapsLink ||
        event?.EventTemplate?.Location?.GoogleMapsLink,
      description,
      contact: util.formatContact(
        event.ContactOverride || event.EventTemplate?.Contact
      ),
      signUpLink,
      displayIsStreamed:
        event.DisplayIsStreamedOverride ||
        event.EventTemplate?.DisplayIsStreamed,
      showXUpcoming: event.ShowXUpcomingEvents,
      times: processEventTimes(event.Time),
    };
  });
}

function processEventTimes(times) {
  let recur = (currTime, { recurTimeFrame, recurX, end }) => {
    let times_array = [];
    let showWhenPast = currTime.showWhenPast;

    while (!end || end >= currTime.start) {
      times_array.push({
        start: currTime.start,
        end: currTime.end,
        showWhenPast,
      });

      if (times_array.length === MAX_RECURRING_EVENTS) {
        break;
      }

      // iterate
      currTime = {
        start: util.DATE_ITERATOR[recurTimeFrame](currTime.start, recurX),
        end: currTime.end
          ? util.DATE_ITERATOR[recurTimeFrame](currTime.end, recurX)
          : null,
        showWhenPast,
      };
    }

    return times_array;
  };

  return (times || [])
    .map(time => {
      if (time.strapi_component === STRAPI_RECURRING_TIME) {
        let initial_time = {
          start: new Date(time.DateTime),
          end: time.EndDateTime ? new Date(time.EndDateTime) : null,
          showWhenPast: !time.StopShowingWhenPast,
        };

        let recur_info = {
          recurTimeFrame: time.RecurTimeFrame,
          recurX: time.RecurEveryXTimeFrames,
          end: time.EndRecurDate ? new Date(time.EndRecurDate) : null,
        };

        return recur(initial_time, recur_info);
      }
      if (time.strapi_component === STRAPI_SINGLE_TIME) {
        return {
          start: new Date(time.DateTime),
          end: time.EndDateTime ? new Date(time.EndDateTime) : null,
          showWhenPast: !time.StopShowingWhenPast,
        };
      }
      console.error("Unknown component", time.strapi_component);
      return null;
    })
    .flat()
    .sort(util.sortTimes);
}

function filterEventTimes(events) {
  return events
    .map(event => {
      if (event.times) {
        event.times = event.times
          .filter(
            time =>
              time.showWhenPast ||
              util.isTodayOrAfter(time.end ? time.end : time.start)
          )
          .slice(0, event.showXUpcoming);
      } else {
        event.times = [];
      }
      return event;
    })
    .filter(event => event.times.length !== 0);
}

function filterAllPastEventTimes(events) {
  return events
    .map(event => {
      if (event.times) {
        event.times = event.times.filter(
          time =>
            time.showWhenPast ||
            util.isTodayOrAfter(time.end ? time.end : time.start)
        );
      } else {
        event.times = [];
      }
      return event;
    })
    .filter(event => event.times.length !== 0);
}

module.exports.processEvents = processEvents;
module.exports.filterEventTimes = filterEventTimes;
module.exports.filterAllPastEventTimes = filterAllPastEventTimes;
