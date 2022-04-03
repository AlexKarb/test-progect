import { Label, LinkMenu } from './Navigation.styled';

export const ItemLink = ({ label, icon, path, onClink }) => {
  return (
    <LinkMenu to={path} onClick={onClink}>
      {icon}
      <Label> {label}</Label>
    </LinkMenu>
  );
};
