import { initialValues } from 'module/Form/service/initialValues';
import { notifyChange } from 'module/Toaster/Toaster';
import { Title } from 'module/Utils/Title/Title';
import { useEffect, useState } from 'react';
import { postPublication } from 'service/api-service';
import { Form } from '../../Form';
import { Container } from './CreateApplication.styled';

const CreateApplication = () => {
  const [value, setValue] = useState();

  useEffect(() => {
    if (!value) {
      return;
    }

    postPublication({
      ...initialValues,
      ...value,
      status: 'pending',
      dataAdd: new Date(),
    });

    notifyChange('Заявка оформлена!');
  }, [value]);

  return (
    <Container>
      <Title text={'Створення заявки'} />
      <Form onSubmit={setValue} initialValues={initialValues} />
    </Container>
  );
};

export default CreateApplication;
