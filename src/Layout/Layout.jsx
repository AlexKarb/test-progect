import { Header } from 'module/Header/Header';
import { Toast } from 'module/Toaster/Toast';
import { Outlet } from 'react-router-dom';

// import { LoginPage } from './components/LoginPage/LoginPage';

const Layout = ({ sidebarOpen }) => {
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <>
      <Toast />
      <Header openSideBar={sidebarOpen} />
      {/* {!isLoggedIn && <LoginPage />} */}
      {/* {isLoggedIn && (  */}

      <Outlet />
    </>
  );
};

export default Layout;
