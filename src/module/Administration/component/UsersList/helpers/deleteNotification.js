import { notifyError, notifySuccess } from 'module/Toaster/Toaster';

const IS_ADMIN_ACC = "No access. Can't delete ADMIN account";

export const deleteNotification = (result, user) => {
  const isSuccess = result?.data?.status === 200;
  const isError = result?.error;

  if (isSuccess) notifySuccess(`Користувача ${user.login.toUpperCase()} видалено!`);

  if (isError && isError?.data?.message === IS_ADMIN_ACC) {
    notifyError('Неможливо видалити акаунт типу АДМІН');
  } else if (isError) {
    notifyError('Спроба відхилена! Повторіть пізніше!');
  }
};
