import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

export const ANONYMOUS_USER : User = {
  id: undefined,
  email: ''
};

@Injectable()
export class AuthService {
  private subject = new BehaviorSubject<User>(ANONYMOUS_USER);
  user$: Observable<User> = this.subject.asObservable();
  isLoggedIn$: Observable<boolean> = this.user$.map(user => !!user.id);
  isLoggedOut$: Observable<boolean> = this.isLoggedIn$.map(isLoggedIn => !isLoggedIn);

  constructor(private http: HttpClient) { }
  signUp(email: string, password: string) {
    console.log(password);
    return this.http.post<User>('/api/signup',{email, password})
    .shareReplay()
    .do( user => this.subject.next(user));

  }

}
