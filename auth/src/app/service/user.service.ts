import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationDto } from '../data-types/AuthenticationDto';
import { RegisterUserDto } from '../data-types/RegisterUserDto';


@Injectable({
  providedIn: 'root',
})
export class UserService {

  private baseUrl = 'http://localhost:4000/authentication';
  private loginUrl= this.baseUrl + '/login';
  private registerUdl = this.baseUrl + '/register';

  constructor(private httpClient: HttpClient) {}

  public login(loginData: AuthenticationDto): Observable<any> {
    return this.httpClient.post(this.loginUrl, loginData);
  }

  public register(registerData: RegisterUserDto): Observable<any> {
    return this.httpClient.post(this.registerUdl, registerData);
  }
}
