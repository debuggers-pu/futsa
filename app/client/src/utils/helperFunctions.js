import moment from "moment";

export const returnDates = () => {
  const dates = [];
  const start = moment();
  const end = moment().add(7, "days");
  while (start.isBefore(end)) {
    dates.push(start.format("MMM DD"));
    start.add(1, "days");
  }
  return dates;
};
