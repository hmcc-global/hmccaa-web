const DEFAULT_CONTACT = "annarbor@hmcc.net";

function formatContact(contact) {
  if (!contact || !contact.Email) {
    return DEFAULT_CONTACT;
  }

  
  let contactString = contact.Name + " at " + contact.Email;
  if (!contact.Name) {
    contactString = contact.Email;
  }
  
  let phoneNumberString = formatPhoneNumber(contact.PhoneNumber, contact.AutoformatPhoneNumber);
  return phoneNumberString ? contactString + " or " + phoneNumberString : contactString;
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

  return `(${filteredNumberStr.substr(0, 3)})${filteredNumberStr.substr(3, 3)}-${filteredNumberStr.substr(6)}`;
}

function formatDateAndTime(isoDateString) {
  const date = new Date(isoDateString);

  // Extracting date components
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth() returns month from 0-11
  const day = date.getDate();

  // Extracting and converting time components to 12-hour format
  let hour = date.getHours();
  const minutes = date.getMinutes();
  const amPm = hour >= 12 ? "PM" : "AM";

  hour = hour % 12;
  hour = hour ? hour : 12; // the hour '0' should be '12'

  // Formatting date and time
  const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
  const formattedTime = `${hour.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${amPm}`;

  return { formattedDate, formattedTime };
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

const getFullEventId = (eventId, time) => eventId + '-' + time.start.valueOf() + (time.end ? time.end.valueOf() : "");

module.exports = {
  formatContact,
  formatPhoneNumber,
  formatDateAndTime,
  isTodayOrAfter,
  DATE_ITERATOR,
  getFullEventId,
};
