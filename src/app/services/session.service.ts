import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthenticateResponse } from '../types/authenticate-response.type';
import { Credentials } from '../types/credentials.type';
import { BehaviorSubject, tap } from 'rxjs';
import { Register } from '../types/register.type';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private httpClient = inject(HttpClient);
  private authenticated$ = new BehaviorSubject<boolean>(!!sessionStorage.getItem('user'));

  authenticate(credentials: Credentials) {
    return this.httpClient.get<Array<AuthenticateResponse>>(`${environment.api}/authentication`)
      .pipe(tap((value) => {
        this.authenticated$.next(true);
        sessionStorage.setItem('user', credentials.username);
      }));
  }

  logout() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('id');
    this.authenticated$.next(false);
  }

  isAuthenticate() {
    return this.authenticated$.asObservable();
  }

  register(register: Register) {
    return this.httpClient.post<AuthenticateResponse>(`${environment.api}/sign-up`, register);
  }
}
