import { CreatedBy } from 'module/Utils/Button/CreatedBy/CreatedBy';
import { LogOut } from './LogOut';
import { Container } from './SideBarFutter.styled';

export const SideBarFutter = () => (
  <Container>
    <LogOut />
    <CreatedBy />
  </Container>
);
