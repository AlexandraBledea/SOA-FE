import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginPanelComponent} from './login-panel/login-panel.component';
import {RegisterPanelComponent} from './register-panel/register-panel.component';
import {LoginFormComponent} from './login-panel/login-form/login-form.component';
import {LandingRoutingModule} from './landing-routing.module';
import {RegisterFormComponent} from './register-panel/register-form/register-form.component';

@NgModule({
  declarations: [LoginPanelComponent, RegisterPanelComponent, LoginFormComponent, RegisterFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LandingRoutingModule
  ],
})
export class LandingModule {}
