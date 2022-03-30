import { SuperLink, Navigation, Container } from './Header.styled';
import { LogOut } from './Logout';

const Header = () => (
  <Container>
    <Navigation>
      <SuperLink to="/home">На головну </SuperLink>
      <SuperLink to="/helpers-list">Помічники</SuperLink>
      <SuperLink to="/help-list">Потребують допомоги</SuperLink>
    </Navigation>
    <LogOut />
  </Container>
);

export default Header;
