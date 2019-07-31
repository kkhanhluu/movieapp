import { environment } from 'src/environments/environment';

// movies constants
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
export const BASE_YOUTUBE_URL = 'https://www.youtube.com/embed/';
export const URL_DISCOVER = 'https://api.themoviedb.org/3/discover/movie';
export const URL_MOVIE = 'https://api.themoviedb.org/3/movie';
export const URL_IMAGE = 'https://image.tmdb.org/t/p';

// authentication constants
export const SIGNUP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
  environment.firebase.apiKey
}`;
export const LOGIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
  environment.firebase.apiKey
}`;
export const VERIFY_EMAIL = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${
  environment.firebase.apiKey
}`;
export const GET_USER_DATA = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${
  environment.firebase.apiKey
}`;
