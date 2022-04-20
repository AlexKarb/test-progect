import { ModalW } from 'module/Modal/Modal';
import { useSelector } from 'react-redux';
import { getRoleValue } from 'redux/authSlice';
import { ButtonWrapper, Button, Container } from './ModalWindow.styled';
import { NoAccess } from './noAccess';

export const ModalWindow = ({
  changeType,
  modalIsOpen,
  setIsOpen,
  children,
  action,
}) => {
  const role = useSelector(getRoleValue);

  return (
    <ModalW onClose={setIsOpen} open={modalIsOpen}>
      {role === 'GUEST' && <NoAccess onClose={setIsOpen} />}
      {role !== 'GUEST' && (
        <Container>
          {children}
          <ButtonWrapper>
            <Button action={action} agree onClick={changeType}>
              Так
            </Button>
            <Button
              action={action}
              disagree
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Ні
            </Button>
          </ButtonWrapper>
        </Container>
      )}
    </ModalW>
  );
};
