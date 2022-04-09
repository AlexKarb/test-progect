import { useState } from 'react';
import { EditModal } from '../ModalW/EditModal';
import { EditIcon, IconContainer, IconInfo } from '../OptionsButton.styled';

export const EditButton = ({ id, onChange }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(true);

  return (
    <>
      <IconContainer onClick={handleClick}>
        <EditIcon />
        <IconInfo>Редагувати</IconInfo>
      </IconContainer>

      <EditModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        onChange={onChange}
      />
    </>
  );
};
