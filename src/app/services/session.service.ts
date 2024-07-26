import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthenticateResponse } from '../types/authenticate-response.type';
import { Credentials } from '../types/credentials.type';
import { take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private url = `${environment.api}/authentication`;
  private httpClient = inject(HttpClient);

  authenticate(credentials: Credentials) {
    return this.httpClient.post<AuthenticateResponse>(this.url, credentials)
      .pipe(take(1))
      .pipe(tap((value) => {
        sessionStorage.setItem('token', value.accessToken);
      }));
  }

  isAuthenticate() {
    return sessionStorage.getItem('token');
  }
}
