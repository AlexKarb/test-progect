import { useState, useEffect } from 'react';
import { Request } from 'service/redux/api';

export const useEditRequest = id => {
  const [data, setData] = useState();

  const [getById, { isLoading: isLoadingGetById }] = Request.getById();
  const [update, { isLoading: isLoadingUpdate }] = Request.update();

  const openModal = async onOpen => {
    onOpen();
    const result = await getById(id);

    setData(result?.data?.data);
  };

  const editRequest = async val => {
    const res = await update(val);

    if (res) setData(res.data);
  };

  useEffect(() => {
    const initialValues = async () => {
      const result = await getById(id);

      setData(result?.data?.data);
    };

    initialValues();
  }, [getById, id]);

  return {
    openModal,
    isLoading: isLoadingGetById || isLoadingUpdate,
    data,
    editRequest,
  };
};
