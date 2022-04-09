import { changeStatus } from 'service/changeStatus';
import { ModalW } from 'module/Modal/Modal';
import { ButtonWrapper, Button, Container, Title } from './ModalW.styled';

export const DeletedModal = ({ id, onChange, modalIsOpen, setIsOpen }) => {
  const closeModal = () => setIsOpen(false);

  return (
    <ModalW onClose={closeModal} open={modalIsOpen}>
      <Container>
        <Title>Ви дійсно хочете видалити заявку?</Title>
        <ButtonWrapper>
          <Button onClick={() => onChange(changeStatus(id, 'deleted'))}>
            Так
          </Button>
          <Button type={'active'} onClick={closeModal}>
            Ні
          </Button>
        </ButtonWrapper>
      </Container>
    </ModalW>
  );
};
