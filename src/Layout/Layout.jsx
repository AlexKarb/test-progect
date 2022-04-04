import { SideBarElement } from 'module/SideBar/component';
import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
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
