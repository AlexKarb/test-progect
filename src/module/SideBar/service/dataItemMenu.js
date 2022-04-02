import {
  IconProfile,
  IconAdmin,
  IconCreate,
  IconPending,
  IconInProgress,
  IconArchive,
  IconStatistic,
} from '../component/Navigation/Navigation.styled';

export const dataItemMenu = [
  {
    label: 'Мій профіль',
    icon: <IconProfile />,
    path: '/my-profile',
  },
  {
    label: 'Адміністрування',
    icon: <IconAdmin />,
    path: '/administration',
  },
  {
    label: 'Створити заявку',
    icon: <IconCreate />,
    path: 'create-help',
  },
  {
    label: 'Активні заявки',
    icon: <IconPending />,
    path: '/active',
  },
  {
    label: 'У роботі',
    icon: <IconInProgress />,
    path: '/in-progress',
  },
  {
    label: 'Архів',
    icon: <IconArchive />,
    path: '/archive',
  },
  {
    label: 'Статистика',
    icon: <IconStatistic />,
    path: '/statistic',
  },
];
