import { namesOfServiceTypes } from 'service/dataFromServiceType';
import {
  Container,
  Block,
  Label,
  Info,
  Comment,
  CommentContainer,
} from './MoreInfo.styled';

export const MoreInfo = ({ additional, info }) => {
  return (
    <Block>
      <hr />
      <div>
        {namesOfServiceTypes.map(({ type, label }) => {
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

      <hr />
      {info && (
        <CommentContainer>
          <Label> Інформація : </Label>
          <Comment>{info}</Comment>
        </CommentContainer>
      )}
    </Block>
  );
};
