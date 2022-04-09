import { ModalW } from 'module/Modal/Modal';
import { ButtonWrapper, Button, Container, Title } from './ModalW.styled';

export const RestoreModal = ({ changeType, modalIsOpen, setIsOpen }) => {
  const closeModal = () => setIsOpen(false);

  return (
    <ModalW onClose={closeModal} open={modalIsOpen}>
      <Container>
        <Title>Ви дійсно бажаєте відновити заявку?</Title>
        <ButtonWrapper>
          <Button onClick={changeType}>Так</Button>
          <Button type={'active'} onClick={closeModal}>
            Ні
          </Button>
        </ButtonWrapper>
      </Container>
    </ModalW>
  );
};
