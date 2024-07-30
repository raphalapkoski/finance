import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { SessionService } from '../services/session.service';
import { map, take } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const sessionService = inject(SessionService);

  return sessionService.isAuthenticate()
    .pipe(
      take(1),
      map((value: boolean) => {
        if (value)
          return true;

        router.navigate(['/session']);
        return false;
      })
    )
};
