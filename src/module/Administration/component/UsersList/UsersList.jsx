import { NoFound } from 'module/Utils/NoFound/NoFound';
import { UserItem } from './components/UserItem/UserItem';
import { Container, List, Title, Content } from './UsersList.styled';

export const UsersList = ({ users }) => {
  const haventUsers = !users || users.length <= 0;

  return (
    <Container>
      <List>
        <Title margin={haventUsers}>Діючі аккаунти користувачів</Title>
        <Content>
          {!haventUsers && users.map(user => <UserItem user={user} key={user._id} />)}
          {haventUsers && <NoFound text={'лист порожній'} />}
        </Content>
      </List>
    </Container>
  );
};
