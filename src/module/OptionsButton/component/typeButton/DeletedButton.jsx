import { DeletedModal } from 'module/Modal/component/DeletedModal/DeletedModal';
import { useToggleModal } from 'module/Modal/hooks/useToggleModal';
import { isDeletedPage } from 'root/isPage';

import { Button } from '../Button/Button';
import { useChangeType } from '../hooks/useChangeType';

export const DeletedButton = ({ type, id }) => {
  const currentAction = 'deleted';

  const [isOpen, onOpen, onClose] = useToggleModal();
  const changeStatus = useChangeType(currentAction, id, onClose);

  return (
    <>
      <Button
        currentPage={isDeletedPage(type)}
        currentAction={currentAction}
        onClick={onOpen}
        text={'Видалити'}
      />

      <DeletedModal
        onChange={changeStatus}
        modalIsOpen={isOpen}
        setIsOpen={onClose}
        activeButton={'right'}
      />
    </>
  );
};
