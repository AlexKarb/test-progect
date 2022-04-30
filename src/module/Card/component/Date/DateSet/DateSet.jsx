import { formatingDate } from 'service/date/formatingDate';
import {
  isCompletedPage,
  isDeletedPage,
  isInProgressPage,
  isPendingPage,
} from 'root/isPage';
import { Date, Container } from './DateSet.styled';

export const DateSet = ({ dates, type }) => {
  const { dataAdd, dataClose, dataInProgress, dataCompleted } = dates;

  return (
    <>
      <Container>
        {isPendingPage(type) && (
          <Date>Дата створення:{formatingDate(dataAdd)}</Date>
        )}
        {isInProgressPage(type) && (
          <Date>Дата відправки у роботу: {formatingDate(dataInProgress)}</Date>
        )}
        {isCompletedPage(type) && dataCompleted && (
          <Date>Дата виконання: {formatingDate(dataCompleted)}</Date>
        )}
        {isDeletedPage(type) && dataClose && (
          <Date>Дата видалення: {formatingDate(dataClose)}</Date>
        )}
      </Container>
    </>
  );
};
