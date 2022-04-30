import { Container, CreateButton, TitleBlock, Hero, Footer } from './component';
import { MainContainer } from 'module/Utils/MainContainer/MainContainer';

const HomePage = () => (
  <>
    <MainContainer>
      <Container>
        <div>
          <TitleBlock />
          <Hero />
        </div>
        <CreateButton />
      </Container>
    </MainContainer>
    <Footer />
  </>
);

export default HomePage;
