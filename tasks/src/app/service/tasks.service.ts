import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TaskDto} from '../data-types/TaskDto';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private baseUrl = 'http://localhost:4000/task';
  private getAll= this.baseUrl + '/all';
  private saveUrl = this.baseUrl + '/save';

  constructor(private httpClient: HttpClient) {}

  public getAllTasks(): Observable<any> {
    return this.httpClient.get(this.getAll);
  }

  public saveTask(saveData: TaskDto): Observable<any> {
    return this.httpClient.post(this.saveUrl, saveData);
  }

}
