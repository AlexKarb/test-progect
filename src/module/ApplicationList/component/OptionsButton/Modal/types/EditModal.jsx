import { Form } from 'module/Application/component/Form/Form';
import { ModalW } from 'module/Modal/Modal';
import { notifyChange } from 'module/Toaster/Toaster';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getRoleValue } from 'redux/authSlice';
import { getPublicationById } from 'service/api-service';
import { CloseButton, ModalContainer, Title } from '../ModalWindow.styled';
import { NoAccess } from '../noAccess';

export const EditModal = ({ id, modalIsOpen, setIsOpen, onChange }) => {
  const [values, setValues] = useState({});
  const [noAccess, setNoAccess] = useState(false);

  const role = useSelector(getRoleValue);

  const handleSubmit = async values => {
    if (role === 'GUEST') {
      setNoAccess(true);
      return;
    }

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

      {noAccess && (
        <ModalW onClose={setIsOpen} open={modalIsOpen}>
          <NoAccess onClose={setIsOpen} />
        </ModalW>
      )}
    </ModalW>
  );
};
