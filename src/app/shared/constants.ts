import { environment } from 'src/environments/environment';

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
export const BASE_YOUTUBE_URL = 'https://www.youtube.com/embed/';
export const SIGNUP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
  environment.firebaseApiKey
}`;

export const LOGIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
  environment.firebaseApiKey
}`;
