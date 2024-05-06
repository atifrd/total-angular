import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments';
import { Router } from '@angular/router';
import { Models } from '@total/core';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  // eslint-disable-next-line
  private currentUserSubject: BehaviorSubject<Models.Account.User | any>;
  public currentUser: Observable<Models.Account.User>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    // eslint-disable-next-line
    this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Models.Account.User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<Models.Account.User>(`${environment.apiUrl}/api/account/login`, { email, password }).pipe(
      map((user) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      })
    );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/authentication-1/login']);
  }
}
