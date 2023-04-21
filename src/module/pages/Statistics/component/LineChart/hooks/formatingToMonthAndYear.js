import { parseISO, format } from 'date-fns';

export const formatingToMonthAndYear = data => {
  return format(parseISO(data), `MMM yyyy`);
};
