import { Button, DownLine } from './MoreInfo.styled';

export const OpenMoreInfoButton = ({ onClick, isOpen }) => {
  return (
    <Button onClick={onClick}>
      <DownLine isopen={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'} /> Деталі
    </Button>
  );
};
