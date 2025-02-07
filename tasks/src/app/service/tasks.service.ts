import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskDto } from '../data-types/TaskDto';
import { AssignUserDto } from '../data-types/AssignUserDto';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private baseUrl = 'http://localhost:4000/task';
  private getAll= this.baseUrl + '/all';
  private getAllAssignedTo= this.baseUrl + '/all-assigned-to';
  private saveUrl = this.baseUrl + '/save';
  private updateUrl = this.baseUrl + '/update';
  private updateStatusUrl = this.baseUrl + '/update-status';
  private deleteUrl = this.baseUrl + '/delete';
  private assignUrl = this.baseUrl + '/assign';
  private deadlineReminderUrl = this.baseUrl + '/get-deadline-reminder';


  constructor(private httpClient: HttpClient) {}

  public getAllTasks(): Observable<any> {
    return this.httpClient.get(this.getAll);
  }

  public getAllTasksAssignedTo(user: AssignUserDto): Observable<any> {
    return this.httpClient.post(this.getAllAssignedTo, user)
  }

  public updateTaskStatus(task: TaskDto) {
    return this.httpClient.put(this.updateStatusUrl, task);
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

  assignTask(taskId: string, user: AssignUserDto): Observable<any> {
    return this.httpClient.post(`${this.assignUrl}/${taskId}`, user);
  }

  getDeadlineReminters() {
    return this.httpClient.get(this.deadlineReminderUrl);
  }

}
