import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public avail:boolean = false;
  public msg:string="";
  private baseUri: string = "http://localhost:3000";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private router: Router) { }

  check() {
    return this.http.get(this.baseUri + "/check", { headers: this.headers });
  }

  readUser() {
    return this.http.get(this.baseUri + "/app/users", { headers: this.headers });
  }

  login(email : string ) {
    console.log(email)
    return this.http.get(this.baseUri + '/app/users/' + email, { headers: this.headers });
  }
}
