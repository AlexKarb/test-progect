import { Input, Label } from './TextInput.styled';

export const TextInput = ({ label, name, placeholder, options }) => {
  return (
    <>
      {label && <Label> {label}</Label>}
      <Input name={name} placeholder={placeholder} $formController={options} />
    </>
  );
};
