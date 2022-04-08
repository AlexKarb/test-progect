import { DoneIcon, IconContainer, IconInfo } from '../OptionsButton.styled';

export const CompletedButton = ({ id, onClick, type }) => (
  <IconContainer
    onClick={() =>
      onClick({
        id,
        data: { status: 'completed' },
      })
    }
  >
    <DoneIcon type={type} />
    <IconInfo>Заявка виконана</IconInfo>
  </IconContainer>
);
