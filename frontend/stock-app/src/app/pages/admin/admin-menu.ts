import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'ADMIN',
    group: true,
  },
  {
    title: 'Dashboard',
    icon: 'activity-outline',
    link: '/admin/dashboard',
  },
  {
    title: 'Import Data',
    icon: 'cloud-upload-outline',
    link: '/admin/import-data',
  },
  {
    title: 'Manage Company',
    icon: 'list-outline',
    link: '/admin/manage-company',
  },
  {
    title: 'Manage Exchange',
    icon: 'repeat-outline',
    link: '/admin/manage-exchange',
  },
  {
    title: 'Manage Sector',
    icon: 'repeat-outline',
    link: '/admin/manage-sector',
  },
  {
    title: 'Update IPO',
    icon: 'pie-chart-outline',
    link: '/admin/manage-ipo',
  },
  
  {
    title: 'Manage Users',
    icon: 'person-add-outline',
    link: '/admin/manage-user',
  }
];
