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
      ...value,
      status: 'pending',
      dataAdd: new Date(),
    });
  }, [value]);

  return (
    <Container>
      <Title>Створення заявки</Title>
      <Form onSubmit={setValue} />
    </Container>
  );
};
