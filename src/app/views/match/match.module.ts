import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchRoutingModule } from './match-routing.module';
import { MatchIndexComponent } from './match-index/match-index.component';
import { MatchFormComponent } from './match-form/match-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneralModule } from '../general/general.module';


@NgModule({
  declarations: [MatchIndexComponent, MatchFormComponent],
  imports: [
    CommonModule,
    MatchRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    GeneralModule
  ]
})
export class MatchModule { }
