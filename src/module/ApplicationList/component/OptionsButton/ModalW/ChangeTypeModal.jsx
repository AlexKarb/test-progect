import { ModalW } from 'module/Modal/Modal';
import { ButtonWrapper, Button, Container, Title } from './ModalW.styled';

export const ChangeModal = ({
  changeType,
  modalIsOpen,
  setIsOpen,
  currentAction,
}) => {
  const closeModal = () => setIsOpen(false);

  return (
    <ModalW onClose={closeModal} open={modalIsOpen}>
      <Container>
        <Title>
          Відправити заявку у{currentAction === 'pending' && ' АКТИВНІ'}
          {currentAction === 'in progress' && ' РОБОТУ'}
          {currentAction === 'completed' && ' ВИКОНАНІ'}?
        </Title>
        <ButtonWrapper>
          <Button type={'active'} onClick={changeType}>
            Так
          </Button>
          <Button onClick={closeModal}>Ні</Button>
        </ButtonWrapper>
      </Container>
    </ModalW>
  );
};
