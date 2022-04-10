import { useState } from 'react';
import { changeStatus } from 'service/changeStatus';
import { ChangeModal } from '../ModalW/ChangeTypeModal';
import { RestoreModal } from '../ModalW/RestoreModal';
import { IconPending, IconContainer, IconInfo } from '../OptionsButton.styled';

export const PendingButton = ({ id, onChange, type }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const currentAction = 'pending';
  const currentPage = type === currentAction;
  const isDeletedPage = type === 'deleted';

  const changeType = () => {
    onChange(changeStatus(id, currentAction));
  };
  const handleClick = () => setIsOpen(true);

  return (
    <>
      <IconContainer disabled={currentPage} onClick={handleClick}>
        <IconPending type={currentPage.toString()} />
        <IconInfo>Активні</IconInfo>
      </IconContainer>

      {isDeletedPage ? (
        <RestoreModal
          changeType={changeType}
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
        />
      ) : (
        <ChangeModal
          changeType={changeType}
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          currentAction={currentAction}
        />
      )}
    </>
  );
};
