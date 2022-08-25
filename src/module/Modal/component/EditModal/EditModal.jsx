import { useEditCard } from 'module/Card/hooks/useEditCard';
import { Form } from 'module/Form';
import { CloseButton } from 'module/Modal/component/CloseButton/CloseButton';
import { ModalW } from 'module/Modal/component/MainElementModal/Modal';
import { NoAccess } from '../NoAccess/NoAccess';
import { EditTitle } from './EditModal.styled';

import { useValueEditModal } from './hooks/useValueEditModal';

export const EditModal = ({ id, modalIsOpen, setIsOpen, onChange }) => {
  const [values, setValues] = useValueEditModal(id, modalIsOpen);
  const [editCard, noAccess] = useEditCard(setValues, onChange);

  const handleSubmit = value => {
    editCard(value);
    setIsOpen(false);
  };

  return (
    <ModalW onClose={setIsOpen} open={modalIsOpen}>
      {values && (
        <div>
          <EditTitle>Редагувати</EditTitle>
          <CloseButton onClick={() => setIsOpen(false)} />
          <Form onSubmit={handleSubmit} initialValues={values} type={'edit'} />
        </div>
      )}

      {noAccess && (
        <ModalW onClose={setIsOpen} open={modalIsOpen}>
          <NoAccess onClose={setIsOpen} />
        </ModalW>
      )}
    </ModalW>
  );
};
