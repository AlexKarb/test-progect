import { CheckBox, CheckBoxIcon, CheckBoxLabel } from './TypeHelp.styled';

export const CheckBoxItem = ({ type, label }) => (
  <CheckBoxLabel key={type}>
    <CheckBox type="checkbox" value={type} name="typeHelp" />
    <CheckBoxIcon />
    {label}
  </CheckBoxLabel>
);
