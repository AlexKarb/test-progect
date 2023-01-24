import { Button, Icon } from './GoBackBtn.styled';

export const GoBackBtn = ({ onClick }) => (
  <Button onClick={onClick} type="button">
    <Icon />
  </Button>
);
