import { Form } from 'module/Application/component/Form/Form';
import { ModalW } from 'module/Modal/Modal';
import { notifyChange } from 'module/Toaster/Toaster';
import { useEffect, useState } from 'react';
import { getPublicationById } from 'service/api-service';
import { CloseButton, ModalContainer, Title } from './ModalW.styled';

export const EditModal = ({ id, modalIsOpen, setIsOpen, onChange }) => {
  const [values, setValues] = useState({});

  const handleSubmit = async values => {
    const { id, ...data } = values;
    await onChange({ id, data });
    setValues(values);
    await setIsOpen(false);
    notifyChange('Зміни внесено!');
  };

  useEffect(() => {
    getPublicationById(id).then(setValues);
  }, [id]);

  return (
    <ModalW onClose={setIsOpen} open={modalIsOpen}>
      <ModalContainer>
        <Title>Редагувати</Title>
        <CloseButton onClick={() => setIsOpen(false)} type="button" />

        <Form onSubmit={handleSubmit} initialValues={values} type={'edit'} />
      </ModalContainer>
    </ModalW>
  );
};
