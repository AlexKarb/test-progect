import { ChangeTypeModal } from 'module/Modal/component/ChangeTypeModal/ChangeTypeModal';
import { useToggleModal } from 'module/Modal/hooks/useToggleModal';
import { isInProgressPage } from 'root/isPage';

import { Button } from '../Button/Button';
import { useChangeType } from '../hooks/useChangeType';

export const InProgressButton = ({ id, type }) => {
  const currentAction = 'in progress';

  const [isOpen, onOpen, onClose] = useToggleModal();
  const changeStatus = useChangeType(currentAction, id);

  return (
    <>
      <Button
        currentPage={isInProgressPage(type)}
        currentAction={currentAction}
        onClick={onOpen}
        text={'У роботі'}
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
