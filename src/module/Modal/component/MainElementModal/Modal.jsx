import Modal from 'react-modal';
import { customStyles } from './Modal.styled';

Modal.setAppElement('#root');

export const ModalW = ({ elements, children, onClose, open }) => (
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
