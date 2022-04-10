import { useState } from 'react';
import { changeStatus } from 'service/changeStatus';
import { ChangeModal } from '../ModalW/ChangeTypeModal';
import { RestoreModal } from '../ModalW/RestoreModal';
import { IconContainer, IconInfo, WaitIcon } from '../OptionsButton.styled';

export const InProgressButton = ({ id, onChange, type }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const currentAction = 'in progress';
  const currentPage = type === currentAction;
  const isDeletedPage = type === 'deleted';

  const changeType = () => onChange(changeStatus(id, currentAction));
  const handleClick = () => setIsOpen(true);

  return (
    <>
      <IconContainer disabled={currentPage} onClick={handleClick}>
        <WaitIcon type={currentPage.toString()} />
        <IconInfo>У роботі</IconInfo>

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
      </IconContainer>
    </>
  );
};
