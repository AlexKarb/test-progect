import { Container, CreateButton, TitleBlock, Hero, Footer } from './component';
import { MainContainer } from 'module/Utils/MainContainer/MainContainer';

const HomePage = () => (
  <>
    <MainContainer>
      <Container>
        <TitleBlock />
        <Hero />
        <CreateButton />
      </Container>
    </MainContainer>
    <Footer />
  </>
);

export default HomePage;
