import { ToastWrapper } from './Toaster.styled';

export const Toast = () => (
  <ToastWrapper
    position="top-right"
    autoClose={2000}
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
);
