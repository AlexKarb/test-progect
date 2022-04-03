import { CreatedBy } from 'module/SideBar/component/Futter/CreatedBy';
import { LogOut } from './LogOut';
import { Container } from './Futter.styled';

export const Futter = () => (
  <Container>
    <LogOut />
    <CreatedBy />
  </Container>
);
