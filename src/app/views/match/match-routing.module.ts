import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAuthGuard } from 'src/app/utils/guards/user-auth.guard';
import { MatchFormComponent } from './match-form/match-form.component';
import { MatchIndexComponent } from './match-index/match-index.component';

const routes: Routes = [
  {
    path: '',
    component: MatchIndexComponent,
    canActivate: [UserAuthGuard]
  },
  {
    path: 'create',
    component: MatchFormComponent,
    canActivate: [UserAuthGuard]
  },
  {
    path: 'edit/:id',
    component: MatchFormComponent,
    canActivate: [UserAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule { }
