import { Data } from './DataSet.styled';
import { parseISO, format } from 'date-fns';

export const DataSet = ({ dates, type }) => {
  const { dataAdd, dataClose, dataInProgress, dataCompleted } = dates;

  const formatingData = date => format(parseISO(date), ` dd.LL.yy | kk:mm `);

  return (
    <>
      <Data>
        Дата створення:
        {formatingData(dataAdd)}
      </Data>

      {type === 'in progress' && dataInProgress && (
        <Data>Дата відправки у роботу: {formatingData(dataInProgress)}</Data>
      )}

      {type === 'completed' && dataCompleted && (
        <Data>Дата виконання: {formatingData(dataCompleted)}</Data>
      )}

      {type === 'deleted' && dataClose && (
        <Data>Дата видалення: {formatingData(dataClose)}</Data>
      )}
    </>
  );
};
