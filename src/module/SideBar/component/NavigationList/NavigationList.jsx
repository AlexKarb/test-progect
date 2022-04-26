import { dataItemMenu } from 'module/SideBar/service/dataItemMenu';
import {
  List,
  Container,
  LinkMenu,
  IconContainer,
  Label,
} from './NavigationList.styled';

export const Navigation = ({ toClose }) => {
  return (
    <Container>
      <List>
        {dataItemMenu.map(({ label, icon, path }) => (
          <LinkMenu to={path} onClick={toClose} key={label}>
            <IconContainer> {icon}</IconContainer>
            <Label> {label}</Label>
          </LinkMenu>
        ))}
      </List>
    </Container>
  );
};
