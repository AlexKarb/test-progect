import {
  Container,
  CreateButton,
  TitleBlock,
  Hero,
  Footer,
  HeroWrapper,
} from './component';
import { MainContainer } from 'module/Utils/MainContainer/MainContainer';

const HomePage = () => (
  <>
    <MainContainer>
      <Container>
        <HeroWrapper>
          <TitleBlock />
          <Hero />
        </HeroWrapper>
        <CreateButton />
      </Container>
    </MainContainer>
    <Footer />
  </>
);

export default HomePage;
