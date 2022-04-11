import { formatingData } from 'module/ApplicationList/hooks/formatingData';
import { isCompletedPage, isDeletedPage, isPendingPage } from 'root/isPage';
import { Container, DataInfo, DataLabel } from './MoreInfo.styled';

export const DataHistory = ({ dates, type }) => {
  const { dataAdd, dataInProgress, dataCompleted } = dates;

  return (
    <>
      <ul>
        {!isPendingPage(type) && (
          <Container>
            <DataLabel> заявка створенна:</DataLabel>
            <DataInfo> {formatingData(dataAdd)}</DataInfo>
          </Container>
        )}

        {(isCompletedPage(type) || isDeletedPage(type)) && dataInProgress && (
          <Container>
            <DataLabel>відправлена в обробку:</DataLabel>
            <DataInfo>{formatingData(dataInProgress)}</DataInfo>
          </Container>
        )}
        {isDeletedPage(type) && dataCompleted && (
          <Container>
            <DataLabel>дата виконання: </DataLabel>
            <DataInfo> {formatingData(dataCompleted)}</DataInfo>
          </Container>
        )}
      </ul>
    </>
  );
};
