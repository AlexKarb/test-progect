import { useState } from 'react';
import { isCompletedPage, isDeletedPage } from 'root/isPage';
import { changeStatus } from 'service/changeStatus';
import { ChangeModal } from '../ModalW/ChangeTypeModal';
import { RestoreModal } from '../ModalW/RestoreModal';
import { DoneIcon, IconContainer, IconInfo } from '../OptionsButton.styled';

export const CompletedButton = ({ id, onChange, type }) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentAction = 'completed';

  const changeType = () => onChange(changeStatus(id, currentAction));
  const handleClick = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <IconContainer disabled={isCompletedPage(type)} onClick={handleClick}>
        <DoneIcon type={isCompletedPage(type).toString()} />
        <IconInfo>Заявка виконана</IconInfo>
      </IconContainer>

      {isDeletedPage(type) ? (
        <RestoreModal
          changeType={changeType}
          modalIsOpen={isOpen}
          setIsOpen={onClose}
        />
      ) : (
        <ChangeModal
          changeType={changeType}
          modalIsOpen={isOpen}
          setIsOpen={onClose}
          currentAction={currentAction}
        />
      )}
    </>
  );
};
