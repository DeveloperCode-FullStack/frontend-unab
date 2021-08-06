import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private headers = new HttpHeaders({
    // "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Basic YW5ndWxhcmFwcDoxMjM0NQ=="
  });

  constructor(private http: HttpClient) { }

  login(username, password) : Observable<any> {
    let data = new FormData();
    data.append("username", username);
    data.append("password", password);
    data.append("grant_type", "password");
    return this.http.post("http://localhost:9090/oauth/token", data, {headers: this.headers});
  }
}
