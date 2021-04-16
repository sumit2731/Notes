import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import { AppState } from './reducers';
import { isLoggedIn, isLoggedOut} from './auth/auth.selector';
import { AuthActions } from './auth/action.type';
import { login } from './auth/auth.action';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loading = true;
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {

    const userProfile = localStorage.getItem("user");
    if(userProfile) {
      this.store.dispatch(login({user: JSON.parse(userProfile)}));
    }

    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });

    // this.isLoggedIn$ = this.store.pipe(
    //   map(state => !!state['auth'].user)
    // );

    // this.isLoggedOut$ = this.store.pipe(
    //   map(state => !state['auth'].user)
    // );

    //this.isLoggedIn$ = this.store.pipe(select(state => !!state['auth'].user));

    /* 
    selector is only going to repeat the calculation of the output if the input
    changes and the Select operator is going to remove any duplicates passed to the view
    */

    this.isLoggedIn$ = this.store.pipe(select(isLoggedIn));

    this.isLoggedOut$ = this.store.pipe(select(isLoggedOut));
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
