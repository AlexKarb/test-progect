import { notifyChange } from 'module/Toaster/Toaster';

export const changeStatus = (id, status) => {
  switch (status) {
    case 'pending':
      notifyChange('Заявка відправлена у активні');
      return {
        id,
        data: { status },
      };

    case 'in progress':
      notifyChange('Заявка відправлена у роботу ');
      return {
        id,
        data: { status, dataInProgress: new Date() },
      };

    case 'completed':
      notifyChange(' Заявка викона!   🎉');
      return {
        id,
        data: { status, dataCompleted: new Date() },
      };

    case 'deleted':
      notifyChange(' Заявка видалена!  ❌ ');
      return {
        id,
        data: { status, dataClose: new Date() },
      };

    default:
      break;
  }
};
