import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const ToastWrapper = styled(ToastContainer)`
  &&&.Toastify__toast-container {
    width: 300px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 115px;
  }

  .Toastify__toast-theme--light {
    background-color: #6a93ff;
    color: white;
  }

  .Toastify__toast-icon {
    svg {
      fill: white;
    }
  }
`;
