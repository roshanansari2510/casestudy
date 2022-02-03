import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private httpclient:HttpClient) { }

  getProducts(){
    return this.httpclient.get<any>("http://localhost:3000/app/products/")
    .pipe(map((res:any)=>{return res;}))
  }

}