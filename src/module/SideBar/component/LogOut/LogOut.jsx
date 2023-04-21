import { useNavigate } from 'react-router-dom';
import { LogoutButton, IconLogout, Label } from './LogOut.styled';
import { ModalWindow } from 'module/Modal/component/ModalWindow/ModalWindow';
import { Text } from 'module/Modal/component/ModalWindow/ModalWindow.styled';
import { useToggleModal } from 'module/Modal/hooks/useToggleModal';
import { useLogoutUserMutation } from 'service/redux/api';
import { notifyError } from 'module/Toaster/Toaster';

export const LogOut = ({ toClose: sideBarClose }) => {
  let navigate = useNavigate();
  const [isOpen, onOpen, onClose] = useToggleModal();
  const [logOut] = useLogoutUserMutation();

  const userLogOut = async () => {
    sideBarClose();
    onClose();
    const result = await logOut();

    if (result?.error?.status) {
      notifyError('Помилка! Повторіть пізніше.');
    } else {
      navigate('/login', { replace: true });
    }
  };

  return (
    <>
      <LogoutButton type="button" onClick={onOpen}>
        <IconLogout />
        <Label> Вийти</Label>
      </LogoutButton>

      <ModalWindow
        changeType={userLogOut}
        modalIsOpen={isOpen}
        setIsOpen={onClose}
        activeButton={'right'}
      >
        <Text>Ви дійсно хочете вийти?</Text>
      </ModalWindow>
    </>
  );
};
