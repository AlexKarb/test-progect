import { Text } from '../ModalWindow.styled';
import { ModalWindow } from '../ModalWindow';

export const ChangeTypeModal = ({
  changeType,
  modalIsOpen,
  setIsOpen,
  currentAction,
  action,
}) => {
  return (
    <ModalWindow
      changeType={changeType}
      modalIsOpen={modalIsOpen}
      setIsOpen={setIsOpen}
      action={action}
    >
      <Text>
        Відправити заявку у{currentAction === 'pending' && ' АКТИВНІ'}
        {currentAction === 'in progress' && ' РОБОТУ'}
        {currentAction === 'completed' && ' ВИКОНАНІ'}?
      </Text>
    </ModalWindow>
  );
};
