import { ModalWindow } from '../ModalWindow/ModalWindow';
import { Text } from '../ModalWindow/ModalWindow.styled';

export const DeletedModal = ({
  onChange,
  modalIsOpen,
  setIsOpen,
  activeButton,
}) => {
  return (
    <ModalWindow
      changeType={onChange}
      modalIsOpen={modalIsOpen}
      setIsOpen={setIsOpen}
      activeButton={activeButton}
    >
      <Text>Ви дійсно хочете видалити заявку?</Text>
    </ModalWindow>
  );
};
