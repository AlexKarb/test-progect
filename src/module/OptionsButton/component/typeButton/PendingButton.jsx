import { ChangeTypeModal } from 'module/Modal/component/ChangeTypeModal/ChangeTypeModal';
import { useToggleModal } from 'module/Modal/hooks/useToggleModal';

import { isPendingPage } from 'root/isPage';

import { Button } from '../Button/Button';

export const PendingButton = ({ id, onChange, type }) => {
  const [isOpen, onOpen, onClose] = useToggleModal();

  const currentAction = 'pending';

  // const changeType = () => changeStatus(id, currentAction);
  const changeType = () => {};

  return (
    <>
      <Button
        currentPage={isPendingPage(type)}
        currentAction={currentAction}
        onClick={onOpen}
        text={'Активні'}
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
