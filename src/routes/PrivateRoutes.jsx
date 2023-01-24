import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedInValue } from 'service/redux/auth/authSlice';

export const PrivateRoutes = ({ element }) => {
  const isLoggin = useSelector(getIsLoggedInValue);

  return <>{isLoggin ? element : <Navigate to="/login" replace={true} />}</>;
};
