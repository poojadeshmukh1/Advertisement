import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatGridTileHeaderCssMatStyler } from '@angular/material';
import { Observable } from 'rxjs';
import { Advertise } from 'src/models/Advertise';

@Injectable({
  providedIn: 'root'
})
export class AdvertiseService {

  private baseUrl = 'http://localhost:8088';

  constructor(private http:HttpClient) { }

  addAdvertise(advertise: Advertise):Observable<any>{
    let url= `${this.baseUrl}/user/seller/AddNewAdv`;
    return this.http.post(url,advertise,{ responseType:'text' as 'json'})
  }

  updateAdvertise(advertise:Advertise):Observable<any>{
    let url= `${this.baseUrl}/user/seller/editAdv`;
    return this.http.put(url,advertise,{ responseType:'text' as 'json'});
  }

  getAllAdvertises():Observable<any>{
    let url= `${this.baseUrl}/admin/getAllAdv`;
    return this.http.get(url);
  }

  updateStatus(advertiseId:number, status:string):Observable<any>{
    let url= `${this.baseUrl}/admin/updateStatus/${advertiseId}/${status}`
    return this.http.put(url,{advertiseId,status},{ responseType:'text' as 'json'})
  }

  getAllApprovedAdv():Observable<any>{
    let url= `${this.baseUrl}/user/buyer/getAllApprovedAdv`;
    return this.http.get(url);
  }

  getAdvertisementByTitle(advertiseTitle: string):Observable<any>{
    //let params = new HttpParams().set("advertisetitle",advertiseTitle)
    let url=`${this.baseUrl}/user/getAdvertise/${advertiseTitle}`
    return this.http.get(url)
  }

  deleteAdvertiseById(advertiseId: number):Observable<any>{
    let url=`${this.baseUrl}/user/seller/deleteAdv/${advertiseId}`;
    return this.http.delete(url)
  }

}
