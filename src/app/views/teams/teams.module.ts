import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamIndexComponent } from './team-index/team-index.component';
import { TeamFormComponent } from './team-form/team-form.component';
import { GeneralModule } from '../general/general.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TeamIndexComponent, TeamFormComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    GeneralModule
  ]
})
export class TeamsModule { }
