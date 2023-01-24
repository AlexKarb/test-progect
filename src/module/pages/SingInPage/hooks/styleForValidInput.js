export const styleForValidInput = ({ touched, errors, isSubmitting }) => {
  const trueColor = '1.5px solid #00ff35';
  const falseColor = '0.5px solid #ff0000';
  const styleNone = 'none';

  if (!isSubmitting) {
    const valid = touched && !errors && trueColor;
    const inValid = touched && errors && falseColor;
    return valid || inValid || styleNone;
  }

  if (isSubmitting) {
    return errors ? falseColor : trueColor;
  }
};
