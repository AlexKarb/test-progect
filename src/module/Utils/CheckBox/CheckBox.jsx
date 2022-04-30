import { CheckBoxIcon, CheckBoxLabel, Input } from './CheckBox.styled';

export const CheckBox = ({
  value,
  label,
  name,
  onClick,
  theme = 'dark',
  width,
  type,
}) => (
  <CheckBoxLabel width={width} type={type}>
    <Input type="checkbox" value={value} name={name} onClick={onClick} />
    <CheckBoxIcon theme={theme} type={type} />
    {label}
  </CheckBoxLabel>
);
