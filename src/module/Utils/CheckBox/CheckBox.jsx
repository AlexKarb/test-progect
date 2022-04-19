import { CheckBoxIcon, CheckBoxLabel, Input } from './CheckBox.styled';

export const CheckBox = ({ value, label, name, onClick, theame = 'dark' }) => (
  <CheckBoxLabel>
    <Input type="checkbox" value={value} name={name} onClick={onClick} />
    <CheckBoxIcon theame={theame} />
    {label}
  </CheckBoxLabel>
);
