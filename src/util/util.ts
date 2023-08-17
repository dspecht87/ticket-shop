const optionsdate: Intl.DateTimeFormatOptions = {
  weekday: "short", // 2-digit weekday
  day: "2-digit", // 2-digit day
  month: "2-digit", // 2-digit month
  year: "numeric", // 4-digit year
  timeZone: "UTC", // Adjust the time zone as needed
};

export const getDateString = (date: Date) => {
  const dateFormatter = new Intl.DateTimeFormat("de-DE", optionsdate);
  return dateFormatter.format(date).replace(/,/g, "");
};

const optionsTime: Intl.DateTimeFormatOptions = {
  hour: "2-digit", // 2-digit hour
  minute: "2-digit", // 2-digit minute
  hour12: false, // Use 24-hour format
};
export const getTimeString = (date: Date) => {
  const timeFormatter: Intl.DateTimeFormat = new Intl.DateTimeFormat(
    "de-DE",
    optionsTime
  );
  return timeFormatter.format(date);
};
