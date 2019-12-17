import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';

import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
  // Effects all http responce, request actions(post, get, delete etc.)
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    /* console.log('Request is on its way.');
    const modifiedRequest = request.clone({headers: request.headers.append('Auth', 'admin')});
    return next.handle(modifiedRequest).pipe(tap(event => {
      console.log(event);
      if (event.type === HttpEventType.Response) {
        console.log('Response arrived, body data: ');
        console.log(event);
      }
    })); */
    const modifiedRequest = request.clone({headers: request.headers.append('Auth', 'admin')});
    return next.handle(modifiedRequest);
  }
}
