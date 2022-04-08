import { IconPending, IconContainer, IconInfo } from '../OptionsButton.styled';

export const PendingButton = ({ id, onClick, type }) => (
  <IconContainer
    onClick={() =>
      onClick({
        id,
        data: { status: 'pending' },
      })
    }
  >
    <IconPending type={type} />
    <IconInfo>Активні</IconInfo>
  </IconContainer>
);
