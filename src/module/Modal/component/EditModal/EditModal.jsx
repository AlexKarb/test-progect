import { Form } from 'module/Form';
import { CloseButton } from 'module/Modal/component/CloseButton/CloseButton';
import { ModalW } from 'module/Modal/component/MainElementModal/Modal';
import { MainSpiner } from 'module/Utils/MainSpiner/MainSpiner';
import { Container, EditTitle } from './EditModal.styled';

export const EditModal = ({ modalIsOpen, handleSubmit, onClose, isLoading, data }) => {
  return (
    <ModalW onClose={onClose} open={modalIsOpen}>
      {isLoading && <MainSpiner />}

      {!isLoading && (
        <Container>
          <EditTitle>Редагувати</EditTitle>
          <CloseButton onClick={onClose} />

          <Form
            onClose={onClose}
            onSubmit={handleSubmit}
            initialValues={data}
            type={'edit'}
            isLoading={isLoading}
          />
        </Container>
      )}
    </ModalW>
  );
};
