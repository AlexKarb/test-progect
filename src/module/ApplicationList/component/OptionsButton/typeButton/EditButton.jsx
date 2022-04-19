import { useState } from 'react';
import { EditModal } from '../Modal/types/EditModal';
import { EditIcon, IconContainer, IconInfo } from '../OptionsButton.styled';

export const EditButton = ({ id, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <IconContainer onClick={handleClick}>
        <EditIcon />
        <IconInfo>Редагувати</IconInfo>
      </IconContainer>

      <EditModal
        id={id}
        modalIsOpen={isOpen}
        setIsOpen={onClose}
        onChange={onChange}
      />
    </>
  );
};
