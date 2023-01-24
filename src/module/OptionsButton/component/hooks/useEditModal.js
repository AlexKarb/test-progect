import { useToggleModal } from 'module/Modal/hooks/useToggleModal';
import { useState } from 'react';
import { Request } from 'service/redux/api';

export const useEditModal = id => {
  const [isOpen, onOpen, onClose] = useToggleModal();
  const [data, setData] = useState();
  const [getById] = Request.getById();
  const [update, { isLoading }] = Request.update();

  const openModal = async () => {
    onOpen();
    const { data: result } = await getById(id);
    if (result.data) setData(result.data);
  };

  const closeModal = () => onClose(false);

  const editRequestCard = async data => {
    const res = await update(data);
    if (!res.data) return;
    if (!isLoading) closeModal();
  };

  return [openModal, closeModal, isOpen, data, editRequestCard, isLoading];
};
