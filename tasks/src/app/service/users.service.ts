import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = 'http://localhost:4000/task/user';

  constructor(private httpClient: HttpClient) {}

  public getAllUsers(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }


}
