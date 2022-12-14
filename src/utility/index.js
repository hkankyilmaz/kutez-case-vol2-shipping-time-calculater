import dayjs from "dayjs";

export const getDate = (date) => {
  let currDate = { day: "", dayOfMonth: "", month: "" };

  const days = {
    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Friday",
    5: "Saturday",
    6: "Sunday",
  };

  const monts = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  const day = dayjs(date).date();
  const month = dayjs(date).month();
  const year = dayjs(date).year();

  return (currDate = {
    day: day,
    month: monts[`${month}`],
    year: year,
  });
};
