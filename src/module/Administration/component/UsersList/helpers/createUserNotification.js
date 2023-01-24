import { notifyError, notifySuccess } from 'module/Toaster/Toaster';

const MAX_ACC =
  "You Already Have the Maximum Number of Accounts Active (Can't Add Account)";
const MATCH_ACC = 'Login in use';

export const createUserNotification = (result, login) => {
  const name = login.toUpperCase();
  const isSuccess = result?.data?.status === 201;
  const isError = result?.error?.data;

  if (isSuccess) {
    notifySuccess(`Створено нового користувача ${name}`);
    return;
  }

  if (isError?.message === MATCH_ACC) {
    notifyError(`Користувач ${name} все існує`);
    return;
  } else if (isError?.message === MAX_ACC) {
    notifyError(
      `Досягнута максимальна к-сть акаунтів у безкоштовній версії. Для отримання більше можливостей оберіть підписку PRO. `
    );
  } else {
    notifyError('Запит відхилено! Спробуйте пізніше');
    return;
  }
};
