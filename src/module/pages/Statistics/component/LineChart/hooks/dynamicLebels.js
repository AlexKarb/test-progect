import { formatingToMonthAndYear } from './formatingToMonthAndYear';

export const dynamicLebels = lebels => {
  const sortedAndFormatedLabels = lebels
    .sort()
    .map(data => formatingToMonthAndYear(data));

  const labelsOfMonthAndYear = [...new Set(sortedAndFormatedLabels)];

  return labelsOfMonthAndYear;
};
