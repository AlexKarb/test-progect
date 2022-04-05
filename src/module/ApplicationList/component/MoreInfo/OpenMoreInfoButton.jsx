import { Button, DownLine } from './MoreInfo.styled';

export const OpenMoreInfoButton = ({ onClick, isClick }) => {
  return (
    <Button onClick={onClick}>
      <DownLine /> Деталі
    </Button>
  );
};
