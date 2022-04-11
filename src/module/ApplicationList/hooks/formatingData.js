import { parseISO, format } from 'date-fns';

export const formatingData = date =>
  format(parseISO(date), ` dd.LL.yy | kk:mm `);
