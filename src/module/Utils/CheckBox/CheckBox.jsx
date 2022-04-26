import { CheckBoxIcon, CheckBoxLabel, Input } from './CheckBox.styled';

export const CheckBox = ({
  value,
  label,
  name,
  onClick,
  theme = 'dark',
  width,
}) => (
  <CheckBoxLabel width={width}>
    <Input type="checkbox" value={value} name={name} onClick={onClick} />
    <CheckBoxIcon theme={theme} />
    {label}
  </CheckBoxLabel>
);
