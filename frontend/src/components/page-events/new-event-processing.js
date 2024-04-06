const STRAPI_RECURRING_TIME = "event-times.recurring-time";
const STRAPI_SINGLE_TIME = "event-times.single-time";

//OVERVIEW:

//parse events by time, make sure only future events are displayed

function processEvents(events) {
  const now = new Date();

  const futureEvents = events.filter(
    event => new Date(event.Time[0].DateTime) > now
  );

  const sortedEvents = futureEvents.sort(
    (a, b) => new Date(a.Time[0].DateTime) - new Date(b.Time[0].DateTime)
  );

  const reformattedEvents = reformatEvents(sortedEvents);

  return reformattedEvents;
}

const reformatEvents = events => {
  const eventInstances = [];

  events.forEach(event => {
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
    eventInstances.push(baseEvent);
  });
  return eventInstances;
};

module.exports.processEvents = processEvents;
