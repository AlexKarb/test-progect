export const createFieldError = (
  { setFieldValue, setFieldTouched, setFieldError },
  error
) => {
  setFieldValue('captcha', '');
  setFieldValue(error, '');
  setFieldTouched(error);
  setFieldError(error, 'not unique');
};
