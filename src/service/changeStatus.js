export const changeStatus = (id, status) => {
  switch (status) {
    case 'in progress':
      return {
        id,
        data: { status, dataInProgress: new Date() },
      };

    case 'completed':
      return {
        id,
        data: { status, dataCompleted: new Date() },
      };

    case 'deleted':
      return {
        id,
        data: { status, dataClose: new Date() },
      };

    default:
      break;
  }
};
