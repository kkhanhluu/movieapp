import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromApp from 'src/app/store/app.reducer';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('signupForm', { static: false }) form: NgForm;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {}

  onSubmit() {
    this.store.dispatch(
      new AuthActions.SignupStart({
        email: this.form.value.email,
        password: this.form.value.password
      })
    );
    console.log('hello');
  }
}
