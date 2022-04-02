import { Label, LinkMenu } from './Navigation.styled';

export const ItemLink = ({ label, icon, path }) => {
  return (
    <LinkMenu to={path}>
      {icon}
      <Label> {label}</Label>
    </LinkMenu>
  );
};
