import { notifyChange } from 'module/Toaster/Toaster';
import { Request } from 'service/redux/api';

export const useChangeType = (status, id) => {
  const [updateStatus] = Request.updateStatus();

  const changeStatus = async () => {
    const result = await updateStatus({ body: { status }, id });

    console.log('result', result);
    notify(status);
  };

  return changeStatus;
};

function notify(status) {
  switch (status) {
    case 'pending':
      notifyChange('Заявка відправлена у активні');
      break;

    case 'in progress':
      notifyChange('Заявка відправлена у роботу ');
      break;

    case 'completed':
      notifyChange(' Заявка викона!   🎉');
      break;

    case 'deleted':
      notifyChange(' Заявка видалена!  ❌ ');
      break;

    default:
      break;
  }
}
