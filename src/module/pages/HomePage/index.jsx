import {
  Container,
  CreateButton,
  TitleBlock,
  Hero,
  Footer,
  HeroWrapper,
  Wrap,
} from './component';
import { MainContainer } from 'module/Utils/MainContainer/MainContainer';

const HomePage = () => (
  <Wrap>
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
  </Wrap>
);

export default HomePage;
