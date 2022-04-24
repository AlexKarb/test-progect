import { CreateButton } from './CreateButton/CreateButton';
import { Footer } from './Footer/Footer';
import { Hero, Container } from './HomePage.styled';
import { TitleBlock } from './TiltlesBlock/TiltlesBlock';

export const HomePage = () => (
  <>
    <Container>
      <TitleBlock />
      <Hero />
      <CreateButton />
    </Container>
    <Footer />
  </>
);
