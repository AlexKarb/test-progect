import { useEffect, useState } from 'react';
import { getPublicationById } from 'service/api-service';

export const useValueEditModal = (id, modalIsOpen) => {
  const [values, setValues] = useState();

  useEffect(() => {
    if (modalIsOpen) {
      getPublicationById(id).then(setValues).catch(console.log);
    }
  }, [id, modalIsOpen]);

  return [values, setValues];
};
