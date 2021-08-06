import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from 'src/app/utils/entitys/match.entity';
import { User } from 'src/app/utils/entitys/user.entity';

@Injectable({
  providedIn: 'root'
})
export class MatchsService {

  public headers = new HttpHeaders({
    "Content-Type": 'application/json',
    "Authorization": 'Bearer ' + localStorage.getItem("token")
  })
  public urlBase = "http://localhost:9090/api/matchs";

  constructor(public http: HttpClient) { }

  public getmatchs() : Observable<any> {
    return this.http.get<any>(this.urlBase + "/all", {headers: this.headers});
  }

  public getMatchById(id) : Observable<Match> {
    return this.http.get<Match>(this.urlBase + "/match/" + id, {headers: this.headers});
  }

  public saveMatch(id, data) : Observable<Match> {
    if (id != null && id != undefined) {
      return this.http.put<Match>(this.urlBase + "/" + id, JSON.stringify(data), {headers: this.headers});
    } else {
      return this.http.post<Match>(this.urlBase, JSON.stringify(data), {headers: this.headers});
    }
  }

  public deleteMatch(id) : Observable<any> {
    return this.http.delete(this.urlBase + "/" + id, {headers: this.headers})
  }

  public getUsers() : Observable<User[]> {
    return this.http.get<User[]>("http://localhost:9090/api/users", {headers: this.headers})
  }
}
