import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "https://localhost:5001/";
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'user/login', model).pipe(
      map((response: User) => { 
        const user = response;
        if (user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  setCurrentUser(user: User){
    this.currentUserSource.next(user);
  }

  getCurrentUser(){
    return localStorage.getItem('user');
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
