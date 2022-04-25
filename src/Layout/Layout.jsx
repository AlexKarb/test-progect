import { SideBarElement } from 'module/SideBar/component';
import { Toast } from 'module/Toaster/Toaster';
import { Outlet } from 'react-router-dom';
// import { LoginPage } from './components/LoginPage/LoginPage';

const Layout = () => {
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <>
      <>
        <Toast />
        {/* {!isLoggedIn && <LoginPage />} */}
        {/* {isLoggedIn && (  */}
        <>
          <SideBarElement>
            <Outlet />
          </SideBarElement>
        </>
      </>
    </>
  );
};

export default Layout;
