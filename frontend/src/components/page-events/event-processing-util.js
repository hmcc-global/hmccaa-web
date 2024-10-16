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

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const suffix = num => {
  if (num % 10 === 1) return "st";
  if (num % 10 === 2) return "nd";
  if (num % 10 === 3) return "rd";
  return "th";
};

function formatDateAndTime(isoDateString) {
  const date = new Date(isoDateString);

  // Extracting date components
  const year = date.getFullYear();
  const month = MONTHS[date.getMonth()]; // getMonth() returns month from 0-11
  let day = date.getDate();
  day = `${day}${suffix(day)}`;

  // Extracting and converting time components to 12-hour format
  let hour = date.getHours();
  const minutes = date.getMinutes();
  const amPm = hour >= 12 ? "PM" : "AM";

  hour = hour % 12;
  hour = hour ? hour : 12; // the hour '0' should be '12'

  // Formatting date and time
  const formattedDate = `${month} ${day}, ${year}`;
  const formattedTime = timeIsMidnight(date)
    ? null
    : `${hour}:${minutes.toString().padStart(2, "0")} ${amPm}`;

  return { date: formattedDate, time: formattedTime };
}

function timeIsMidnight(date) {
  return date.getHours() === 0 && date.getMinutes() === 0;
}

function dateToString({ date, time }) {
  return time ? `${date}, ${time}` : date;
}

function formatEventTimeAsObject(obj) {
  // Returns in two strings: date and time.
  //     If there is an end time on the same date, then time string reflects this.
  //     If there is an end time on a different date, then entire string will be returned
  //     in date string and time string will be null.
  const { start, end } = obj;
  if (end === null) {
    return formatDateAndTime(start);
  }
  let { date: startDate, time: startTime } = formatDateAndTime(start);
  let { date: endDate, time: endTime } = formatDateAndTime(end);
  if (startDate === endDate) {
    // If start and end date are the same then we want to specify real times for midnight
    return { date: startDate, time: `${startTime || "12AM"} - ${endTime || "12AM"}` };
  }

  // If both start and end time are null we should omit the time,
  // otherwise we should specify both times
  if (startTime || endTime) {
    startTime = startTime || "12AM";
    endTime = endTime || "12AM";
  }

  return {
    date: `${dateToString({
      date: startDate,
      time: startTime,
    })} - ${dateToString({ date: endDate, time: endTime })}`,
    time: null,
  };
}

function formatEventTimeAsString(time) {
  let object = formatEventTimeAsObject(time);
  return dateToString(object);
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
  formatEventTimeAsObject,
  formatEventTimeAsString,
};
