import { ChangeTypeModal } from 'module/Modal/component/ChangeTypeModal/ChangeTypeModal';
import { useToggleModal } from 'module/Modal/hooks/useToggleModal';

import { isPendingPage } from 'root/isPage';

import { Button } from '../Button/Button';
import { useChangeType } from '../hooks/useChangeType';

export const PendingButton = ({ id, type }) => {
  const currentAction = 'pending';

  const [isOpen, onOpen, onClose] = useToggleModal();
  const changeStatus = useChangeType(currentAction, id);

  return (
    <>
      <Button
        currentPage={isPendingPage(type)}
        currentAction={currentAction}
        onClick={onOpen}
        text={'Активні'}
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
