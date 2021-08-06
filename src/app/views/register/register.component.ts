import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HelperService, MessageType } from 'src/app/utils/services/helper.service';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public frmRegister;

  constructor(public _helperService: HelperService, public _service: RegisterService) { 
    this.frmRegister = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, Validators.required),
      usuario: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
  }

  registrar() {
    if (this.frmRegister.invalid) {
      this._helperService.showMessage(MessageType.WARNING, "Existen campos vacíos")
      return
    }

    this._service.login(this.frmRegister.controls.nombre.value, this.frmRegister.controls.correo.value, this.frmRegister.controls.usuario.value, this.frmRegister.controls.password.value).subscribe(l => {
      this._helperService.redirectApp('login');
    }, error => {
      this._helperService.showMessage(MessageType.ERROR, "Error al registrar el usuario")
    })
  }

}
