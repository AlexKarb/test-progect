import { Button, DownLine } from './goDownButton.styled';

export const GoDownButton = ({ onClick }) => {
  return (
    <>
      <Button onClick={onClick}>
        <DownLine />
      </Button>
    </>
  );
};
