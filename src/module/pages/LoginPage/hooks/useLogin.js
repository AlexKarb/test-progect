import { useLoginUserMutation } from 'service/redux/api';
import { useNavigate } from 'react-router-dom';
import { notifyError, notifySuccess } from 'module/Toaster/Toaster';

export const useLogin = () => {
  let navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();

  const logining = async ({ login, password }) => {
    const result = await loginUser({ login, password });

    if (result.error) {
      notifyError(result.error.data?.message || result.error.error);
      return result.error;
    }

    if (result.data) {
      notifySuccess(login, result.payload.data.user.type);
      navigate('/', { replace: true });
      return result;
    }
  };

  return [logining];
};
