import { formatingData } from 'module/ApplicationList/hooks/formatingData';
import {
  isCompletedPage,
  isDeletedPage,
  isInProgressPage,
  isPendingPage,
} from 'root/isPage';
import { Data, Container } from './DataSet.styled';

export const DataSet = ({ dates, type }) => {
  const { dataAdd, dataClose, dataInProgress, dataCompleted } = dates;

  return (
    <>
      <Container>
        {isPendingPage(type) && (
          <Data>Дата створення:{formatingData(dataAdd)}</Data>
        )}

        {isInProgressPage(type) && (
          <Data>Дата відправки у роботу: {formatingData(dataInProgress)}</Data>
        )}
        {isCompletedPage(type) && dataCompleted && (
          <Data>Дата виконання: {formatingData(dataCompleted)}</Data>
        )}
        {isDeletedPage(type) && dataClose && (
          <Data>Дата видалення: {formatingData(dataClose)}</Data>
        )}
      </Container>
    </>
  );
};
