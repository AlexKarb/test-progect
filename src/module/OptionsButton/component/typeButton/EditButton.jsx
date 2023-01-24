import { EditModal } from 'module/Modal/component/EditModal/EditModal';
import { Spiner } from 'module/Modal/component/EditModal/EditModal.styled';
import { useEditModal } from 'module/OptionsButton/component/hooks/useEditModal';
import { Button } from '../Button/Button';

export const EditButton = ({ id }) => {
  const [openModal, closeModal, isOpen, data, editRequestCard, isLoading] =
    useEditModal(id);

  return (
    <>
      <Button currentAction={'edit'} onClick={openModal} text={'Редагувати'} />
      <EditModal
        modalIsOpen={isOpen}
        onClose={closeModal}
        data={data}
        editRequestCard={editRequestCard}
        isLoading={isLoading}
      />
    </>
  );
};
