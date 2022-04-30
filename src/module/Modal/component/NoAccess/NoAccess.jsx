import { Container, Text } from '../ModalWindow/ModalWindow.styled';
import { Button } from '../ButtonsBlock/ButtonsBlock.styled';

export const NoAccess = ({ onClose }) => {
  return (
    <Container>
      <Text>У вас недостатньо прав доступу</Text>

      <Button
        agree
        action={'noAccess'}
        onClick={() => onClose(false)}
        type="button"
      >
        Закрити
      </Button>
    </Container>
  );
};
