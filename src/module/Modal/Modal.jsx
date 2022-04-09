import Modal from 'react-modal';
import { CloseButton, MainContainer } from './Modal.styled';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     overflow: 'unset',
//   },
// };

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'auto',
    maxHeight: 'calc(100vh - 60px)',
    maxWidth: 'calc(100vw - 30px)',
  },
};

Modal.setAppElement('#root');

export function ModalW({ elements, children, onClose, open }) {
  return (
    <MainContainer>
      <Modal
        isOpen={open}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <CloseButton onClick={onClose}>Закрити</CloseButton>
        {elements}
        {children}
      </Modal>
    </MainContainer>
  );
}
