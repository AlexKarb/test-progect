import { Button, ButtonWrapper } from './ButtonsBlock.styled';

export const ButtonsBlock = ({
  textButton,
  activeButton = 'left',
  changeType,
  onClose,
}) => (
  <ButtonWrapper>
    <Button activeButton={activeButton} agree onClick={changeType}>
      {textButton[0]}
    </Button>
    <Button activeButton={activeButton} disagree onClick={onClose}>
      {textButton[1]}
    </Button>
  </ButtonWrapper>
);
