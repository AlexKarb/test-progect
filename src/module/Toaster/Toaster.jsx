import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const config = {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const notifyError = () =>
  toast.error(' Неправильно введений логін або пароль. 🤥', config);

export const notifySuccess = (name, role) =>
  toast.success(`Вітаю, ${name}! Гарної роботи! Ваша роль: ${role}`, config);

export const notifyChange = text => toast.info(text, config);
