import { Button, ButtonWrapper } from './ButtonsBlock.styled';

export const ButtonsBlock = ({ action, changeType, onClose }) => (
  <ButtonWrapper>
    <Button action={action} agree onClick={changeType}>
      Так
    </Button>
    <Button action={action} disagree onClick={onClose}>
      Ні
    </Button>
  </ButtonWrapper>
);
