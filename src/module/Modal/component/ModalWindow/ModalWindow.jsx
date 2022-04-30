import { ModalW } from 'module/Modal/component/MainElementModal/Modal';
import { useSelector } from 'react-redux';
import { getRoleValue } from 'redux/authSlice';
import { Container } from './ModalWindow.styled';
import { NoAccess } from '../NoAccess/NoAccess';
import { ButtonsBlock } from 'module/Modal/component/ButtonsBlock/ButtonsBlock';

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
          <ButtonsBlock
            action={action}
            changeType={changeType}
            onClose={() => setIsOpen(false)}
          />
        </Container>
      )}
    </ModalW>
  );
};
