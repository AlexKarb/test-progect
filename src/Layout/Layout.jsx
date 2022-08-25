import { Header } from 'module/Header/Header';
import { Toast } from 'module/Toaster/Toast';
import { Outlet } from 'react-router-dom';
import { Wrap } from './Layout.styled';

const Layout = ({ sidebarOpen }) => {
  return (
    <Wrap>
      <Header openSideBar={sidebarOpen} />
      <Toast />
      <Outlet />
    </Wrap>
  );
};

export default Layout;

// import { LoginPage } from './components/LoginPage/LoginPage';
// const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
/* {!isLoggedIn && <LoginPage />} */
/* {isLoggedIn && (  */
