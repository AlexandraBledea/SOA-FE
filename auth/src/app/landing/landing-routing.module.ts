import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPanelComponent} from './login-panel/login-panel.component';
import {RegisterPanelComponent} from './register-panel/register-panel.component';
import {AuthguardLoginService} from '../authguards/authguard-login.service';

const routes: Routes = [
  // { path: 'login', pathMatch: 'full', component: LoginPanelComponent, canActivate: [AuthguardLoginService], },
  { path: 'login', pathMatch: 'full', component: LoginPanelComponent },
  // { path: 'register', pathMatch: 'full', component: RegisterPanelComponent, canActivate: [AuthguardLoginService], },
  { path: 'register', pathMatch: 'full', component: RegisterPanelComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
