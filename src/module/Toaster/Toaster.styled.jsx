import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const ToastWrapper = styled(ToastContainer)`
  &&&.Toastify__toast-container {
    width: 300px;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);

    margin: 0 auto;
    margin-top: 30px;

    @media screen and (min-width: 768px) {
      width: 400px;
    }

    @media screen and (min-width: 1024px) {
      right: calc((100% - 230px) / 2);
      left: calc((100% - 170px) / 2);

      transform: none;
    }
  }

  .Toastify__toast {
    margin-bottom: 10px;
    padding: 15px 10px;

    @media screen and (min-width: 768px) {
      margin-bottom: 20px;
      padding: 15px;
      font-size: 16px;
      text-align: center;
    }

    @media screen and (min-width: 1024px) {
      padding: 25px;
    }
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
