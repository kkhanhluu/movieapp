import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromState from 'src/app/store/app.reducer';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm', { static: false }) form: NgForm;
  constructor(private store: Store<fromState.AppState>) {}

  ngOnInit() {}

  onSubmit() {
    this.store.dispatch(
      new AuthActions.LoginStart({
        email: this.form.value.email,
        password: this.form.value.password
      })
    );
  }
}
