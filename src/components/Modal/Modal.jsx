import Modal from 'react-modal';
import { Container } from './Modal.styled';
import { CloseButton } from './Modal.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'unset',
  },
};

Modal.setAppElement('#root');

export function ModalW({ elements, onClose, open }) {
  return (
    <Container>
      <Modal
        isOpen={open}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <CloseButton onClick={onClose}>Закрити</CloseButton>
        {elements}
      </Modal>
    </Container>
  );
}
