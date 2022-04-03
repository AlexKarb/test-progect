import { Header } from 'module/Header/Header';
import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
// import Header from './components/Header/Header';
// import { LoginPage } from './components/LoginPage/LoginPage';
import { Toast } from '../components/Toaster/Toaster';
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
        <Header />
        <MainContainer>
          <Outlet context={[modalIsOpen, setIsOpen]} />
        </MainContainer>
      </>
    </>
  );
};

export default Layout;

//  {
//    /* {<button onClick={setIsOpen}>відкрити</button>}
//     {
//       <ModalW
//         onClose={() => setIsOpen(false)}
//         elements={<SideBar />}
//         open={modalIsOpen}
//       />
//     } */
//  }
