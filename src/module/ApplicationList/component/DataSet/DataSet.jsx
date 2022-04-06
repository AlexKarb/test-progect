import { Data } from './DataSet.styled';
import { parseISO, format } from 'date-fns';

export const DataSet = ({ data }) => {
  const result = parseISO(data);
  const formatingData = format(result, `dd-LL-yyyy, kk:mm `);

  return <Data>Дата створення: {formatingData}</Data>;
};
