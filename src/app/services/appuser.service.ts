import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUser } from 'src/models/AppUser';

@Injectable({
  providedIn: 'root'
})
export class AppuserService {
  private baseUrl = 'http://localhost:8088';

  constructor(private http: HttpClient) { }

  registerUser(user: AppUser): Observable<any>{
    let url = `${this.baseUrl}/registration`;
    return this.http.post(url,user,{ responseType:'text' as 'json'});
  }
  updateUser(user: AppUser): Observable<any>{
    let url = `${this.baseUrl}/update`;
    return this.http.put(url,user);
  }

}
