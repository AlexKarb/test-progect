import { Form } from 'module/Form';
import { CloseButton } from 'module/Modal/component/CloseButton/CloseButton';
import { ModalW } from 'module/Modal/component/MainElementModal/Modal';
import { MainSpiner } from 'module/Utils/MainSpiner/MainSpiner';
import { EditTitle } from './EditModal.styled';
import { MiniSpiner } from './MiniSpiner';

export const EditModal = ({ modalIsOpen, onClose, data, editRequestCard, isLoading }) => {
  const handleSubmit = val => {
    editRequestCard(val);
  };

  return (
    <ModalW onClose={onClose} open={modalIsOpen}>
      {!data && <MainSpiner />}

      {data && (
        <div>
          <EditTitle>Редагувати</EditTitle>
          {isLoading && <MiniSpiner />}
          {!isLoading && <CloseButton onClick={onClose} />}

          <Form
            onSubmit={handleSubmit}
            initialValues={data}
            type={'edit'}
            isLoading={isLoading}
          />
        </div>
      )}
    </ModalW>
  );
};
