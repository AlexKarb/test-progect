import { DeletedModal } from 'module/Modal/component/DeletedModal/DeletedModal';
import { useToggleModal } from 'module/Modal/hooks/useToggleModal';
import { isDeletedPage } from 'root/isPage';
import { changeStatus } from 'service/changeStatus';
import { Button } from '../Button/Button';

export const DeletedButton = ({ type, onChange, id }) => {
  const [isOpen, onOpen, onClose] = useToggleModal();

  const currentAction = 'deleted';
  const changeType = () => onChange(changeStatus(id, currentAction));

  return (
    <>
      <Button
        currentPage={isDeletedPage(type)}
        currentAction={currentAction}
        onClick={onOpen}
        text={'Видалити'}
      />

      <DeletedModal
        id={id}
        onChange={changeType}
        modalIsOpen={isOpen}
        setIsOpen={onClose}
        action={currentAction}
      />
    </>
  );
};
