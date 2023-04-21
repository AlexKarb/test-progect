import { styleForValidInput } from '../../hooks';
import { InputWrapp, SInput, Sub } from '../../SingInPage.styled';

export const Input = ({
  type = 'text',
  name = '',
  subscription = '',
  formController = { errors: {}, touched: null },
  isSubmitting,
}) => {
  const errors = formController.errors[name];
  const touched = formController.touched[name];

  const styleForValid = styleForValidInput({ touched, errors, isSubmitting });

  return (
    <InputWrapp>
      <SInput type={type} name={name} valid={styleForValid} />
      <Sub>{subscription}</Sub>
    </InputWrapp>
  );
};
