import { useState } from 'react';
import { isDeletedPage, isInProgressPage } from 'root/isPage';
import { changeStatus } from 'service/changeStatus';
import { ChangeTypeModal } from '../Modal/types/ChangeTypeModal';
import { RestoreModal } from '../Modal/types/RestoreModal';
import { IconContainer, IconInfo, WaitIcon } from '../OptionsButton.styled';

export const InProgressButton = ({ id, onChange, type }) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentAction = 'in progress';

  const changeType = () => onChange(changeStatus(id, currentAction));
  const handleClick = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <IconContainer onClick={handleClick}>
        <WaitIcon type={isInProgressPage(type).toString()} />
        <IconInfo>У роботі</IconInfo>
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
