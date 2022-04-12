import { ModalW } from 'module/Modal/Modal';
import { ButtonWrapper, Button, Container, Text } from './ModalW.styled';

export const RestoreModal = ({ changeType, modalIsOpen, setIsOpen }) => {
  return (
    <ModalW onClose={setIsOpen} open={modalIsOpen}>
      <Container>
        <Text>Ви дійсно бажаєте відновити заявку?</Text>
        <ButtonWrapper>
          <Button onClick={changeType}>Так</Button>
          <Button
            action={'active'}
            type="button"
            onClick={() => setIsOpen(false)}
          >
            Ні
          </Button>
        </ButtonWrapper>
      </Container>
    </ModalW>
  );
};
