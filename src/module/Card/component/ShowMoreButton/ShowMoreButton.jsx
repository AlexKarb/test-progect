import { Button, DownLine } from './ShowMoreButton.styled';

export const ShowMoreButton = ({ onClick, isOpen }) => {
  return (
    <Button onClick={onClick}>
      <DownLine isopen={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'} /> Деталі
    </Button>
  );
};
