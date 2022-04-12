import { ModalW } from 'module/Modal/Modal';
import { ButtonWrapper, Button, Container, Text } from './ModalW.styled';

export const ChangeModal = ({
  changeType,
  modalIsOpen,
  setIsOpen,
  currentAction,
}) => {
  return (
    <ModalW onClose={setIsOpen} open={modalIsOpen}>
      <Container>
        <Text>
          Відправити заявку у{currentAction === 'pending' && ' АКТИВНІ'}
          {currentAction === 'in progress' && ' РОБОТУ'}
          {currentAction === 'completed' && ' ВИКОНАНІ'}?
        </Text>
        <ButtonWrapper>
          <Button action={'active'} onClick={changeType} type="button">
            Так
          </Button>
          <Button
            onClick={() => {
              setIsOpen(false);
            }}
            type="button"
          >
            Ні
          </Button>
        </ButtonWrapper>
      </Container>
    </ModalW>
  );
};
