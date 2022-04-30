import { CommentContainer, Info, Label } from './DetailsComment.styled';

export const DetailsComment = ({ data }) => (
  <CommentContainer>
    <Label> інформація : </Label>
    <Info>{data}</Info>
  </CommentContainer>
);
