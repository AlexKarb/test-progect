import { useSelector } from 'react-redux';
import { getRoleValue, getLoginValue } from 'redux/authSlice';
import { Container, UserName, Role, InfoContainer } from './UserInfo.styled';
import { UserPhoto } from './UserPhoto';

export const UserInfo = () => {
  const role = useSelector(getRoleValue);
  const login = useSelector(getLoginValue);
  return (
    <Container>
      <UserPhoto role={role} />
      <InfoContainer>
        <UserName>{login}</UserName>
        <Role>{role}</Role>
      </InfoContainer>
    </Container>
  );
};
