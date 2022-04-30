import { formatingDate } from 'service/date/formatingDate';
import { isCompletedPage, isDeletedPage, isPendingPage } from 'root/isPage';
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

        {(isCompletedPage(type) || isDeletedPage(type)) && dataInProgress && (
          <Container>
            <DateLabel>відправлена в обробку:</DateLabel>
            <DateInfo>{formatingDate(dataInProgress)}</DateInfo>
          </Container>
        )}
        {isDeletedPage(type) && dataCompleted && (
          <Container>
            <DateLabel>дата виконання: </DateLabel>
            <DateInfo> {formatingDate(dataCompleted)}</DateInfo>
          </Container>
        )}
      </DateHistoryContainer>
    </>
  );
};
