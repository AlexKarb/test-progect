export function subtractMonths(date, month) {
  date.setMonth(date.getMonth() - month);

  return date;
}

// export const dateTwoYearsAgo = formatingToMonthAndYear(
//   subtractMonths(
//     new Date(Date.parse(dymanicDataLebels[dymanicDataLebels.length - 1])),
//     24
//   ).toISOString()
// );
