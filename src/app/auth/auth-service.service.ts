import { Injectable } from '@angular/core';
import * as fromApp from '../store/app.reducer';
import { Store } from '@ngrx/store';
import * as AuthActions from './store/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  logOutTimer;
  constructor(private store: Store<fromApp.AppState>) {}

  setLogoutTimer(duration: number) {
    this.logOutTimer = setInterval(() => {
      this.store.dispatch(new AuthActions.Logout());
    }, duration);
  }

  clearLogoutTimer() {
    if (this.logOutTimer) {
      clearInterval(this.logOutTimer);
    }
    this.logOutTimer = null;
  }
}
