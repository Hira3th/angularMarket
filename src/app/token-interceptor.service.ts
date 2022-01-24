import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    let authService = this._injector.get(AuthService)
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    })
    return next.handle(req)
    .pipe(
      // Retry on failure
      retry(2),

      // Handle errors
      catchError((error: HttpErrorResponse) => {
        // TODO: Add error handling logic here
        alert(`HTTP Error: ${req.url}`);
        return throwError(error);
      }),

      // PROFILING
      finalize(() => {
        const profilingMsg = `${req.method} "${req.urlWithParams}"`;
        console.log(profilingMsg);
      })
      );
  };
}
