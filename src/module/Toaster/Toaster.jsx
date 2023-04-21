import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const config = {
  position: 'top-center',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const TEXT_ERROR_LOGIN_OR_PASS = 'Email or password is wrong';
const TEXT_ERROR_NO_INTERNET = 'TypeError: Failed to fetch';

export const notifyError = (text = '', options) => {
  const optionClose = { autoClose: options?.autoClose || 2000 };
  const customTextErrorLogin = 'Неправильно введений логін або пароль. 🤥';
  const customTextNoInternet = 'Відсутній інтернет 😥  ';

  switch (text) {
    case TEXT_ERROR_NO_INTERNET:
      toast.error(customTextNoInternet, { ...config, optionClose });
      break;

    case TEXT_ERROR_LOGIN_OR_PASS:
      toast.error(customTextErrorLogin, { ...config, optionClose });
      break;

    case text:
      toast.error(text, { ...config, optionClose });
      break;

    default:
      console.log('error! function havent text error');
      break;
  }
};

export const notifySuccess = (text, name, role) => {
  if (name && role)
    toast.success(`Вітаю, ${name}! Гарної роботи! Ваша роль: ${role}`, config);
  if (text) toast.success(text, config);
};

export const notifyChange = (text, options = { autoClose: 2000 }) => {
  const defaultClose = options.autoClose;
  toast.info(text, { ...config, defaultClose });
};
