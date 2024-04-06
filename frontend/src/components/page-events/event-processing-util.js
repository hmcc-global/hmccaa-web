const STRAPI_RECURRING_TIME = "event-times.recurring-time";
const STRAPI_SINGLE_TIME = "event-times.single-time";

const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const addWeeks = (date, weeks) => {
  const result = new Date(date);
  result.setDate(result.getDate() + weeks * 7);
  return result;
};

const addMonths = (date, months) => {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
};

const addYears = (date, years) => {
  const result = new Date(date);
  result.setFullYear(result.getFullYear() + years);
  return result;
};

/*
 * Returns whether the date is before today.
 * We don't want events to disappear immediately after they start.
 * We'll use this function to keep showing events until the end of the same day.
 */
const isTodayOrAfter = date => {
  const copyOfDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return copyOfDate > today;
};

const DATE_ITERATOR = {
  Day: addDays,
  Week: addWeeks,
  Month: addMonths,
  Year: addYears,
};

//All of this code needs some kind of refactor
const generateRecurringEvent = (timeInfo, baseEvent, maxOccurrences) => {
  maxOccurrences = maxOccurrences || 1;
  const startDate = new Date(timeInfo.DateTime);
  console.log(startDate);
  const events = [];
  const duration = timeInfo.EndDateTime
    ? new Date(timeInfo.EndDateTime) - startDate
    : null;

  for (let i = 0; i < maxOccurrences; i++) {
    const eventDate = DATE_ITERATOR[timeInfo.RecurTimeFrame](
      startDate,
      i * timeInfo.RecurEveryXTimeFrames
    );

    // Stop generating events after the end date
    if (timeInfo.EndRecurDate && eventDate > new Date(timeInfo.EndRecurDate)) {
      break;
    }

    if (isTodayOrAfter(eventDate) || !timeInfo.StopShowingWhenPast) {
      events.push({
        ...baseEvent,
        date: eventDate,
        endDate: duration ? new Date(eventDate.getTime() + duration) : null,
      });
    }
  }
  return events;
};

const processEvent = event => {
  const eventInstances = [];

  const fullDescription =
    event.DescriptionOverride || event.EventTemplate?.Description || "";
  const [description] = fullDescription.split("\n");
  const baseEvent = {
    id: event.id,
    title: event.NameOverride || event.EventTemplate?.Name || "",
    imgUrl:
      event.CoverImageOverride?.url ||
      event.EventTemplate?.CoverImage.url ||
      "",
    imgAlt:
      event.CoverImageOverride?.imgAlt ||
      event.EventTemplate?.CoverImage.imgAlt ||
      "",
    location:
      event.LocationOverride?.LocationName ||
      event.EventTemplate?.Location.LocationName ||
      "",
    description,
  };
  for (const time of event.Time || []) {
    if (time.strapi_component === STRAPI_RECURRING_TIME) {
      const recurringInstances = generateRecurringEvent(
        time,
        baseEvent,
        event.EventTemplate?.ShowXUpcomingEvents
      );
      eventInstances.push(...recurringInstances);
    } else if (time.strapi_component === STRAPI_SINGLE_TIME) {
      if (isTodayOrAfter(time.DateTime) || !time.StopShowingWhenPast) {
        const eventInstance = {
          ...baseEvent,
          date: new Date(time.DateTime),
          endDate: time.EndDateTime ? new Date(time.EndDateTime) : null,
        };
        eventInstances.push(eventInstance);
      }
    }
  }

  console.log(eventInstances);
  // Sort events
  eventInstances.sort((a, b) => a.date - b.date);

  // Truncate events to first X
  return eventInstances.slice(0, event.EventTemplate?.ShowXUpcomingEvents || 1);
};

export const processEvents = events => {
  console.log("got here");
  const displayEvents = [];
  events.forEach(event => {
    const eventInstances = processEvent(event);

    displayEvents.push(...eventInstances);
  });

  // Sort events
  displayEvents.sort((a, b) => a.date - b.date);
  return displayEvents;
};
