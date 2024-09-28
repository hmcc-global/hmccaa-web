const path = require("path");
const {
  processEvents,
  filterAllPastEventTimes,
} = require("../components/page-events/event-processing");
const {
  getFullEventId,
} = require("../components/page-events/event-processing-util");

async function CreateEventPages(graphql, createPage, reporter) {
  const eventResult = await graphql(`
    query EventSinglePageQuery {
      allStrapiEvent {
        nodes {
          id
          DescriptionOverride
          DescriptionAddendum
          ContactOverride {
            Name
            Email
            PhoneNumber
            AutoformatPhoneNumber
          }
          DisplayIsStreamedOverride
          ShowXUpcomingEvents
          EventTemplate {
            CoverImage {
              url
              file {
                childImageSharp {
                  gatsbyImageData
                }
              }
              alternativeText
            }
            Description
            Location {
              LocationName
              GoogleMapsLink
            }
            Name
            DisplayIsStreamed
            Contact {
              Name
              Email
              PhoneNumber
              AutoformatPhoneNumber
            }
            SignUpLink {
              Text
              Hyperlink
            }
          }
          SignUpLinkOverride {
            Text
            Hyperlink
          }
          LocationOverride {
            LocationName
            GoogleMapsLink
          }
          NameOverride
          Time {
            ... on StrapiComponentEventTimesRecurringTime {
              id
              DateTime
              EndDateTime
              EndRecurDate
              RecurEveryXTimeFrames
              RecurTimeFrame
              StopShowingWhenPast
            }
            ... on StrapiComponentEventTimesSingleTime {
              id
              StopShowingWhenPast
              EndDateTime
              DateTime
            }
          }
          CoverImageOverride {
            url
            file {
              childImageSharp {
                gatsbyImageData
              }
            }
            alternativeText
          }
        }
      }
    }
  `);

  if (eventResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query`);
    return;
  }

  //Create page for each event from GraphQL
  const parsedEvents = filterAllPastEventTimes(
    processEvents(eventResult.data.allStrapiEvent.nodes)
  );

  reporter.info(`Found ${parsedEvents.length} events to create pages for.`);

  parsedEvents.forEach(event => {
    if (!event.id || !event.times) {
      console.error("Event missing critical fields:", event);
    } else {
      event.times.forEach(time => {
        let eventPath = `/events/${encodeURIComponent(
          getFullEventId(event.id, time)
        )}`;
        createPage({
          path: eventPath,
          component: path.resolve(`./src/templates/eventPageTemplate.js`),
          context: {
            event,
            time,
          },
        });
      });
    }
  });
}

module.exports.CreateEventPages = CreateEventPages;
