import {Component} from '@angular/core';
import {TaskDto} from '../../data-types/TaskDto';
import {TasksService} from '../../service/tasks.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';


const status = {
  TO_DO: "Not started",
  IN_PROGRESS: "In progress",
  DONE: "Done"
}

@Component({
  selector: 'app-tasks-list',
  standalone: false,

  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss'
})
export class TasksListComponent {

  tasks: TaskDto[] = [];
  username: string;

  constructor(private taskService: TasksService, private cookieService: CookieService, private router: Router) {
    this.fetchAllTasks();
    this.username = this.cookieService.get('Username');
  }

  fetchAllTasks() {
    this.taskService.getAllTasks().subscribe(tasks => {
        this.tasks = tasks;
      }
    )
  }

  delete(id: any) {
    this.taskService.deleteTask(id).subscribe({
      next: (response) => {
        alert('Task deleted successfully!');
        this.fetchAllTasks();
      },
        error: (err) => {
        alert('Failed to delete task. Please try again.');
      }
    });
  }

  getStatusValue(key: string) {
    return status[key as keyof typeof status] || "Unknown Status";
  }

  goToCreateTask() {
    this.router.navigate(['/main/tasks/create']);
  }

}
