import {
  Container,
  CreateButton,
  TitleBlock,
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
        </HeroWrapper>
        <CreateButton />
      </Container>
    </MainContainer>
    <Footer />
  </>
);

export default HomePage;
