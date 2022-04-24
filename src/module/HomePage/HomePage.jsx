import { CreateButton } from './CreateButton/CreateButton';
import { Footer } from './Footer/Footer';
import { TitleBlock } from './TiltlesBlock/TiltlesBlock';
import { Hero, Container } from './HomePage.styled';

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
