import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { SessionService } from '../services/session.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const sessionService = inject(SessionService);

  if (sessionService.isAuthenticate())
    return true;

  const url = router.createUrlTree(['session']);
  return url;
};
