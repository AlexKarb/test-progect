import { SuperLink, Navigation, Container } from './Header.styled';
import { LogOut } from './Logout';

const Header = () => (
  <Container>
    <Navigation>
      <SuperLink to="/create-help">На головну </SuperLink>
      <SuperLink to="/help-list">Потребують допомоги</SuperLink>
    </Navigation>
    <LogOut />
  </Container>
);

export default Header;
