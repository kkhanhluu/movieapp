import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as AuthActions from './auth.actions';
import { SIGNUP_URL, LOGIN_URL } from 'src/app/shared/constants';
import { User } from '../user.model';
import { of } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';

export interface AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

const handleAuthentication = (resData: AuthResponse) => {
  // save user's data to local storage
  const exiprationDate = new Date(new Date().getTime() + +resData.expiresIn);
  const user = new User(
    resData.email,
    resData.localId,
    resData.idToken,
    exiprationDate
  );
  localStorage.setItem('user', JSON.stringify(user));
  // return new action
  return new AuthActions.AuthenticateSuccess({
    email: user.email,
    id: user.id,
    token: user.token,
    expirationDate: user.expirationDate
  });
};

const handleError = errorRes => {
  let errorMessage = 'Unknown Error happened';
  if (!errorRes.error || !errorRes.error.error) {
    return of(new AuthActions.AuthenticateFail(errorMessage));
  }
  switch (errorRes.error.error.message) {
    case 'EMAIL_NOT_FOUND':
      errorMessage = 'The email does not exist';
      break;
    case 'EMAIL_EXISTS':
      errorMessage = 'This email already exists';
      break;
    case 'INVALID_PASSWORD':
      errorMessage = 'This password is not correct';
      break;
  }
  return of(new AuthActions.AuthenticateFail(errorMessage));
};

@Injectable()
export class AuthEffects {
  @Effect()
  authSignup = this.actions$.pipe(
    ofType(AuthActions.SIGNUP_START),
    mergeMap((signupAciton: AuthActions.SignupStart) => {
      return this.http
        .post(SIGNUP_URL, {
          email: signupAciton.payload.email,
          password: signupAciton.payload.password,
          returnSecureToken: true
        })
        .pipe(
          map((authResponse: AuthResponse) =>
            handleAuthentication(authResponse)
          ),
          catchError(errorRes => handleError(errorRes))
        );
    })
  );

  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    mergeMap((loginAction: AuthActions.LoginStart) => {
      return this.http
        .post(LOGIN_URL, {
          email: loginAction.payload.email,
          password: loginAction.payload.password,
          returnSecureToken: true
        })
        .pipe(
          tap((authRes: AuthResponse) => {
            this.service.setLogoutTimer(+authRes.expiresIn * 1000);
          }),
          map((authRes: AuthResponse) => handleAuthentication(authRes)),
          catchError(errorRes => handleError(errorRes))
        );
    })
  );

  @Effect()
  authAutoLogin = this.actions$.pipe(
    ofType(AuthActions.AUTO_LOGIN),
    map((autoLoginAction: AuthActions.AutoLogin) => {
      const userData = JSON.parse(localStorage.getItem('user'));
      if (userData) {
        // auto logout
        const expirationDuration =
          new Date().getTime() - new Date(userData.expirationDate).getTime();
        this.service.setLogoutTimer(expirationDuration);

        return new AuthActions.AuthenticateSuccess({
          email: userData.email,
          id: userData.id,
          token: userData.token,
          expirationDate: userData.expirationDate
        });
      } else {
        return { type: 'DUMMY' };
      }
    })
  );

  @Effect({ dispatch: false })
  authRedirect = this.actions$.pipe(
    ofType(AuthActions.AUTHENTICATE_SUCCESS),
    tap(() => {
      this.router.navigate(['/']);
    })
  );

  @Effect({ dispatch: false })
  authLogout = this.actions$.pipe(
    ofType(AuthActions.LOGOUT),
    tap(() => {
      localStorage.removeItem('user');
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private service: AuthServiceService
  ) {}
}
