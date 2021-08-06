import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private headers = new HttpHeaders({
    "Content-Type": "application/json",
  });

  constructor(private http: HttpClient) { }

  login(nombre, correo, username, password) : Observable<any> {
    let data = {
      nombre: nombre,
      email: correo,
      username: username,
      password: password
    }
    return this.http.post("http://localhost:9090/api/users", JSON.stringify(data), {headers: this.headers});
  }
}
