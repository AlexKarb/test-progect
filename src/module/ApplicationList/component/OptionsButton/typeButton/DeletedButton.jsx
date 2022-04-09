import { useState } from 'react';
import { DeletedModal } from '../ModalW/DeletedModal';
import { DeleteIcon, IconContainer, IconInfo } from '../OptionsButton.styled';

export const DeletedButton = ({ type, onChange, id }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const isDeleted = type === 'deleted';

  return (
    <>
      <IconContainer disabled={isDeleted} onClick={() => setIsOpen(true)}>
        <DeleteIcon type={isDeleted.toString()} />
        <IconInfo>Видалити</IconInfo>
      </IconContainer>

      <DeletedModal
        id={id}
        onChange={onChange}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};
