import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/utils/entitys/team.entity';
import { User } from 'src/app/utils/entitys/user.entity';
import { HelperService, MessageType } from 'src/app/utils/services/helper.service';
import { TeamsService } from '../../teams/teams.service';
import { MatchsService } from '../matchs.service';

@Component({
  selector: 'app-match-form',
  templateUrl: './match-form.component.html',
  styleUrls: ['./match-form.component.css']
})
export class MatchFormComponent implements OnInit {

  public listUsers: User[];
  public listTeams: Team[];
  public frm: FormGroup;
  public id = null;

  constructor(public _serviceTeam: TeamsService, public _service: MatchsService, private _helperService: HelperService, private route: ActivatedRoute) { 
    this.frm = new FormGroup({
      usuario: new FormControl(null, Validators.required),
      local: new FormControl(null, Validators.required),
      visitante: new FormControl(null, Validators.required),
      fecha: new FormControl(null, Validators.required),
      goleslocal: new FormControl(null, Validators.required),
      golesvisitante: new FormControl(null, Validators.required)
    });
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.cargarListas();
    if (this.id != null && this.id != undefined) {
      this._service.getMatchById(this.id).subscribe(l => {
        this.frm.patchValue({
          usuario: l.usuario,
          local: l.local,
          visitante: l.visitante,
          fecha: l.fecha,
          goleslocal: l.golesLocal,
          golesvisitante: l.golesVisitante,
        })
      })
    }
  }

  cargarListas() {
    this._service.getUsers().subscribe(l => {
      this.listUsers = l
    })
    this._serviceTeam.getTeams().subscribe(l => {
      this.listTeams = l
    })
  }

  guardar() {
    if (this.frm.invalid) {
      this._helperService.showMessage(MessageType.ERROR, "Campos vacíos")
      return
    }

    let data = {
      usuario: {
        id: this.frm.controls.usuario.value
      },
      local: {
        id: this.frm.controls.local.value
      },
      visitante: {
        id: this.frm.controls.visitante.value
      },
      fecha: this.frm.controls.fecha.value,
      golesLocal: this.frm.controls.goleslocal.value,
      golesVisitante: this.frm.controls.golesvisitante.value
    }
    this._service.saveMatch(this.id, data).subscribe(l => {
      this._helperService.showMessage(MessageType.SUCCESS, "Usuario guardado con éxito")
      this._helperService.redirectApp('matchs');
    }, error => {
      this._helperService.showMessage(MessageType.ERROR, "Error al guardar y/o modificar")
    })
  }

}
