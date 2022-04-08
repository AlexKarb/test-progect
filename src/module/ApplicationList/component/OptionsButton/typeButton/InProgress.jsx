import { IconContainer, IconInfo, WaitIcon } from '../OptionsButton.styled';

export const InProgressButton = ({ id, onClick, type }) => (
  <IconContainer
    onClick={() =>
      onClick({
        id,
        data: { status: 'in progress' },
      })
    }
  >
    <WaitIcon type={type} />
    <IconInfo>У роботі</IconInfo>
  </IconContainer>
);
