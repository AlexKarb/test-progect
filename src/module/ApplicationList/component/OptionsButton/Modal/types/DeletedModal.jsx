import { ModalWindow } from '../ModalWindow';
import { Text } from '../ModalWindow.styled';

export const DeletedModal = ({
  changeType,
  modalIsOpen,
  setIsOpen,
  action,
}) => {
  return (
    <ModalWindow
      changeType={changeType}
      modalIsOpen={modalIsOpen}
      setIsOpen={setIsOpen}
      action={action}
    >
      <Text>Ви дійсно хочете видалити заявку?</Text>
    </ModalWindow>
  );
};
