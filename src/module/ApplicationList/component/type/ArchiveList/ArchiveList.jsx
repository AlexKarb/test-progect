import { useLocation } from 'react-router-dom';
import {
  ArchiveLink,
  Container,
  DeleteIcon,
  DoneIcon,
} from './ArchiveList.styled';

export const ArchiveList = () => {
  let location = useLocation();
  console.log('~ location', location);

  return (
    <Container>
      <ArchiveLink to="/archive/completed" state={{ from: location }}>
        <DeleteIcon />
        Виконані
      </ArchiveLink>

      <ArchiveLink to="/archive/deleted" state={{ from: location }}>
        <DoneIcon />
        Видалені
      </ArchiveLink>
    </Container>
  );
};
