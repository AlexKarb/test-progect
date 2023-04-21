import { formatingToMonthAndYear } from './formatingToMonthAndYear';

export const sortAndFormatedArray = array => {
  return array.sort().map(data => formatingToMonthAndYear(data));
};
