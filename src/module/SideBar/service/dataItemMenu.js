import {
  IconHome,
  // IconAdmin,
  IconCreate,
  IconPending,
  IconInProgress,
  IconArchive,
  IconStatistic,
} from '../component/Icon/Icon';

export const dataItemMenu = [
  {
    label: 'Головна сторінка',
    icon: <IconHome />,
    path: '/',
  },

  {
    label: 'Створити заявку',
    icon: <IconCreate />,
    path: 'create-help',
  },
  {
    label: 'Необроблені',
    icon: <IconPending />,
    path: '/active',
  },
  {
    label: 'Заявки у роботі',
    icon: <IconInProgress />,
    path: '/in-progress',
  },
  {
    label: 'Архів',
    icon: <IconArchive />,
    path: '/archive/completed',
  },

  {
    label: 'Статистика',
    icon: <IconStatistic />,
    path: '/statistics',
  },

  // {
  //   label: 'Адміністрування',
  //   icon: <IconAdmin />,
  //   path: '/administration',
  // },
];
