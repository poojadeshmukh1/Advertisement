import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<any>{
    let url = `${this.baseUrl}/admin/getAllUserDetails`
    return this.http.get(url)
  }

  getUserList():Observable<any>{
    let url = `${this.baseUrl}/admin/getUserList`
    return this.http.get(url);
  }

  deleteUser(userId: number):Observable<any>{
    let url = `${this.baseUrl}/admin/deleteUser/${userId}`
    return this.http.delete(url);
  }


}
