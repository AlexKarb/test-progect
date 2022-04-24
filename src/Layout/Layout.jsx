import { SideBarElement } from 'module/SideBar/component';
import { Toast } from 'module/Toaster/Toaster';
import { useState } from 'react';

import { Outlet } from 'react-router-dom';
// import { LoginPage } from './components/LoginPage/LoginPage';

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
          <Outlet context={[modalIsOpen, setIsOpen]} />
        </SideBarElement>
      </>
    </>
  );
};

export default Layout;
