import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginPanelComponent} from './login-panel/login-panel.component';
import {LoginFormComponent} from './login-panel/login-form/login-form.component';
import {LandingRoutingModule} from './landing-routing.module';
import {RegisterFormComponent} from './login-panel/register-form/register-form.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthenticationInterceptor} from '../service/authentication-service.service';

@NgModule({
  declarations: [LoginPanelComponent, LoginFormComponent, RegisterFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LandingRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
  ],
})
export class LandingModule {}
