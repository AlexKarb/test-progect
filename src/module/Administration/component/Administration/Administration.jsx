import { useUsersController } from 'module/Administration/hooks/useUsersController';
import { MainContainerWithoutBg } from 'module/Utils/MainContainer/MainContainer';
import { useGetAllUserQuery } from 'service/redux/api';
import { StatisticsPart } from '../StatisticsPart';
import { UserRegistration } from '../UserRegistration';
import { UsersList } from '../UsersList/UsersList';
import { Container, Wrapper } from './Administration.styled';

export const Administration = ({ jogsEfectivity = '100', usersAccounts = '0' }) => {
  const [usersController] = useUsersController(); // test
  const { data: users } = useGetAllUserQuery();

  return (
    <MainContainerWithoutBg>
      {users?.data && (
        <Container>
          <StatisticsPart
            jogsEfectivity={jogsEfectivity}
            usersAccounts={users?.data.length}
          />
          <Wrapper>
            <UsersList users={users?.data} />
            <UserRegistration controller={usersController} />
          </Wrapper>
        </Container>
      )}
    </MainContainerWithoutBg>
  );
};
