export const changeStatus = (id, status) => {
  return {
    id,
    data: { status },
  };
};
