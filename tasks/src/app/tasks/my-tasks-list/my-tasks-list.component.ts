import { Component } from '@angular/core';
import { TaskDto } from '../../data-types/TaskDto';
import { TasksService } from '../../service/tasks.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AssignUserDto } from '../../data-types/AssignUserDto';


const status = {
  TO_DO: "Not started",
  IN_PROGRESS: "In progress",
  DONE: "Done"
}

@Component({
  selector: 'app-my-tasks-list',
  standalone: false,
  templateUrl: './my-tasks-list.component.html',
  styleUrl: './my-tasks-list.component.scss'
})
export class MyTasksListComponent {
  tasks: TaskDto[] = [];
  user: string;

  constructor(private taskService: TasksService, private cookieService: CookieService, private router: Router) {
    this.user = this.cookieService.get('Username');
    this.fetchAllTasksAssignedTo();
  }

  fetchAllTasksAssignedTo() {
    const assignUser: AssignUserDto = {username: this.user};
    this.taskService.getAllTasksAssignedTo(assignUser).subscribe(tasks => {
        this.tasks = tasks;
      }
    )
  }

  getStatusValue(key: string) {
    return status[key as keyof typeof status] || "Unknown Status";
  }

  startTask(task: TaskDto) {
    const updatedTask = {
      ...task,
      status: 'IN_PROGRESS',
    }

    this.taskService.updateTaskStatus(updatedTask).subscribe({
      next: () => {
        console.log('Task status updated successfully!');
        alert('Task status updated successfully!');
        this.fetchAllTasksAssignedTo();
      },
      error: (err) => {
        console.error('Error updating task status:', err);
        alert('Failed to update task status. Please try again.');
      }
    });
  }

  markTaskAsDone(task: TaskDto) {
    const updatedTask = {
      ...task,
      status: 'DONE',
    }

    this.taskService.updateTaskStatus(updatedTask).subscribe({
      next: () => {
        console.log('Task status updated successfully!');
        alert('Task status updated successfully!');
        this.fetchAllTasksAssignedTo();
      },
      error: (err) => {
        console.error('Error updating task status:', err);
        alert('Failed to update task status. Please try again.');
      }
    });
  }

  moveTaskInTODO(task: TaskDto) {
    const updatedTask = {
      ...task,
      status: 'TO_DO',
    }

    this.taskService.updateTaskStatus(updatedTask).subscribe({
      next: () => {
        console.log('Task status updated successfully!');
        alert('Task status updated successfully!');
        this.fetchAllTasksAssignedTo();
      },
      error: (err) => {
        console.error('Error updating task status:', err);
        alert('Failed to update task status. Please try again.');
      }
    });
  }
}
