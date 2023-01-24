import { notifyError } from 'module/Toaster/Toaster';

const STATUS_ERROR = 400;
const ERROR_MESSAGES_1 = 'Email in use';
const ERROR_MESSAGES_2 = 'Login in use';

const defaultErrorMessage = message => notifyError(`ErrorText - ${message}`);
const existErrorMessage = (message, error, data) =>
  notifyError(`${message}! user with ${error}: ${data} already exists`, {
    autoClose: 15000,
  });

export const haveErrorsConflict = (message, status) => {
  const error = message.split(' ')[0].toLowerCase();

  const errorStatus = status === STATUS_ERROR;
  const errorMessage = message === ERROR_MESSAGES_1 || message === ERROR_MESSAGES_2;

  return errorStatus && errorMessage ? error : null;
};

export const createErrorMessage = ({ status, message, userData }) => {
  const error = haveErrorsConflict(message, status);

  error && existErrorMessage(message, error, userData[error]);
  !error && defaultErrorMessage(message);

  return error;
};
