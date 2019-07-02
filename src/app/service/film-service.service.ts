import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { DiscoverResult } from '../model/discoverResult';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {
  private API_KEY = 'f3e9f7d1677c7aa63c9ab526381eeceb';
  private URL_DISCOVER = 'https://api.themoviedb.org/3/discover/movie';
  private URL_MOVIE = 'https://api.themoviedb.org/3/movie';

  constructor(private http: HttpClient) {}

  discoverMovies(
    lang: string = 'en',
    page: number = 1
  ): Observable<DiscoverResult> {
    let date = new Date();
    let today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`;
    let oneMonthAgo = `${
      date.getMonth() === 0 ? date.getFullYear() - 1 : date.getFullYear()
    }-${date.getMonth() === 0 ? '12' : date.getMonth()}-${date.getDate()}`;

    return this.sendRequest<DiscoverResult>(
      'GET',
      `
      ${this.URL_DISCOVER}?api_key=${
        this.API_KEY
      }&language=${lang}&sort_by=popularity.desc&page=${page}&include_adult=true
    `
    );
  }

  getMovieById(id: number): Observable<Movie> {
    return this.sendRequest<Movie>(
      'GET',
      `${this.URL_MOVIE}/${id}?api_key=${
        this.API_KEY
      }&language=en-US&append_to_response=credits`
    );
  }

  private sendRequest<T>(verb: string, url: string): Observable<T> {
    let headers = new HttpHeaders();
    headers.set('Application-Names', ['Movie-app']);

    return this.http
      .request<T>(verb, url, {
        headers: headers
      })
      .pipe(
        catchError((error: Response) =>
          throwError(`Network Error: ${error.statusText} (${error.status})`)
        )
      );
  }
}
