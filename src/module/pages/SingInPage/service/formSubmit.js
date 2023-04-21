import { notifyChange } from 'module/Toaster/Toaster';
import { createErrorMessage } from 'service/helpers';
import { createFieldError, useNavigateToLoginPage } from '../hooks';

const SUCCESS_STATUS = 201;

export const useFormSubmit = () => {
  const navigateToLoginPage = useNavigateToLoginPage();

  const formSubmit = async ({ userData, addOrganisation, optionForm }) => {
    const { name, email, password, login } = userData;
    await addOrganisation({ name, email, password, login })
      .then(result => {
        if (result?.error) {
          const message = result.error.data.message;
          const status = result.error.status;

          const customError = createErrorMessage({ status, message, userData });
          createFieldError(optionForm, customError);
        }

        if (result?.data?.status === SUCCESS_STATUS) {
          notifyChange('Регестрація успішна!', { autoClose: 12000 });
          navigateToLoginPage();
        }
      })
      .catch(e => console.log(e));
  };
  return formSubmit;
};
