import { useSelector } from 'react-redux';
import { getRoleValue, getLoginValue } from 'service/redux/auth/authSlice';
import { Container, UserName, Role } from './UserInfo.styled';

export const UserInfo = () => {
  const role = useSelector(getRoleValue);
  const login = useSelector(getLoginValue);
  return (
    <Container>
      <UserName>{login}</UserName>
      <Role>{role}</Role>
    </Container>
  );
};
