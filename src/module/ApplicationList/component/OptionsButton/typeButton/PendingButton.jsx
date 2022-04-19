import { useState } from 'react';
import { isDeletedPage, isPendingPage } from 'root/isPage';
import { changeStatus } from 'service/changeStatus';
import { ChangeTypeModal } from '../Modal/types/ChangeTypeModal';
import { RestoreModal } from '../Modal/types/RestoreModal';
import { IconPending, IconContainer, IconInfo } from '../OptionsButton.styled';

export const PendingButton = ({ id, onChange, type }) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentAction = 'pending';

  const changeType = () => onChange(changeStatus(id, currentAction));
  const handleClick = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <IconContainer disabled={isPendingPage(type)} onClick={handleClick}>
        <IconPending type={isPendingPage(type).toString()} />
        <IconInfo>Активні</IconInfo>
      </IconContainer>

      {isDeletedPage(type) ? (
        <RestoreModal
          changeType={changeType}
          modalIsOpen={isOpen}
          setIsOpen={onClose}
          action={'change'}
        />
      ) : (
        <ChangeTypeModal
          changeType={changeType}
          modalIsOpen={isOpen}
          setIsOpen={onClose}
          currentAction={currentAction}
          action={'change'}
        />
      )}
    </>
  );
};
