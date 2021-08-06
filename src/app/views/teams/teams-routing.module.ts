import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAuthGuard } from 'src/app/utils/guards/user-auth.guard';
import { TeamFormComponent } from './team-form/team-form.component';
import { TeamIndexComponent } from './team-index/team-index.component';

const routes: Routes = [
  {
    path: '',
    component: TeamIndexComponent,
    canActivate: [UserAuthGuard]
  },
  {
    path: 'create',
    component: TeamFormComponent,
    canActivate: [UserAuthGuard]
  },
  {
    path: 'edit/:id',
    component: TeamFormComponent,
    canActivate: [UserAuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
