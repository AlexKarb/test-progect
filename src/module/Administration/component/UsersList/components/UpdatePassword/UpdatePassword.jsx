import { ModalWindow } from 'module/Modal/component/ModalWindow/ModalWindow';
import { Text } from 'module/Modal/component/ModalWindow/ModalWindow.styled';
import { useToggleModal } from 'module/Modal/hooks/useToggleModal';
import { useState } from 'react';
import { EditIcon, NewPassword } from './UpdatePassword.styled';
import { Button as Icon } from 'module/OptionsButton/component/Button/Button';
import { Button } from '../Button/Button';
import { AutoGeneratePassword } from 'module/Administration/component/AutoGeneratePassword/AutoGeneratePassword';
import { useUpdatePasswordUserMutation } from 'service/redux/api';
import { notifySuccess } from 'module/Toaster/Toaster';

export const UpdatePassword = ({ userId }) => {
  const [isOpen, onOpen, onClose] = useToggleModal();
  const [newPassword, setNewPassword] = useState('');
  const [updatePasswordUser, { isLoading }] = useUpdatePasswordUserMutation();

  const handleSubmit = async () => {
    const result = await updatePasswordUser({ body: { password: newPassword }, userId });

    if (result.data.status === 200) notifySuccess('Пароль змінено!');

    setNewPassword('');
    onClose();
  };

  return (
    <>
      <EditIcon>
        <Icon currentAction={'edit'} onClick={onOpen} text={'Редагувати'} />
      </EditIcon>
      <Button onClick={onOpen} text={'Оновити'} />

      <ModalWindow
        changeType={handleSubmit}
        modalIsOpen={isOpen}
        setIsOpen={onClose}
        button={['Зберегти', 'Закрити']}
        activeButton={'right'}
        isLoading={isLoading}
      >
        <Text>Створити новий пароль</Text>
        <NewPassword
          autoComplete="off"
          type="text"
          name="newPassword"
          value={newPassword}
          placeholder="введіть пароль"
          onChange={e => setNewPassword(e.currentTarget.value)}
        />
        <AutoGeneratePassword functionSetPassword={setNewPassword} />
      </ModalWindow>
    </>
  );
};
