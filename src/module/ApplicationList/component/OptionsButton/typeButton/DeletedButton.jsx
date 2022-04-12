import { useState } from 'react';
import { isDeletedPage } from 'root/isPage';
import { DeletedModal } from '../ModalW/DeletedModal';
import { DeleteIcon, IconContainer, IconInfo } from '../OptionsButton.styled';

export const DeletedButton = ({ type, onChange, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <IconContainer disabled={isDeletedPage(type)} onClick={handleClick}>
        <DeleteIcon type={isDeletedPage(type).toString()} />
        <IconInfo>Видалити</IconInfo>
      </IconContainer>

      <DeletedModal
        id={id}
        onChange={onChange}
        modalIsOpen={isOpen}
        setIsOpen={onClose}
      />
    </>
  );
};
