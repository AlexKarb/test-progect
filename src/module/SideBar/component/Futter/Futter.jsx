import { LogOut } from '../LogOut/LogOut';
import { Container } from './Futter.styled';

export const Futter = ({ toClose }) => (
  <Container>
    <LogOut toClose={toClose} />
  </Container>
);
