import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginPanelComponent} from './login-panel/login-panel.component';
import {RegisterPanelComponent} from './register-panel/register-panel.component';
import {LoginFormComponent} from './login-panel/login-form/login-form.component';
import {LandingRoutingModule} from './landing-routing.module';

@NgModule({
  declarations: [LoginPanelComponent, RegisterPanelComponent,LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LandingRoutingModule
  ],
})
export class LandingModule {}
