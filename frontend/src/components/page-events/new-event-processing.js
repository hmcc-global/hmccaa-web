const STRAPI_RECURRING_TIME = "event-times.recurring-time";
const STRAPI_SINGLE_TIME = "event-times.single-time";

function processEvents(events) {
  const now = new Date();

  const futureEvents = events.filter(event => {
    const eventTime = event.Time[0];
    const startTime = new Date(eventTime.DateTime);
    const endTime = eventTime.EndRecurDate
      ? new Date(eventTime.EndRecurDate)
      : null;

    // Check if the event is a recurring event and if its end recur date is still in the future
    return endTime ? endTime > now : startTime > now;
  });

  const sortedEvents = futureEvents.sort(
    (a, b) => new Date(a.Time[0].DateTime) - new Date(b.Time[0].DateTime)
  );

  const reformattedEvents = reformatEvents(sortedEvents);
  return reformattedEvents;
}

const reformatEvents = events => {
  const eventInstances = [];

  events.forEach(event => {
    const isRecurring =
      event.Time[0].strapi_component === STRAPI_RECURRING_TIME;

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
      date: event.Time[0].DateTime,
    };

    if (isRecurring) {
      const newEvents = generateRepeatingEvents(event); // Generate all occurrences
      newEvents.forEach((newEvent, index) => {
        const newBaseEvent = {
          ...baseEvent,
          date: newEvent.Time[0].DateTime,
          id: `${event.id}-${index}`, // unique id for each occurrence
        };
        eventInstances.push(newBaseEvent);
      });
    } else {
      eventInstances.push(baseEvent);
    }
  });

  return eventInstances;
};

function generateRepeatingEvents(event) {
  const events = [];
  let baseEventTime = event.Time[0];
  let interval = baseEventTime.RecurTimeFrame.toLowerCase();
  let currentDate = new Date(baseEventTime.DateTime);
  const endRecurDate = new Date(baseEventTime.EndRecurDate);

  while (currentDate <= endRecurDate) {
    let newEvent = JSON.parse(JSON.stringify(event));
    let newDateTime = new Date(currentDate);

    newEvent.Time[0].DateTime = newDateTime.toISOString();
    events.push(newEvent);

    switch (interval) {
      case "day":
        currentDate.setDate(currentDate.getDate() + 1);
        break;
      case "week":
        currentDate.setDate(currentDate.getDate() + 7);
        break;
      case "month":
        currentDate.setMonth(currentDate.getMonth() + 1);
        break;
      case "year":
        currentDate.setFullYear(currentDate.getFullYear() + 1);
        break;
      default:
        throw new Error("Unsupported recurrence interval");
    }
  }

  return events;
}

module.exports.processEvents = processEvents;
