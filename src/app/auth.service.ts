import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoggedInUser } from './auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(
    firstName: string,
    lastName: string,
    username: string,
    password: string
  ): Observable<LoggedInUser> {
    return this.http.post<LoggedInUser>('http://localhost:8000/signup', {
      firstName,
      lastName,
      username,
      password,
    });
  }

  logIn(username: string, password: string): Observable<LoggedInUser> {
    return this.http.post<LoggedInUser>('http://localhost:8000/login', {
      username,
      password,
    });
  }

  setLoggedInUser(userData: LoggedInUser): void {
    if (localStorage.getItem('userData') !== JSON.stringify(userData)) {
      localStorage.setItem('id_token', JSON.stringify(userData.token));
      localStorage.setItem('userData', JSON.stringify(userData));
    }
  }

  logout(): void {
    localStorage.removeItem('id_token');
    localStorage.removeItem('userData');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('id_token') !== null;
  }
}
