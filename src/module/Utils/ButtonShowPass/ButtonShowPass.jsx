import { ButtonShowPassword } from './ButtonShowPass.styled';

export const ButtonShowPass = ({ state }) => {
  const { showPassword, setShowPassword } = state;

  return (
    <ButtonShowPassword
      $activetype={showPassword}
      onClick={() => setShowPassword(!showPassword)}
    />
  );
};
