import { Container, Burger } from './Header.styled';

export const Header = ({ openSideBar }) => {
  return (
    <Container>
      <Burger onClick={() => openSideBar(true)}>X</Burger>
    </Container>
  );
};
