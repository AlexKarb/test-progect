// import { Suspense } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import Header from './Header/Header';
import { LoginPage } from './LoginPage/LoginPage';
import { Toast } from './Toaster/Toaster';
// import { ModalW } from './Modal/Modal';

export const Layout = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <Toast />
      {!isLoggedIn && <LoginPage />}
      {isLoggedIn && (
        <>
          <Header />
          <main>
            <Outlet context={[modalIsOpen, setIsOpen]} />
          </main>
        </>
      )}
    </>
  );
};

export default Layout;

// {
//   /* <button onClick={openModal}>відкрити</button> */
// }
// {
//   /* <ModalW
//         onClose={() => setIsOpen(false)}
//         elements={<>Modal</>}
//         open={modalIsOpen}
//       /> */
// }

// {
//   /* <Suspense fallback={''}> */
// }

// {
//   /* </Suspense> */
// }
