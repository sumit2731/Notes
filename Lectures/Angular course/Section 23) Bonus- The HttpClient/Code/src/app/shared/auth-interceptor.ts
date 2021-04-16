import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

// tslint:disable-next-line:invoke-injectable
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //  const copiedReq = req.clone({headers: req.headers.set('header2', 'value2')});
    const copiedReq = req.clone({params: req.params.set('auth', this.authService.getToken())});
      console.log('Intercepted', req);
      return next.handle(copiedReq);
   // return null;
  }
}
