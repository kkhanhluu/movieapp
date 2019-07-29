import { User } from '../user.model';
import * as AuthActions from './auth.actions';

export interface State {
  user: User;
  isLoading: boolean;
  error: string;
}

const INITIAL_STATE: State = {
  user: null,
  isLoading: false,
  error: null
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActions.LOGIN_START:
      return { ...state, isLoading: true };
    case AuthActions.AUTHENTICATE_SUCCESS:
      const user = new User(
        action.payload.emal,
        action.payload.id,
        action.payload.token,
        action.payload.expirationDate
      );
      return { ...state, user, isLoading: false, error: null };
    default:
      return state;
  }
};
