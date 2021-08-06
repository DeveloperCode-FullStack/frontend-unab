import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/utils/entitys/team.entity';
import { HelperService } from 'src/app/utils/services/helper.service';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-team-index',
  templateUrl: './team-index.component.html',
  styleUrls: ['./team-index.component.css']
})
export class TeamIndexComponent implements OnInit {

  public data: Team[];

  constructor(private _helperService: HelperService, private _service: TeamsService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    if (this.data != undefined && this.data.length > 0) {
      this._helperService.destroyDatatable();
    }

    this._service.getTeams().subscribe(l => this.data = l)

    this._helperService.createDatatable();

  }

  deleteTeam(id) {
    this._service.deleteTeam(id).subscribe(l => this.getData());
  }

}
