import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http:HttpClient) { }
  login(credentials) {

    return this.http.post<any>('http://localhost:8080/authorization/login/user',credentials).pipe(
      map(
        response => {
          if (response && response.token) {
            // next  5 lines to display token and payload data. Not required for the app 
            console.log(response.token);
            let jwtData = response.token.split('.')[1]
            let payLoad = JSON.parse(window.atob(jwtData))
            console.log('User name: ' + payLoad.sub)

            //from this line required for the app
            localStorage.setItem('token', response.token);
          
            return response;
          }
        }
      )
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    console

    if (!token)
      return false;

    return tokenNotExpired(null, token);
  }
}
