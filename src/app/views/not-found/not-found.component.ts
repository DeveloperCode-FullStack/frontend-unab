import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/utils/services/helper.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(public _helperService: HelperService) { }

  ngOnInit(): void {
  }

  regresar() {
    this._helperService.onClickBack();

  }

}
