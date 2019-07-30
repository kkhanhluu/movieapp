import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import { Subscription } from 'rxjs';
import * as AuthActions from '../auth/store/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  authSubscription: Subscription;
  isLoading = false;
  isLoggedin = false;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.authSubscription = this.store.select('auth').subscribe(authState => {
      this.isLoading = authState.isLoading;
      this.isLoggedin = authState.user !== null;
    });
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
