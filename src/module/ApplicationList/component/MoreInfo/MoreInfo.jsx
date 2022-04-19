import { isPendingPage } from 'root/isPage';
import { namesOfServiceTypes } from 'service/dataFromServiceType';
import { DataHistory } from './DataHistory';
import {
  Container,
  Block,
  Label,
  Info,
  CommentContainer,
} from './MoreInfo.styled';

export const MoreInfo = ({ additional, info, dates, type }) => {
  return (
    <Block>
      <hr />
      <div>
        {namesOfServiceTypes().map(({ type, label }) => {
          return (
            additional[type] && (
              <Container key={type}>
                <Label> {label} : </Label>
                <Info>{additional[type]}</Info>
              </Container>
            )
          );
        })}
      </div>

      {info && (
        <>
          <hr />
          <CommentContainer>
            <Label> інформація : </Label>
            <Info>{info}</Info>
          </CommentContainer>
        </>
      )}
      {!isPendingPage(type) && (
        <>
          <hr />
          <DataHistory dates={dates} type={type} />
        </>
      )}
    </Block>
  );
};
