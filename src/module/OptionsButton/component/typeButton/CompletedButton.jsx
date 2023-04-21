import { Button } from '../Button/Button';
import { isCompletedPage } from 'root/isPage';
import { ChangeTypeModal } from 'module/Modal/component/ChangeTypeModal/ChangeTypeModal';
import { useToggleModal } from 'module/Modal/hooks/useToggleModal';
import { useChangeType } from '../hooks/useChangeType';

export const CompletedButton = ({ id, type }) => {
  const currentAction = 'completed';

  const [isOpen, onOpen, onClose] = useToggleModal();
  const changeStatus = useChangeType(currentAction, id, onClose);

  return (
    <>
      <Button
        currentPage={isCompletedPage(type)}
        currentAction={currentAction}
        onClick={onOpen}
        text={'Заявка виконана'}
      />

      <ChangeTypeModal
        changeType={changeStatus}
        modalIsOpen={isOpen}
        setIsOpen={onClose}
        currentPage={type}
        currentAction={currentAction}
      />
    </>
  );
};
