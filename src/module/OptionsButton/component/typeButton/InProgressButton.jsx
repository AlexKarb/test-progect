import { ChangeTypeModal } from 'module/Modal/component/ChangeTypeModal/ChangeTypeModal';
import { useToggleModal } from 'module/Modal/hooks/useToggleModal';
import { isInProgressPage } from 'root/isPage';
import { changeStatus } from 'service/changeStatus';
import { Button } from '../Button/Button';

export const InProgressButton = ({ id, onChange, type }) => {
  const [isOpen, onOpen, onClose] = useToggleModal();

  const currentAction = 'in progress';
  const changeType = () => onChange(changeStatus(id, currentAction));

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
        action={'change'}
        currentPage={type}
        currentAction={currentAction}
      />
    </>
  );
};
