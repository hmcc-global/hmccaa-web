const DEFAULT_CONTACT = "annarbor@hmcc.net";
const STRAPI_RECURRING_TIME = "event-times.recurring-time";
const STRAPI_SINGLE_TIME = "event-times.single-time";

function formatContact(contact) {
  if (!contact || !contact.Email) {
    return DEFAULT_CONTACT;
  }

  let contactString = contact.Name + " at " + contact.Email;
  if (!contact.Name) {
    contactString = contact.Email;
  }

  let phoneNumberString = formatPhoneNumber(
    contact.PhoneNumber,
    contact.AutoformatPhoneNumber
  );
  return phoneNumberString
    ? contactString + " or " + phoneNumberString
    : contactString;
}

function formatPhoneNumber(numberStr, autoformat) {
  if (!numberStr || numberStr === "dummy") {
    return null;
  }

  if (!autoformat) {
    return numberStr;
  }

  let filteredNumberStr = numberStr.replace(/\D/g, "");

  if (filteredNumberStr.length !== 10) {
    console.error("Failed to format phone number:", numberStr);
    return numberStr; // can't autoformat
  }

  return `(${filteredNumberStr.substr(0, 3)})${filteredNumberStr.substr(
    3,
    3
  )}-${filteredNumberStr.substr(6)}`;
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
});

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

const rules = new Intl.PluralRules("en-US", { type: "ordinal" });
function formatOrdinal(day) {
  const rule = rules.select(day);
  const suffixes = {
    one: "st",
    two: "nd",
    few: "rd",
    other: "th",
  };
  return `${day}${suffixes[rule]}`;
}

function formatDateAndTime(isoDateString, showDayOfWeek = false) {
  const date = new Date(isoDateString);

  const dateString = dateFormatter
    .format(date)
    .replace(/\d+,/, match => {
      return `${formatOrdinal(match.slice(0, -1))},`;
    })
    .replace(/^\w+,/, match => {
      return !showDayOfWeek ? "" : match;
    })
    .trim();
  const timeString = timeFormatter.format(date).replace(/:\d+/, match => {
    return parseInt(match.slice(1)) > 0 ? match : "";
  });
  return { date: dateString, time: timeString };
}

function dateToString({ date, time }, showTimes = true) {
  return showTimes && time ? `${date} ${time}` : date;
}

function parseFull12HourTime(timeStr) {
  const match = timeStr.trim().match(/^(\d+)(?::(\d+))?\s*(AM|PM)$/i);

  if (!match) return null;

  let hours = parseInt(match[1], 10);
  const minutes = match[2] ? parseInt(match[2], 10) : 0;
  const modifier = match[3].toUpperCase();

  if (modifier === "PM" && hours < 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;

  return { hours, minutes };
}

function formatEventTime(timeObject) {
  // Returns in two strings: date and time.
  //     If there is an end time on the same date, then time string reflects this.
  //     If there is an end time on a different date, then entire string will be returned
  //     in date string and time string will be null.
  const { start, end } = timeObject;
  if (!end) {
    return formatDateAndTime(start)?.time;
  }
  let { date: startDate, time: startTime } = formatDateAndTime(start);
  let { date: endDate, time: endTime } = formatDateAndTime(end);
  if (startDate === endDate) {
    // If start and end date are the same then we want to specify real times for midnight
    return `${startTime || "12 AM"} - ${endTime || "12 AM"}`;
  }

  // If both start and end time are null we should omit the time,
  // otherwise we should specify both times
  if (startTime || endTime) {
    startTime = startTime || "12 AM";
    endTime = endTime || "12 AM";
  }

  return startTime === endTime
    ? startTime
    : parseFull12HourTime(endTime)?.hours -
        parseFull12HourTime(startTime)?.hours >
      6
    ? ""
    : `${startTime} - ${endTime}`;
}

function formatEventDateAsObject(
  dateObject,
  showDayOfWeek = false,
  showTimes = true
) {
  const { start, end } = dateObject;
  if (!end) {
    return formatDateAndTime(start, showDayOfWeek);
  }

  let { date: startDate, time: startTime } = formatDateAndTime(
    start,
    showDayOfWeek
  );
  let { date: endDate, time: endTime } = formatDateAndTime(end, showDayOfWeek);
  if (startDate === endDate) {
    // If start and end date are the same then we want to specify real times for midnight
    return {
      date: startDate,
      time: `${startTime || "12 AM"} - ${endTime || "12 AM"}`,
    };
  }

  // If both start and end time are null we should omit the time,
  // otherwise we should specify both times
  if (startTime || endTime) {
    startTime = startTime || "12 AM";
    endTime = endTime || "12 AM";
  }

  return {
    date: `${dateToString(
      {
        date: startDate,
        time: startTime,
      },
      showTimes
    )} - ${dateToString({ date: endDate, time: endTime }, showTimes)}`,
    time: formatEventTime({ start, end }),
  };
}

function formatEventDateAsString(
  date,
  showDayOfWeek = false,
  showTimes = true
) {
  const dateObject = formatEventDateAsObject(date, showDayOfWeek, showTimes);
  return dateToString(dateObject, showTimes);
}

function formatEventTimeAsString(time) {
  return formatEventTime(time);
}

function sortTimes(a, b) {
  if (a.start.valueOf() === b.start.valueOf()) {
    if (a.end) {
      return b.end ? a.end.valueOf() - b.end.valueOf() : -1;
    }
    return b.end ? 1 : 0;
  }
  return a.start.valueOf() - b.start.valueOf();
}

function getEventTimeType(time) {
  if (time.RecurTimeFrame !== undefined) {
    return STRAPI_RECURRING_TIME;
  }
  return STRAPI_SINGLE_TIME;
}

/*
 * Returns whether the date is on or after today.
 * We don't want events to disappear immediately after they start.
 * We'll use this function to keep showing events until the end of the same day.
 */
const isTodayOrAfter = date => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date >= today;
};

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

const DATE_ITERATOR = {
  Day: addDays,
  Week: addWeeks,
  Month: addMonths,
  Year: addYears,
};

const getFullEventId = (eventId, time) =>
  eventId + "-" + time.start.valueOf() + (time.end ? time.end.valueOf() : "");

module.exports = {
  STRAPI_SINGLE_TIME,
  STRAPI_RECURRING_TIME,
  formatContact,
  formatPhoneNumber,
  formatDateAndTime,
  sortTimes,
  getEventTimeType,
  isTodayOrAfter,
  DATE_ITERATOR,
  getFullEventId,
  formatEventDateAsObject,
  formatEventTimeAsString,
  formatEventDateAsString,
};
