// index.ts
import { Router } from '@vaadin/router';
import './app';

const routes = [
  {
    path: '/',
    component: 'neverland-app',
    children: [
      {
        path: '/',
        component: 'neverland-home',
        action: async () => {
          await import('./home');
        }
      },
      {
        path: 'editor',
        component: 'neverland-editor',
        action: async () => {
          await import('./editor');
        }
      }
    ]
  },
];

const outlet = document.getElementById('outlet');
export const router = new Router(outlet);
router.setRoutes(routes);