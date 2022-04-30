import { Text } from '../ModalWindow/ModalWindow.styled';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { isDeletedPage } from 'root/isPage';
import { selectCurrentAction } from 'module/Modal/hooks/selectCurrentAction';

export const ChangeTypeModal = ({
  changeType,
  modalIsOpen,
  setIsOpen,
  action,
  currentPage,
  currentAction,
}) => {
  return (
    <ModalWindow
      changeType={changeType}
      modalIsOpen={modalIsOpen}
      setIsOpen={setIsOpen}
      action={action}
    >
      <Text>
        {isDeletedPage(currentPage)
          ? 'Ви дійсно бажаєте відновити заявку?'
          : ` Відправити заявку у 
            ${selectCurrentAction(currentAction)}? `}
      </Text>
    </ModalWindow>
  );
};
