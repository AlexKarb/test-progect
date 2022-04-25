import { Button, PlusIcon } from './CreateButton.styled';
import { useNavigate } from 'react-router-dom';

export const CreateButton = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(`/create-help`)}>
      <PlusIcon />
      Створити заявку
    </Button>
  );
};
