import { ModalW } from 'module/Modal/Modal';
import { changeStatus } from 'service/changeStatus';
import { ButtonWrapper, Button, Container, Text } from './ModalW.styled';

export const DeletedModal = ({ id, onChange, modalIsOpen, setIsOpen }) => {
  const currentAction = 'deleted';

  return (
    <ModalW onClose={setIsOpen} open={modalIsOpen}>
      <Container>
        <Text>Ви дійсно хочете видалити заявку?</Text>
        <ButtonWrapper>
          <Button onClick={() => onChange(changeStatus(id, currentAction))}>
            Так
          </Button>
          <Button
            action={'active'}
            onClick={() => setIsOpen(false)}
            type="button"
          >
            Ні
          </Button>
        </ButtonWrapper>
      </Container>
    </ModalW>
  );
};
