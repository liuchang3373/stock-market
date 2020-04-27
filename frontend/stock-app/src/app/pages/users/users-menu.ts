import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'STOCK-HSD',
    group: true,
  },
  {
    title: 'Dashboard',
    icon: 'activity-outline',
    link: '/users/dashboard',
  },
  {
    title: 'IPO',
    icon: 'pie-chart-outline',
    link: '/users/ipo',
  },
  {
    title: 'Company',
    icon: 'list-outline',
    link: '/users/company',
  },
  {
    title: 'Sector',
    icon: 'grid-outline',
    link: '/users/sector',
  },
  {
    title: 'Comparison',
    icon: 'bar-chart-outline',
    link: '/users/comparison',
  },
   {
    title: 'Profile',
    icon: 'person-outline',
    link: '/users/profile',
  }
];
