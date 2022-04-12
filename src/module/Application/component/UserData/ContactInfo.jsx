import { Input, Label, LabelText } from './UserData.styled';

export const ContactsInfo = ({ info }) => {
  const { label, typeBox, required, name, placeholder } = info;

  return (
    <Label>
      <LabelText> {label}</LabelText>
      <Input
        type={typeBox}
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete={'off'}
      />
    </Label>
  );
};
