import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from 'src/app/utils/entitys/team.entity';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  public headers = new HttpHeaders({
    "Content-Type": 'application/json',
    "Authorization": 'Bearer ' + localStorage.getItem("token")
  })
  public urlBase = "http://localhost:9090/api/teams";

  constructor(public http: HttpClient) { }

  public getTeams() : Observable<Team[]> {
    return this.http.get<Team[]>(this.urlBase, {headers: this.headers});
  }

  public getTeamById(id) : Observable<Team> {
    return this.http.get<Team>(this.urlBase + "/" + id, {headers: this.headers});
  }

  public saveTeam(id, data) : Observable<Team> {
    if (id != null && id != undefined) {
      return this.http.put<Team>(this.urlBase + "/" + id, JSON.stringify(data), {headers: this.headers});
    } else {
      return this.http.post<Team>(this.urlBase, JSON.stringify(data), {headers: this.headers});
    }
  }

  public deleteTeam(id) : Observable<any> {
    return this.http.delete(this.urlBase + "/" + id, {headers: this.headers})
  }
}
