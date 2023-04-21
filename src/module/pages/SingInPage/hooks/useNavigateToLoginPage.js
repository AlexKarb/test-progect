import { useNavigate } from 'react-router-dom';

export const useNavigateToLoginPage = () => {
  let navigate = useNavigate();

  const navigateToLoginPage = () => navigate('/login', { replace: true });

  return navigateToLoginPage;
};
