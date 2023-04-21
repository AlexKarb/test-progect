import { dataItemMenu } from 'module/SideBar/service/dataItemMenu';
import { useSelector } from 'react-redux';
import { getRoleValue } from 'service/redux/auth/authSlice';
import { IconAdmin } from '../Icon/Icon';
import {
  List,
  Container,
  LinkMenu,
  IconContainer,
  Label,
  Button,
} from './NavigationList.styled';

export const Navigation = ({ toClose }) => {
  const userRole = useSelector(getRoleValue);

  return (
    <Container>
      <List>
        {dataItemMenu.map(({ label, icon, path }) => (
          <Button key={label}>
            <LinkMenu to={path} onClick={toClose}>
              <IconContainer> {icon}</IconContainer>
              <Label> {label}</Label>
            </LinkMenu>
          </Button>
        ))}

        {userRole === 'admin' && (
          <Button key={'Адміністрування'}>
            <LinkMenu to={'/administration'} onClick={toClose}>
              <IconContainer>
                <IconAdmin />
              </IconContainer>
              <Label> {'Адміністрування'}</Label>
            </LinkMenu>
          </Button>
        )}
      </List>
    </Container>
  );
};
