import { Title, ContainerBlock } from '../Utils';
import { Textarea } from './DetailsComment.styled';

export const DetailsComment = () => (
  <ContainerBlock>
    <Title text="Додатково:" />
    <Textarea name="info" placeholder="введіть інформіцію" />
  </ContainerBlock>
);
