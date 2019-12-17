import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';

import { Subject, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { Post } from '../post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = 'https://angular-tutorial-54478.firebaseio.com/';
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const post: Post = {title, content};
    this.http.post<{ name: string}>(
      this.baseUrl + 'posts.json',
      post,
      {
        observe: 'response'
      }
    )
    .subscribe(responseData => {
      console.log(responseData);
    }, error => {
      this.error.next(error.message);
    });
  }

  fetchPosts() {
    return this.http
    .get<{[key: string]: Post}>(
      this.baseUrl + 'posts.json',
      {
        headers: new HttpHeaders({ 'Custom-Header': 'hello' }),
        params: new HttpParams().set('print', 'pretty') // Adds "?print=pretty" end of the url
      }
    )
    .pipe(
      map(responseData => {
      const postsArray: Post[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          postsArray.push({...responseData[key], id: key});
        }
      }
      return postsArray;
      }),
      catchError(errorResponse => {
        return throwError(errorResponse);
      })
    );
  }

  deletePosts() {
    return this.http.delete(
      this.baseUrl + 'posts.json',
      {
        observe: 'events',
        responseType: 'json'
      }
    ).pipe(
      tap(event => {
        console.log(event);
        if (event.type === HttpEventType.Response) {
          console.log(event.body);
        }
      })
    );
  }
}
