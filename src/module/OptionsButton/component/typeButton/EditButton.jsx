import { EditModal } from 'module/Modal/component/EditModal/EditModal';
import { useToggleModal } from 'module/Modal/hooks/useToggleModal';
import { Button } from '../Button/Button';

export const EditButton = ({ id, onChange }) => {
  const [isOpen, onOpen, onClose] = useToggleModal();

  return (
    <>
      <Button currentAction={'edit'} onClick={onOpen} text={'Редагувати'} />

      <EditModal
        id={id}
        modalIsOpen={isOpen}
        setIsOpen={onClose}
        onChange={onChange}
      />
    </>
  );
};
