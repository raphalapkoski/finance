import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'session',
    loadChildren: () => import('./pages/session/session.routes'),
  },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.routes'),
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.routes')
  },
];
