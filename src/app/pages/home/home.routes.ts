import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { authGuard } from '../../guards/auth.guard';

export default [
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard]
  }
] as Routes