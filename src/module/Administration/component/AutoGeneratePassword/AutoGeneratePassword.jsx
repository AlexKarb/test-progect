import { AutoGenerate } from './AutoGeneratePassword.styled';
import generator from 'generate-password-browser';

export const AutoGeneratePassword = ({ functionSetPassword }) => (
  <>
    <AutoGenerate
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
