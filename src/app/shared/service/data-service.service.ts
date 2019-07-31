import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { DiscoverResult } from '../model/discoverResult';
import { Movie } from '../model/movie';
import { Actor } from '../model/actor';
import { UserData } from '../model/userData';
import { environment } from 'src/environments/environment';
import {
  URL_MOVIE,
  URL_DISCOVER,
  URL_IMAGE,
  GET_USER_DATA
} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  constructor(private http: HttpClient) {}

  /*
   * Movie relevant methods
   */

  discoverMovies(
    lang: string = 'en',
    page: number = 1
  ): Observable<DiscoverResult> {
    // let date = new Date();
    // let today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`;
    // let oneMonthAgo = `${
    //   date.getMonth() === 0 ? date.getFullYear() - 1 : date.getFullYear()
    // }-${date.getMonth() === 0 ? '12' : date.getMonth()}-${date.getDate()}`;

    return this.sendRequest<DiscoverResult>(
      'GET',
      `
      ${URL_DISCOVER}?api_key=${
        environment.TMDBApiKey
      }&language=${lang}&sort_by=popularity.desc&page=${page}&include_adult=true
    `
    );
  }

  getMovieById(id: number): Observable<Movie> {
    return this.sendRequest<Movie>(
      'GET',
      `${URL_MOVIE}/${id}?api_key=${
        environment.TMDBApiKey
      }&language=en-US&append_to_response=credits,videos`
    );
  }

  getActorById(id: number): Observable<Actor> {
    return this.sendRequest(
      'GET',
      `https://api.themoviedb.org/3/person/${id}?api_key=${
        environment.TMDBApiKey
      }&language=en-US`
    );
  }

  getImageUrl(url: string): string {
    return `${URL_IMAGE}${url}`;
  }

  getSimilarMovie(id: number): Observable<DiscoverResult> {
    return this.sendRequest(
      'GET',
      `${URL_MOVIE}/${id}/recommendations?api_key=${
        environment.TMDBApiKey
      }&language=en-US&page=1`
    );
  }

  /**
   * User relevant methods
   */

  getCurrentUserData(idToken: string): Observable<UserData> {
    return this.sendRequest('POST', GET_USER_DATA, { idToken });
  }

  /**
   * method to send http request
   * @param verb: HTTP Verb
   * @param url: URL
   */
  private sendRequest<T>(
    verb: string,
    url: string,
    body: any = null
  ): Observable<T> {
    const headers = new HttpHeaders();
    headers.set('Application-Names', ['Movie-app']);

    return this.http
      .request<T>(verb, url, {
        headers,
        body
      })
      .pipe(
        catchError((error: Response) =>
          throwError(`Network Error: ${error.statusText} (${error.status})`)
        )
      );
  }
}
