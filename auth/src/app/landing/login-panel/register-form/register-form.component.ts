import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BirthDataValidator} from '../../../validators/birth-date-validator';
import {UserService} from '../../../service/user.service';
import {Router} from '@angular/router';
import {RegisterUserDto} from '../../../data-types/RegisterUserDto';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-register-form',
  standalone: false,

  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  hidePassword1 = true;
  hidePassword2 = true;

  showCreateAccountErrorMessage = false;
  errorMessage = '';

  registerFormGroup!: FormGroup;



  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.registerFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      dateOfBirth: ['', [Validators.required, BirthDataValidator.dateFormat]],
      password1: ['', Validators.required],
      password2: ['', Validators.required],
    });
  }


  createAccount() {
    const valuesFromForm = this.registerFormGroup.value;

    const passwordDoNotMatch =
      valuesFromForm.password1 !== valuesFromForm.password2;

    if (this.registerFormGroup.invalid || passwordDoNotMatch) {
      if (this.registerFormGroup.get('email')?.invalid) {
        this.errorMessage = 'Please enter a valid email address.';
      } else if (this.registerFormGroup.get('dateOfBirth')?.invalid) {
        this.errorMessage = 'Please enter a date of birth in the format yyyy-mm-dd.';
      } else if (passwordDoNotMatch) {
        this.errorMessage = 'Passwords must match.';
      } else {
        this.errorMessage = 'Please fill out all required fields.';
      }

      this.showCreateAccountErrorMessage = true;
      return;
    }

    const registerData: RegisterUserDto = {
      username: valuesFromForm.username,
      password: valuesFromForm.password1,
      email: valuesFromForm.email,
      dateOfBirth: valuesFromForm.dateOfBirth,
    };

    this.userService.register(registerData).subscribe({
      next: (result: any) => {
      },
      error: (errorResponse: HttpErrorResponse) => {
        if (errorResponse.error && errorResponse.error.errorMessage) {
          this.errorMessage = errorResponse.error.errorMessage;
        } else {
          this.errorMessage = 'An unexpected error occurred. Please try again later.';
        }
        this.showCreateAccountErrorMessage = true;
      }
    });
  }

  resetWarnings() {
    this.showCreateAccountErrorMessage = false;
  }

}
