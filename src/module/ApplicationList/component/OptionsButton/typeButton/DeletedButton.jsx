import { useState } from 'react';
import { isDeletedPage } from 'root/isPage';
import { changeStatus } from 'service/changeStatus';
import { DeletedModal } from '../Modal/types/DeletedModal';
import { DeleteIcon, IconContainer, IconInfo } from '../OptionsButton.styled';

export const DeletedButton = ({ type, onChange, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentAction = 'deleted';

  const handleClick = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const changeType = () => onChange(changeStatus(id, currentAction));

  return (
    <>
      <IconContainer disabled={isDeletedPage(type)} onClick={handleClick}>
        <DeleteIcon type={isDeletedPage(type).toString()} />
        <IconInfo>Видалити</IconInfo>
      </IconContainer>

      <DeletedModal
        id={id}
        onChange={changeType}
        modalIsOpen={isOpen}
        setIsOpen={onClose}
        action={currentAction}
      />
    </>
  );
};
