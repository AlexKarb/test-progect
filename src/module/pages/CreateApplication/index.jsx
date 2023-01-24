import { initialValues } from 'module/Form/service/initialValues';
import { notifyChange, notifyError } from 'module/Toaster/Toaster';
import { MainContainer } from 'module/Utils/MainContainer/MainContainer';
import { Request } from 'service/redux/api';
import { Form } from '../../Form';
import { Container, Title } from './CreateApplication.styled';

const CreateApplication = () => {
  const [add, { isLoading }] = Request.add();

  const handleSubmit = async values => {
    const result = await add(values);
    console.log('result', result);

    if (result.data) notifyChange('Заявка оформлена!');
    if (result.error) notifyError(result.error?.data?.message);
  };

  return (
    <MainContainer>
      <Container>
        <Title>Створення заявки</Title>
        <Form
          onSubmit={handleSubmit}
          initialValues={initialValues}
          isLoading={isLoading}
        />
      </Container>
    </MainContainer>
  );
};

export default CreateApplication;
