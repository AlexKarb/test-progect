import { FormContainer } from 'components/FormContainer/FormContainer';
import { Button, Title } from './Home.styled';

const Home = () => (
  <FormContainer>
    <Title>Для створення запису виберіть тип:</Title>
    <Button to="/create-help">Потрібна допомога</Button>
    <Button to="/create-helpers">Хочуть допомогти</Button>
  </FormContainer>
);

export default Home;
