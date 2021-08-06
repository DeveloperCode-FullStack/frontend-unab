import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './utils/guards/login.guard';
import { UserAuthGuard } from './utils/guards/user-auth.guard';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login',component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'register',component: RegisterComponent, canActivate: [LoginGuard]},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [UserAuthGuard]},
  {path: 'teams', loadChildren: () => import('./views/teams/teams.module').then(l => l.TeamsModule), canActivate: [UserAuthGuard]},
  {path: 'matchs', loadChildren: () => import('./views/match/match.module').then(l => l.MatchModule), canActivate: [UserAuthGuard]},
  {path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
