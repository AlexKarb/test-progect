import Modal from 'react-modal';

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
    padding: 0,
    border: 'none',
    background: 'none',
  },
};

Modal.setAppElement('#root');

export function ModalW({ elements, children, onClose, open }) {
  return (
    <Modal
      isOpen={open}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
      overlayClassName="Overlay"
    >
      {elements}
      {children}
    </Modal>
  );
}
