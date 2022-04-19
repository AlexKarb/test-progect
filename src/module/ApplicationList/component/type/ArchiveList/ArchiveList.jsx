import { useLocation } from 'react-router-dom';
import {
  ArchiveLink,
  Container,
  DeleteIcon,
  DoneIcon,
} from './ArchiveList.styled';

export const ArchiveList = () => {
  let location = useLocation();

  return (
    <Container>
      <ArchiveLink to="/archive/completed" state={{ from: location }}>
        <DoneIcon />
        Виконані
      </ArchiveLink>

      <ArchiveLink to="/archive/deleted" state={{ from: location }}>
        <DeleteIcon />
        Видалені
      </ArchiveLink>
    </Container>
  );
};
