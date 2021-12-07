import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor{

  constructor(private authService: AuthenticationService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    if(this.authService.isLoggedIn()) {
      let token:string = localStorage.getItem("token");
      request = request.clone({
        setHeaders:{
          Authorization:`Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
}
