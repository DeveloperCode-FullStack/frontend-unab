import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HelperService, MessageType } from 'src/app/utils/services/helper.service';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent implements OnInit {

  public frm: FormGroup;
  public id = null;

  constructor(public route: ActivatedRoute, private _service: TeamsService, private _helperService: HelperService) { 
    this.frm = new FormGroup({
      team: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null && this.id != undefined) {
      this._service.getTeamById(this.id).subscribe(l => {
        this.frm.controls.team.setValue(l.nombre)
      })
    }
  }

  guardar() {
    if (this.frm.invalid) {
      this._helperService.showMessage(MessageType.ERROR, "Existen campos vacíos")
      return
    }

    let data = {
      nombre: this.frm.controls.team.value
    }

    this._service.saveTeam(this.id, data).subscribe(l => {
      this._helperService.showMessage(MessageType.SUCCESS, "Team guardado con éxito")
      this._helperService.redirectApp('teams');
    }, error => {
      this._helperService.showMessage(MessageType.ERROR, "Error al guardar y/o modificar")
    })
  }

}
