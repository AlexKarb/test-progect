import { Icon } from '../Icon/Icon';
import { Container, Info } from './Button.styled';

export const Button = ({ onClick, currentPage, currentAction, data, text }) => {
  return (
    <>
      <Container disabled={currentPage} onClick={onClick}>
        <Icon
          styleIcon={currentAction}
          currentPage={currentPage?.toString()}
          data={data}
        />
        <Info>{text}</Info>
      </Container>
    </>
  );
};
