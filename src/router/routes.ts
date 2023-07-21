import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'Main Page', path: '', component: () => import('pages/main/IndexPage.vue') },
      { name: 'Typography Page', path: '/typography', component: () => import('pages/main/Typography.vue') },
      { name: 'Table Page', path: '/table', component: () => import('pages/main/Table.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
