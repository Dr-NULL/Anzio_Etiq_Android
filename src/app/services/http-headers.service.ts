import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpHeadersService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, nxt: HttpHandler):
  Observable<HttpEvent<any>> {
    req = req.clone({
      withCredentials: true,
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': 'http://192.168.20.218',
        'Set-Cookie': 'HttpOnly;Secure;SameSite=Strict'
      })
    });

    return nxt.handle(req);
  }

  constructor() { }
}
