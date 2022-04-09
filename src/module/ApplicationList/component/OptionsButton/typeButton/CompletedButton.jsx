import { useState } from 'react';
import { changeStatus } from 'service/changeStatus';
import { ChangeModal } from '../ModalW/ChangeTypeModal';
import { RestoreModal } from '../ModalW/RestoreModal';
import { DoneIcon, IconContainer, IconInfo } from '../OptionsButton.styled';

export const CompletedButton = ({ id, onChange, type }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const currentAction = 'completed';
  const currentPage = type === currentAction;
  const isDeletedPage = type === 'deleted';

  const changeType = () => onChange(changeStatus(id, currentAction));
  const handleClick = () => setIsOpen(true);

  return (
    <>
      <IconContainer disabled={currentPage} onClick={handleClick}>
        <DoneIcon type={currentPage.toString()} />
        <IconInfo>Заявка виконана</IconInfo>
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
