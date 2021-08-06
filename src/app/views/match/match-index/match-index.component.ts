import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/utils/entitys/match.entity';
import { HelperService } from 'src/app/utils/services/helper.service';
import { TeamsService } from '../../teams/teams.service';
import { MatchsService } from '../matchs.service';

@Component({
  selector: 'app-match-index',
  templateUrl: './match-index.component.html',
  styleUrls: ['./match-index.component.css']
})
export class MatchIndexComponent implements OnInit {

  public data: [];

  constructor(private _helperService: HelperService, private _service: MatchsService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    if (this.data != undefined && this.data.length > 0) {
      this._helperService.destroyDatatable();
    }

    this._service.getmatchs().subscribe(l => this.data = l)

    this._helperService.createDatatable();

  }

  deleteMatch(id) {
    this._service.deleteMatch(id).subscribe(l => this.getData());
  }

}
