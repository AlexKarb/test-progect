import { ModalWindow } from 'module/Modal/component/ModalWindow/ModalWindow';
import { Text } from 'module/Modal/component/ModalWindow/ModalWindow.styled';
import { useToggleModal } from 'module/Modal/hooks/useToggleModal';

import { useRemoveUserMutation } from 'service/redux/api';
import { deleteNotification } from '../../helpers';
import { Button } from '../Button/Button';
import { DeletedIcon } from './DeletedIcon/DeletedIcon';

export const DeletedUser = ({ user }) => {
  const [isOpen, onOpen, onClose] = useToggleModal();
  const [removeUser, { isLoading }] = useRemoveUserMutation();

  const handleSubmit = async () => {
    const result = await removeUser({ userId: user._id });
    onClose();
    deleteNotification(result, user);
  };

  return (
    <>
      <Button onClick={onOpen} text={'Видалити'} />
      <DeletedIcon onClick={onOpen} />
      <ModalWindow
        changeType={handleSubmit}
        modalIsOpen={isOpen}
        setIsOpen={onClose}
        activeButton={'right'}
        isLoading={isLoading}
      >
        <Text>Ви дійсно хочете видалити користувача?</Text>
      </ModalWindow>
    </>
  );
};
