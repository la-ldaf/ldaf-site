export const second = 1000;
export const minute = second * 60;
export const hour = minute * 60;
export const day = hour * 24;

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const shortMonths = months.map((month) => (month.length <= 4 ? month : month.slice(0, 3)));
