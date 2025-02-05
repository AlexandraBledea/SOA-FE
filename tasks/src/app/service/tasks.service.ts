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
  private updateUrl = this.baseUrl + '/update';
  private deleteUrl = this.baseUrl + '/delete';
  private assignUrl = this.baseUrl + '/assign';

  constructor(private httpClient: HttpClient) {}

  public getAllTasks(): Observable<any> {
    return this.httpClient.get(this.getAll);
  }

  public saveTask(saveData: TaskDto): Observable<any> {
    return this.httpClient.post(this.saveUrl, saveData);
  }

  getTaskById(id: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  updateTask(task: any): Observable<any> {
    return this.httpClient.put(this.updateUrl, task);
  }

  deleteTask(id: any): Observable<any> {
    return this.httpClient.delete(`${this.deleteUrl}/${id}`);
  }

  assignTask(taskId: string, userId: string): Observable<any> {
    return this.httpClient.post(`${this.assignUrl}/${taskId}`, { userId });
  }


}
