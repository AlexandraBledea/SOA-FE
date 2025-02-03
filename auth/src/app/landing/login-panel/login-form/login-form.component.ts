import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../service/user.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {AuthenticationDto} from '../../../data-types/AuthenticationDto';


@Component({
  selector: 'app-login-form',
  standalone: false,

  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  hidePassword = true;
  showPasswordErrorMessage = false;
  loginUserDataFormGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private cookieService: CookieService
  ) {
    this.loginUserDataFormGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  resetWarnings() {
    this.showPasswordErrorMessage = false;
  }

  loginUser() {
    const formValues = this.loginUserDataFormGroup.value;

    const loginData: AuthenticationDto = {
      email: formValues.email!,
      password: formValues.password!,
    };

    if (!this.loginUserDataFormGroup.invalid) {
      this.userService.login(loginData).subscribe({
        next: (result: any) => {
          if (result['token'] == '') this.showPasswordErrorMessage = true;
          else {
            this.cookieService.set('Token', result['token']);
          }
        },
      });
    }
  }
}
