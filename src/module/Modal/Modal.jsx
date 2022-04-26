import Modal from 'react-modal';
import { customStyles } from './Modal.styled';

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
