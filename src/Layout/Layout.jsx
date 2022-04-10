import { SideBarElement } from 'module/SideBar/component';
import { Toast } from 'module/Toaster/Toaster';
import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
// import { LoginPage } from './components/LoginPage/LoginPage';

import { MainContainer } from './Layout.styled';

export const Layout = () => {
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <Toast />
      {/* {!isLoggedIn && <LoginPage />}
      {isLoggedIn && ( */}
      <>
        <SideBarElement>
          <MainContainer>
            <Outlet context={[modalIsOpen, setIsOpen]} />
          </MainContainer>
        </SideBarElement>
      </>
    </>
  );
};

export default Layout;
