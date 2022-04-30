import { parseISO, format } from 'date-fns';

export const formatingDate = date =>
  format(parseISO(date), ` dd.LL.yy | kk:mm `);
