import { formatingDate } from 'service/date/formatingDate';
import {
  isCompletedPage,
  isDeletedPage,
  isPendingPage,
  isInProgressPage,
} from 'root/isPage';
import {
  Container,
  DateHistoryContainer,
  DateInfo,
  DateLabel,
} from './DateHistory.styled';

export const DateHistory = ({ dates, type }) => {
  const { dataAdd, dataInProgress, dataCompleted } = dates;

  return (
    <>
      <DateHistoryContainer>
        {!isPendingPage(type) && (
          <Container>
            <DateLabel> заявка створенна:</DateLabel>
            <DateInfo> {formatingDate(dataAdd)}</DateInfo>
          </Container>
        )}

        {(isInProgressPage(type) ||
          isCompletedPage(type) ||
          isDeletedPage(type)) &&
          dataInProgress && (
            <Container>
              <DateLabel>відправлено в обробку:</DateLabel>
              <DateInfo>{formatingDate(dataInProgress)}</DateInfo>
            </Container>
          )}
        {(isDeletedPage(type) || isCompletedPage(type)) && dataCompleted && (
          <Container>
            <DateLabel>дата виконання: </DateLabel>
            <DateInfo> {formatingDate(dataCompleted)}</DateInfo>
          </Container>
        )}
      </DateHistoryContainer>
    </>
  );
};
