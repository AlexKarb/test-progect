import { AutoGenerate } from './AutoGeneratePassword.styled';
import generator from 'generate-password-browser';

export const AutoGeneratePassword = ({ functionSetPassword, color }) => (
  <>
    <AutoGenerate
      color={color}
      onClick={() => {
        functionSetPassword(
          generator.generate({
            length: 8,
            numbers: true,
          })
        );
      }}
    />
  </>
);
