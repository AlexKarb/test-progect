import { Button } from '../Button/Button';
import { isCompletedPage } from 'root/isPage';
import { changeStatus } from 'service/changeStatus';
import { ChangeTypeModal } from 'module/Modal/component/ChangeTypeModal/ChangeTypeModal';
import { useToggleModal } from 'module/Modal/hooks/useToggleModal';

export const CompletedButton = ({ id, onChange, type }) => {
  const [isOpen, onOpen, onClose] = useToggleModal();

  const currentAction = 'completed';
  const changeType = () => onChange(changeStatus(id, currentAction));

  return (
    <>
      <Button
        currentPage={isCompletedPage(type)}
        currentAction={currentAction}
        onClick={onOpen}
        text={'Заявка виконана'}
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
