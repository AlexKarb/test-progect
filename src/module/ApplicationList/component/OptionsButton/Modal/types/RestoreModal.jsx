import { ModalWindow } from '../ModalWindow';
import { Text } from '../ModalWindow.styled';

export const RestoreModal = ({
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
      <Text>Ви дійсно бажаєте відновити заявку?</Text>
    </ModalWindow>
  );
};
