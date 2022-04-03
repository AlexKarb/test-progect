import { dataItemMenu } from 'module/SideBar/service/dataItemMenu';
import { ItemLink } from './ItemLink';
import { List, Container } from './Navigation.styled';

export const Navigation = ({ toClose }) => {
  return (
    <Container>
      <List>
        {dataItemMenu.map(({ label, icon, path }) => (
          <ItemLink
            key={label}
            label={label}
            icon={icon}
            path={path}
            onClink={toClose}
          />
        ))}
      </List>
    </Container>
  );
};
