import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthenticateResponse } from '../types/authenticate-response.type';
import { Credentials } from '../types/credentials.type';
import { tap } from 'rxjs';
import { Register } from '../types/register.type';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private httpClient = inject(HttpClient);

  authenticate(credentials: Credentials) {
    return this.httpClient.post<AuthenticateResponse>(`${environment.api}/authentication`, credentials)
      .pipe(tap((value) => {
        sessionStorage.setItem('user', value.username);
        sessionStorage.setItem('id', value.id);
      }));
  }

  logout() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('id');
  }

  register(register: Register) {
    return this.httpClient.post<AuthenticateResponse>(`${environment.api}/sign-up`, register);
  }

  isAuthenticate() {
    return sessionStorage.getItem('user');
  }
}
