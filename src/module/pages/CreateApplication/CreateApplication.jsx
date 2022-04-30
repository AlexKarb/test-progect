import { initialValues } from 'module/Form/service/initialValues';
import { notifyChange } from 'module/Toaster/Toaster';
import { MainContainer } from 'module/Utils/MainContainer/MainContainer';
import { Title } from 'module/Utils/Title/Title';
import { useEffect, useState } from 'react';
import { postPublication } from 'service/api-service';
import { Form } from '../../Form';

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
    <MainContainer>
      <Title text={'Створення заявки'} />
      <Form onSubmit={setValue} initialValues={initialValues} />
    </MainContainer>
  );
};

export default CreateApplication;
