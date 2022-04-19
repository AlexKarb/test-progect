import { Textarea } from './Comment.styled';

export const InputInfo = () => (
  <>
    <Textarea
      type="text"
      name="info"
      component="textarea"
      placeholder="введіть інформіцію"
      rows="4"
    />
  </>
);
