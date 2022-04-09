import { Form } from 'module/Application/component/Form/Form';
import { ModalW } from 'module/Modal/Modal';
import { useEffect, useState } from 'react';
import { getPublicationById } from 'service/api-service';
import { ModalContainer } from './ModalW.styled';

export const EditModal = ({ id, modalIsOpen, setIsOpen, onChange }) => {
  const [values, setValues] = useState({});

  const closeModal = () => setIsOpen(false);

  const handleSubmit = async values => {
    const { id, ...data } = values;
    onChange({ id, data });
    setValues(values);
  };

  useEffect(() => {
    getPublicationById(1).then(setValues);
  }, [id]);

  return (
    <ModalW onClose={closeModal} open={modalIsOpen}>
      <ModalContainer>
        <Form
          onSubmit={handleSubmit}
          initialValues={values}
          closeModal={closeModal}
        />
      </ModalContainer>
    </ModalW>
  );
};
