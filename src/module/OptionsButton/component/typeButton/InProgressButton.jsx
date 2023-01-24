import { ChangeTypeModal } from 'module/Modal/component/ChangeTypeModal/ChangeTypeModal';
import { useToggleModal } from 'module/Modal/hooks/useToggleModal';
import { isInProgressPage } from 'root/isPage';

import { Button } from '../Button/Button';

export const InProgressButton = ({ id, type }) => {
  const [isOpen, onOpen, onClose] = useToggleModal();

  const currentAction = 'in progress';
  // const changeType = () => changeStatus(id, currentAction);
  const changeType = () => {};

  return (
    <>
      <Button
        currentPage={isInProgressPage(type)}
        currentAction={currentAction}
        onClick={onOpen}
        text={'У роботі'}
      />

      <ChangeTypeModal
        changeType={changeType}
        modalIsOpen={isOpen}
        setIsOpen={onClose}
        currentPage={type}
        currentAction={currentAction}
      />
    </>
  );
};
