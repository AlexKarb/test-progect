import { ButtonShowPass } from 'module/Utils/ButtonShowPass/ButtonShowPass';
import { InputErrorMessage, InputWrapp, InputStyled } from './Input.styled';

export const Input = ({
  name,
  placeholder = '',
  type = 'text',
  touched,
  errors,
  state,
}) => (
  <InputWrapp>
    <InputStyled type={type} name={name} placeholder={placeholder} autoComplete="off" />

    {state && <ButtonShowPass state={state} />}
    {touched[name] && errors[name] && (
      <InputErrorMessage>{errors[name]}</InputErrorMessage>
    )}
  </InputWrapp>
);
