import { EditModal } from 'module/Modal/component/EditModal/EditModal';
import { useToggleModal } from 'module/Modal/hooks/useToggleModal';
import { Button } from '../Button/Button';
import { useEditRequest } from '../hooks/useEditRequest';

export const EditButton = ({ id }) => {
  const [isOpen, onOpen, onClose] = useToggleModal();
  const { openModal, editRequest, isLoading, data } = useEditRequest(id);

  const handleSubmit = async value => {
    await editRequest(value);
  };

  return (
    <>
      <Button
        currentAction={'edit'}
        onClick={async () => await openModal(onOpen)}
        text={'Редагувати'}
      />
      <EditModal
        modalIsOpen={isOpen}
        onClose={() => onClose(false)}
        id={id}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        data={data}
      />
    </>
  );
};
