import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContaService {
  baseUrl = 'https://localhost:5001/api/';
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: typedef
  login(model: any) {
    return this.http.post<User>(this.baseUrl + 'Conta/login', model).pipe(
      map((user: User) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }
  registro(model: any){
    return this.http.post<User>(this.baseUrl + 'Conta/Registrar', model).pipe(
      map((user: User) => {
      if(user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSource.next(user);
      }
      return user;
    })
    );
  }
  // tslint:disable-next-line: typedef
  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }
  // tslint:disable-next-line: typedef
  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(undefined);
  }

}
