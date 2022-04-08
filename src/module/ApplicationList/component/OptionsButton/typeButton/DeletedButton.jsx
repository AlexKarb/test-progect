import { DeleteIcon, IconContainer, IconInfo } from '../OptionsButton.styled';

export const DeletedButton = ({ id, onClick, type }) => (
  <IconContainer
    onClick={() =>
      onClick({
        id,
        data: { status: 'deleted' },
      })
    }
  >
    <DeleteIcon type={type} />
    <IconInfo>Видалити</IconInfo>
  </IconContainer>
);
