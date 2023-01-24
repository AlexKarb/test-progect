import { ModalW } from 'module/Modal/component/MainElementModal/Modal';
import { useSelector } from 'react-redux';
import { getRoleValue } from 'service/redux/auth/authSlice';
import { Container } from './ModalWindow.styled';
import { NoAccess } from '../NoAccess/NoAccess';
import { ButtonsBlock } from 'module/Modal/component/ButtonsBlock/ButtonsBlock';
import { MainSpiner } from 'module/Utils/MainSpiner/MainSpiner';

export const ModalWindow = ({
  changeType,
  modalIsOpen,
  setIsOpen,
  children,
  activeButton,
  button = ['Так', 'Ні'],
  isLoading = false,
}) => {
  const role = useSelector(getRoleValue);

  return (
    <ModalW onClose={setIsOpen} open={modalIsOpen}>
      {role === 'GUEST' && <NoAccess onClose={setIsOpen} />}
      {role !== 'GUEST' && (
        <Container>
          {!isLoading && (
            <>
              {children}

              <ButtonsBlock
                textButton={button}
                activeButton={activeButton}
                changeType={changeType}
                onClose={() => setIsOpen(false)}
              />
            </>
          )}
          {isLoading && <MainSpiner />}
        </Container>
      )}
    </ModalW>
  );
};
