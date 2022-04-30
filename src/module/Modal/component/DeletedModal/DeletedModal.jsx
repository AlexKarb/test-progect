import { ModalWindow } from '../ModalWindow/ModalWindow';
import { Text } from '../ModalWindow/ModalWindow.styled';

export const DeletedModal = ({ onChange, modalIsOpen, setIsOpen, action }) => {
  return (
    <ModalWindow
      changeType={onChange}
      modalIsOpen={modalIsOpen}
      setIsOpen={setIsOpen}
      action={action}
    >
      <Text>Ви дійсно хочете видалити заявку?</Text>
    </ModalWindow>
  );
};
