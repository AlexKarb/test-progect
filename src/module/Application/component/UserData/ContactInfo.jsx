import { Input, Label } from './UserData.styled';

export const ContactsInfo = ({ info }) => {
  const { label, typeBox, required, name, placeholder } = info;

  return (
    <Label>
      {label}
      <Input
        type={typeBox}
        name={name}
        required={required}
        placeholder={placeholder}
      />
    </Label>
  );
};
