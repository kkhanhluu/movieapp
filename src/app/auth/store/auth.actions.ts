import { Action } from '@ngrx/store';

export const LOGIN_START = '[Auth] Login Start';
export const SIGNUP_START = '[Auth] Signup Start';
export const AUTHENTICATE_SUCCESS = '[Auth] Authenticate Success';
export const AUTHENTICATE_FAILED = '[Auth] Authenticate Failed';
export const AUTO_LOGIN = '[Auth] Auto Login';
export const LOGOUT = '[Auth] Logout';

export class LoginStart implements Action {
  readonly type: string = LOGIN_START;
  constructor(readonly payload: { email: string; password: string }) {}
}

export class SignupStart implements Action {
  readonly type: string = SIGNUP_START;
  constructor(readonly payload: { email: string; password: string }) {}
}

export class AuthenticateSuccess implements Action {
  readonly type: string = AUTHENTICATE_SUCCESS;
  constructor(
    readonly payload: {
      email: string;
      id: string;
      token: string;
      expirationDate: Date;
    }
  ) {}
}

export class AuthenticateFail implements Action {
  readonly type: string = AUTHENTICATE_FAILED;
  constructor(public payload: string) {}
}

export class AutoLogin implements Action {
  readonly type: string = AUTO_LOGIN;
  constructor(public payload: any = null) {}
}

export class Logout implements Action {
  readonly type: string = LOGOUT;
  constructor(public payload: any = null) {}
}

export type AuthActions =
  | AuthenticateSuccess
  | LoginStart
  | SignupStart
  | AuthenticateFail
  | AutoLogin
  | Logout;
