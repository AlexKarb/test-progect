import { ApplicationList } from 'module/ApplicationList';
import { MainContainerWithoutBg } from 'module/Utils/MainContainer/MainContainer';
import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import { ArchiveLink, Container, DeleteIcon, DoneIcon, Text } from './ArchiveList.styled';

const ArchiveList = () => {
  const [type, setType] = useState('completed');
  let location = useLocation();

  useEffect(() => {
    const locationPath = location.pathname.toString().split('/');
    const currentLocationPath = locationPath[locationPath.length - 1];

    setType(currentLocationPath);
  }, [location.pathname]);

  return (
    <MainContainerWithoutBg>
      <Container active={type === 'completed'}>
        <ArchiveLink
          to="/archive/completed"
          state={{ from: location }}
          active={type === 'completed' ? 1 : 0}
        >
          <DoneIcon />
          <Text>Виконані</Text>
        </ArchiveLink>
        <ArchiveLink
          to="/archive/deleted"
          state={{ from: location }}
          active={type === 'deleted' ? 1 : 0}
        >
          <DeleteIcon />
          <Text>Видалені</Text>
        </ArchiveLink>
      </Container>

      <ApplicationList type={type} />
    </MainContainerWithoutBg>
  );
};

export default ArchiveList;
