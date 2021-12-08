import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = 'http://localhost:8088';

  constructor(private http: HttpClient) { }

  addCategory(category: Category):Observable<any>{
    let url =`${this.baseUrl}/admin/addCategory`
    return this.http.post(url,category);
  }

  getAllCategory():Observable<any>{
    let url = `${this.baseUrl}/user/getAllCategory`;
    return this.http.get(url);
  }

  getCategoryById(categoryId: number):Observable<any>{
    let url =`${this.baseUrl}/getCategory/${categoryId}`
    return this.http.get(url);
  }


}
