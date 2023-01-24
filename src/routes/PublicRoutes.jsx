import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedInValue } from 'service/redux/auth/authSlice';

export const PublicRoutes = ({ element }) => {
  const isLoggin = useSelector(getIsLoggedInValue);

  return <>{isLoggin ? <Navigate to="/" replace={true} /> : element}</>;
};
