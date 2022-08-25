import { MainContainer } from 'module/Utils/MainContainer/MainContainer';
import { useLocation } from 'react-router-dom';
import {
  ArchiveLink,
  Container,
  DeleteIcon,
  DoneIcon,
} from './ArchiveList.styled';

const ArchiveList = () => {
  let location = useLocation();

  return (
    <MainContainer>
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
    </MainContainer>
  );
};

export default ArchiveList;
