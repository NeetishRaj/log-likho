const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const dd_month_yyyy_day = () => {
  const current_date = new Date();
  const todays_date = current_date.getDate().toString().padStart(2, "0");
  const month = MONTH_NAMES[current_date.getMonth()];
  const year = current_date.getFullYear();
  const day = DAY_NAMES[current_date.getDay()];

  return `${todays_date}-${month}-${year}-${day}`;
};

module.exports = {
  dd_month_yyyy_day,
};
