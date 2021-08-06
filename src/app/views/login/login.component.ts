import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HelperService, MessageType } from 'src/app/utils/services/helper.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public frmLogin;

  constructor(public _helperService: HelperService, public _service: LoginService) { 
    this.frmLogin = new FormGroup({
      usuario: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
  }

  iniciarSesion() {
    if (this.frmLogin.invalid) {
      this._helperService.showMessage(MessageType.WARNING, "Existen campos vacíos")
      return
    }

    this._service.login(this.frmLogin.controls.usuario.value, this.frmLogin.controls.password.value).subscribe(l => {
      localStorage.setItem("token", l.access_token)
      this._helperService.redirectApp('dashboard');
    }, error => {
      this._helperService.showMessage(MessageType.ERROR, "Usuario o contraseña invalidos")
    })
  }

}
