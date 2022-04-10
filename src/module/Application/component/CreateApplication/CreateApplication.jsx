import { initialValues } from 'module/Application/service/initialValues';
import { notifyChange } from 'module/Toaster/Toaster';
import { useEffect, useState } from 'react';
import { postPublication } from 'service/api-service';
import { Form } from '../Form/Form';
import { Container, Title } from './CreateApplication.styled';

export const CreateApplication = () => {
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
      <Title>Створення заявки</Title>
      <Form onSubmit={setValue} initialValues={initialValues} />
    </Container>
  );
};
