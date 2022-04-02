import { Navigation } from '../Navigation/Navigation';
import { SideBarFutter } from '../SideBarFutter/SideBarFutter';
import { UserInfo } from '../UserInfo/UserInfo';
import { Container, Wrapper } from './SideBar.styled';

export const SideBar = () => {
  return (
    <Wrapper>
      <Container>
        <UserInfo />
        <Navigation />

        {/* <CloseButton />

     

    
      

       */}
      </Container>
      <SideBarFutter />
    </Wrapper>
  );
};
