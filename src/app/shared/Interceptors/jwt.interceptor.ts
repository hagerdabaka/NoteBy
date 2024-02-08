import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith(environment.apiUrl)){
    // her you can send your request
    request = request.clone({
      setHeaders:{
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFiaGFyd29ya3MuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE3MDEzNDgzMzMsImV4cCI6MTcwMTM1MTkzM30.h07zB6Sxr163f0lkrFUk9uUlA1U4T49cowP3dHOfDqQ`
      }
    });
  }
    console.log(' test interceptor')
    return next.handle(request);
  }
}
